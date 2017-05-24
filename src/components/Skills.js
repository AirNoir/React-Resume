import React,{Component} from 'react';
import {Radar, RadarChart, PolarGrid, Legend,
         PolarAngleAxis, PolarRadiusAxis} from 'recharts'

const data = [
    { subject: 'JavaScript', A: 120, B: 110, fullMark: 150 },
    { subject: 'C#', A: 98, B: 130, fullMark: 150 },
    { subject: 'SQL Server', A: 86, B: 130, fullMark: 150 },
    { subject: 'CSS', A: 99, B: 100, fullMark: 150 },
    { subject: 'Design Pattern', A: 85, B: 90, fullMark: 150 },
    { subject: 'Algorithm', A: 65, B: 85, fullMark: 150 },
];


export default class SKills extends Component {
    render(){
        return (
         <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis/>
         </RadarChart>

        );
    }
}