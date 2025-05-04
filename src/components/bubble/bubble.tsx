import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { isMobile } from "react-device-detect";

export interface BubbleNode {
  id: string;
  name: string;
  value: number;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

interface BubbleChartProps {
  data: Array<{ id: string; name: string; value: number }>;
}

export const BubbleChart: React.FC<BubbleChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) {
      return () => {};
    }

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;
    const centerX = width / 2;
    const centerY = height / 2;

    const maxValue = Math.max(...data.map((d) => d.value));

    const radiusScale = d3.scaleSqrt().domain([0, maxValue]).range([10, 50]);
    const fontSizeScale = d3.scaleLinear().domain([0, maxValue]).range([4, 16]);

    const nodes: BubbleNode[] = data.map((item) => ({
      ...item,
      x: centerX,
      y: centerY,
    }));

    const group = svg.append("g");

    const simulation = d3
      .forceSimulation<BubbleNode>(nodes)
      .force("charge", d3.forceManyBody().strength(-10))
      .force(
        "collision",
        d3.forceCollide<BubbleNode>().radius((d) => radiusScale(d.value) + 1)
      )
      .force("x", d3.forceX(centerX).strength(0.06))
      .force("y", d3.forceY(centerY).strength(0.06));

    const circles = group
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", (d) => radiusScale(d.value))
      .attr("fill", "black")
      .call(
        d3
          .drag<SVGCircleElement, BubbleNode>()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3);
            d.fx = d.x!;
            d.fy = d.y!;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    const labels = group
      .selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .text((d) => d.name)
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .style("pointer-events", "none")
      .style("font-size", (d) => `${fontSizeScale(d.value)}px`);

    simulation.on("tick", () => {
      circles.attr("cx", (d) => d.x!).attr("cy", (d) => d.y!);
      labels.attr("x", (d) => d.x!).attr("y", (d) => d.y!);
    });

    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 5])
      .on("zoom", (event) => group.attr("transform", event.transform));

    svg.call(zoom);

    if (isMobile) {
      svg.call(zoom.transform, d3.zoomIdentity.translate(90, 120).scale(0.55));
    }

    return () => simulation.stop();
  }, [data]);

  return <svg ref={svgRef} width="100%" height="100%" />;
};
