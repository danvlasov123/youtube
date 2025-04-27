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

    // Получаем размеры SVG из самого элемента
    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    const centerX = width / 2;
    const centerY = height / 2;

    const maxValue = Math.max(...data.map((d) => d.value));

    // Скейлы для радиуса и шрифта
    const radiusScale = d3.scaleSqrt().domain([0, maxValue]).range([10, 50]);
    const fontSizeScale = d3.scaleLinear().domain([0, maxValue]).range([8, 16]);

    // Расстояние между пузырьками
    const padding = 0.1;

    // Расставляем пузырьки так, чтобы они притягивались к центру
    const nodes: BubbleNode[] = data.map((item) => {
      // Используем значение пузырька для того, чтобы определить его начальное расстояние от центра
      const radius = radiusScale(item.value);
      const angle = Math.random() * 2 * Math.PI; // случайный угол
      const distance = Math.max(radius + padding, Math.random() * 200 + 50); // Используем радиус для начального расстояния от центра

      return {
        ...item,
        x: centerX + distance * Math.cos(angle), // Позиция по оси X
        y: centerY + distance * Math.sin(angle), // Позиция по оси Y
      };
    });

    // Определение группы для всех элементов
    const group = svg.append("g");

    // Добавление кружков на экран
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
            // Начало перетаскивания
            d.fx = d.x!;
            d.fy = d.y!;
          })
          .on("drag", (event, d) => {
            // Перетаскивание
            d.fx = event.x;
            d.fy = event.y;
            d.x = event.x;
            d.y = event.y;
            simulation.alpha(0.3).restart(); // Перезапуск симуляции
          })
          .on("end", (_, d) => {
            // Завершение перетаскивания
            d.fx = null;
            d.fy = null;
            simulation.alpha(0.3).restart(); // Перезапуск симуляции
          })
      );

    // Добавление текста с именами
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

    // Применяем притягивание
    const simulation = d3
      .forceSimulation<BubbleNode>(nodes) // Указываем тип узлов как BubbleNode
      .force("charge", d3.forceManyBody().strength(0)) // Убираем заряд
      .force(
        "collision",
        d3.forceCollide<BubbleNode>().radius((d) => {
          console.log(d);
          return radiusScale(d.value + padding);
        })
      )
      .force(
        "center",
        d3.forceCenter(centerX, centerY).strength(0.05) // Притягиваем к центру
      )
      .on("tick", ticked);

    // Функция для обновления положения элементов
    function ticked() {
      circles.attr("cx", (d) => d.x!).attr("cy", (d) => d.y!);
      labels.attr("x", (d) => d.x!).attr("y", (d) => d.y!);
    }

    // Добавление зума
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 5]) // Масштабируем от 0.5 до 5
      .on("zoom", (event) => {
        group.attr("transform", event.transform); // Применяем трансформацию зума
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
