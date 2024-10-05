"use client";
import React, { useEffect, useRef, useState } from "react";
import { select, selectAll, Selection } from "d3-selection";
import { scaleLinear } from "d3-scale";

const data = [
  {
    name: "foo",
    number: 9000,
    color: 'yellow',
  },
  {
    name: "bar",
    number: 1015,
    color: 'orange',
  },
  {
    name: "baz",
    number: 6201,
    color: 'purple',
  },
  {
    name: "hogre",
    number: 8741,
    color: 'blue',
  },
  {
    name: "dfas",
    number: 1548,
    color: 'red',
  },
  {
    name: "yghws",
    number: 4853,
    color: 'green',
  },
];

const App = () => {
  const ref = useRef<SVGSVGElement | null>(null);
  const [selection, setSelection] = useState<Selection<
    SVGSVGElement | null,
    unknown,
    null,
    undefined
  > | null>(null);

  const y = scaleLinear().domain([0, 10000]).range([0, 500]);

  useEffect(() => {
    if (!selection) {
      setSelection(select(ref.current));
    } else {
      // console.log("y(0)", y(0))
      // console.log("y(2305)", y(2305))
      // console.log("y(8754)", y(8754))
      // console.log("y(10000)", y(10000))

      // const rect = selection
      //   .selectAll("rect")
      //   .data(data)
      //   .attr("width", 100)
      //   .attr("height", (d) => y(d.number))
      //   .attr("x", (_, i) => i * 100)
      //   .attr("fill", (d) => d.color);

      // rect
      //   .enter()
      //   .append("rect")
      //   .attr("width", 100)
      //   .attr("height", (d) => y(d.number))
      //   .attr("x", (_, i) => i * 100)
      //   .attr("fill", (d) => d.color);

      selection
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("height", (d) => y(d.number))
        .attr("width", (d) => 100)
        .attr("x", (_, i) => i * 100)
        .attr("fill", (d) => d.color);
    }
  }, [selection]);

  return (
    <div>
      <svg ref={ref} width={600} height={500}>
      </svg>
    </div>
  );
};

export default App;
