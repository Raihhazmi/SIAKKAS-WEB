
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { Grade } from '../../types';

interface GradeChartProps {
  data: Grade[];
  semester: number;
}

const GradeChart: React.FC<GradeChartProps> = ({ data, semester }) => {
  const filteredData = data.filter(grade => grade.semester === semester);

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={filteredData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="subject" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} name="Score"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GradeChart;
