import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { isMobile } from "react-device-detect";

// Интерфейс одного элемента пузыря
export interface BubbleNode {
  id: string;
  name: string;
  value: number;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

// Интерфейс пропсов для компонента
interface BubbleChartProps {
  data: Array<{ id: string; name: string; value: number }>;
}

// Компонент BubbleChart
export const BubbleChart: React.FC<BubbleChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Очистка SVG перед рендером

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;
    const centerX = width / 2;
    const centerY = height / 2;

    const maxValue = Math.max(...data.map((d) => d.value));

    const radiusScale = d3.scaleSqrt().domain([0, maxValue]).range([10, 50]);
    const fontSizeScale = d3.scaleLinear().domain([0, maxValue]).range([4, 16]);
    const padding = 0;

    const nodes: BubbleNode[] = data.map((item) => {
      const radius = radiusScale(item.value);
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.max(radius + padding, Math.random() * 200 + 50);
      return {
        ...item,
        x: centerX + distance * Math.cos(angle),
        y: centerY + distance * Math.sin(angle),
      };
    });

    const group = svg.append("g");

    const circles = group
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("cx", (d) => d.x!)
      .attr("cy", (d) => d.y!)
      .attr("r", (d) => radiusScale(d.value))
      .attr("fill", "black")
      .call(
        d3
          .drag<SVGCircleElement, BubbleNode>()
          .on("start", (_, d) => {
            d.fx = d.x!;
            d.fy = d.y!;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
            d.x = event.x;
            d.y = event.y;
            simulation.alpha(0.3).restart();
          })
          .on("end", (_, d) => {
            d.fx = null;
            d.fy = null;
            simulation.alpha(0.3).restart();
          })
      );

    const labels = group
      .selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .text((d) => d.name)
      .attr("x", (d) => d.x!)
      .attr("y", (d) => d.y!)
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .style("pointer-events", "none")
      .style("font-size", (d) => `${fontSizeScale(d.value)}px`);

    // D3 Simulation с магнитизмом к центру
    const simulation = d3
      .forceSimulation<BubbleNode>(nodes)
      .force("charge", d3.forceManyBody().strength(-2))
      .force(
        "collision",
        d3
          .forceCollide<BubbleNode>()
          .radius((d) => radiusScale(d.value) + padding)
      )
      .force("x", d3.forceX(centerX).strength(0.06))
      .force("y", d3.forceY(centerY).strength(0.06))
      .on("tick", ticked);

    function ticked() {
      circles.attr("cx", (d) => d.x!).attr("cy", (d) => d.y!);
      labels.attr("x", (d) => d.x!).attr("y", (d) => d.y!);
    }

    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 5])
      .on("zoom", (event) => {
        group.attr("transform", event.transform);
      });

    svg.call(zoom);

    if (isMobile) {
      svg.call(zoom.transform, d3.zoomIdentity.translate(90, 120).scale(0.55));
    }

    return () => {
      simulation.stop();
    };
  }, [data]);

  return <svg ref={svgRef} style={{ width: "100%", height: "100%" }} />;
};
