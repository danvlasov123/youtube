import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import {
  forceSimulation,
  forceManyBody,
  forceCollide,
  forceX,
  forceY,
} from "d3-force";

import { isMobile } from "react-device-detect";

interface BubbleNode {
  id: string;
  name: string;
  value: number;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

interface BubbleChartProps {
  width: number;
  height: number;
  data: Array<{ id: string; name: string; value: number }>;
}

export const BubbleChart: React.FC<BubbleChartProps> = ({
  width,
  height,
  data,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const maxValue = Math.max(...data.map((d) => d.value));

  const nodes: BubbleNode[] = data.map((item) => ({
    ...item,
    x: width / 2,
    y: height / 2,
  }));

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const radiusScale = d3.scaleSqrt().domain([0, maxValue]).range([10, 50]);

    const fontSizeScale = d3.scaleLinear().domain([0, maxValue]).range([8, 16]);

    const simulation = forceSimulation<BubbleNode>(nodes)
      .force("charge", forceManyBody().strength(-3))
      .force(
        "collision",
        forceCollide<BubbleNode>().radius((d) => radiusScale(d.value) + 1)
      )
      .force(
        "x",
        forceX<BubbleNode>(width / 2).strength(
          (d) => 0.15 * (d.value / maxValue)
        )
      )
      .force(
        "y",
        forceY<BubbleNode>(height / 2).strength(
          (d) => 0.15 * (d.value / maxValue)
        )
      )
      .on("tick", ticked);

    const group = svg.append("g"); // Группа для всех элементов, к которой будет применяться зум

    const circles = group
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", (d) => radiusScale(d.value))
      .attr("fill", "black")
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .call(
        d3
          .drag<SVGCircleElement, BubbleNode>()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    const labels = group
      .selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .text((d) => d.name)
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .style("pointer-events", "none")
      .style("font-size", (d) => `${fontSizeScale(d.value)}px`);

    // Функция для обработки тикания симуляции
    function ticked() {
      circles.attr("cx", (d) => d.x!).attr("cy", (d) => d.y!);
      labels.attr("x", (d) => d.x!).attr("y", (d) => d.y! + 5);
    }

    // Функции для перетаскивания
    function dragstarted(
      event: d3.D3DragEvent<SVGCircleElement, BubbleNode, unknown>,
      d: BubbleNode
    ) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x!;
      d.fy = d.y!;
    }

    function dragged(
      event: d3.D3DragEvent<SVGCircleElement, BubbleNode, unknown>,
      d: BubbleNode
    ) {
      d.fx = event.x;
      d.fy = event.y;
      simulation.alpha(0.3).restart();
    }

    function dragended(
      event: d3.D3DragEvent<SVGCircleElement, BubbleNode, unknown>,
      d: BubbleNode
    ) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
      simulation.alpha(0.3).restart();
    }
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 5])
      .on("zoom", (event: d3.D3ZoomEvent<SVGSVGElement, unknown>) => {
        group.attr(
          "transform",
          `translate(${event.transform.x},${event.transform.y}) scale(${event.transform.k})`
        );
      });

    svg.call(zoom);

    const initialTransform = d3.zoomIdentity
      .translate(width / 2, height / 2)
      .scale(0.5)
      .translate(-width / 2, -height / 2);

    if (isMobile) {
      svg.call(zoom.transform, initialTransform);
    }

    return () => {
      simulation.stop();
    };
  }, [width, height, data, maxValue]);

  return <svg ref={svgRef} width="100%" height="100%" />;
};
