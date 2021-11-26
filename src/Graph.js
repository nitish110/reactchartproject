
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { LineChart, Pie, PieChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';


const Graph = () => {
    const [chartData, setChartData] = useState({});
    // const [age, setage] = useState({});
    // const [salary, setsalary] = useState({})
    console.log(chartData)
    
    const [employeeSalary, setEmployeeSalary] = useState([]);
    const [employeeAge, setEmployeeAge] = useState([]);


    const Chart = () => {
        let empSal = [];
        let empAge = [];

        axios.get("http://dummy.restapiexample.com/api/v1/employees")
            .then(res => {
                // console.log(res);
                for (const dataObj of res.data.data) {
                    empSal.push(parseInt(dataObj.employee_salary));
                    empAge.push(parseInt(dataObj.employee_age));

                }
                setChartData({
                    data:[{
                    age:empAge,
                    salary:empSal,
                }]
                })
                // setage({
                //     age: empAge,
                // });
                // setsalary({
                //     salary:empSal
                // })
            })
            .catch(err => {
                console.log(err);
            })

    }
    useEffect(() => {
        Chart();
    }, []);
    return (
        <div className="App">
            {/* <h1>Bar Chart</h1>
            

            <ResponsiveContainer width="100%" aspect={3}>
                <AreaChart
                    style={{ backgroundColor: '#050A30' }}
                    width={500}
                    height={300}
                    data={chartData.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="chartData.data.age" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="chartData.salary" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer> */}

            <ResponsiveContainer width="100%" aspect={3}>
        {/* // aspect is height */}
        <LineChart data={chartData} width={500} height={300} style={{ backgroundColor: 'black' }} margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="" interval={'preserveStartEnd'} tickFormatter={(value) => value + " Programming"} />
          {/* interval={'preserveStartEnd'} more than 5 end point */}
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
          <Legend />
          <Line type="monotone" dataKey="" stroke="red" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} /> */}
        </LineChart>
      </ResponsiveContainer>


        </div>
    )
}

export default Graph;