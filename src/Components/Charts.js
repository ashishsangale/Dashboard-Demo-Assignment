import React, { useState, useEffect } from 'react'
import { Line, Pie } from 'react-chartjs-2';

function Charts({Graph}) {
    const [data, setData] = useState({})

    useEffect(() => {
        getData();
    }, []);

    const getData = () =>{
        
        setData({
          data:{
            labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
            datasets:[
              {
                label:'Population',
                data:[
                  617594,
                  181045,
                  153060,
                  106519,
                  105162,
                  95072
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
          }
        });
    }
    console.log(data)

    
        return (
            <div>
                <Line data={data} options={{ maintainAspectRatio: false, responsive: true }}/>
            </div>
        )
    
}

export default Charts;