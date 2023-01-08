import React from 'react'
import { LineChart, YAxis, XAxis, Line, Tooltip, Legend } from "recharts";

export const Graph = ({Data,width}) => {
  return (
    <div>
        <LineChart
        width={width}
        height={250}
        data={Data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />

        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  )
}
