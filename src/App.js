import './App.css';
 

import { LineChart, Pie, PieChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
const pdata = [
  {
    name: 'Python',
    student: 13,
    fees: 10
  },
  {
    name: 'Javascript',
    student: 15,
    fees: 12
  },
  {
    name: 'PHP',
    student: 5,
    fees: 10
  },
  {
    name: 'Java',
    student: 10,
    fees: 5
  },
  {
    name: 'C#',
    student: 9,
    fees: 4
  },
  {
    name: 'R',
    student: 15,
    fees: 6
  },
  {
    name: 'js',
    student: 12,
    fees: 18
  },
  {
    name: '.net',
    student: 20,
    fees: 18
  },
  {
    name: 'data science',
    student: 15,
    fees: 2
  },



];

function App() {

  return (



    <>
      <h1 className="chart-heading">Line Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        {/* // aspect is height */}
        <LineChart data={pdata} width={500} height={300} style={{ backgroundColor: 'black' }} margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + " Programming"} />
          {/* interval={'preserveStartEnd'} more than 5 end point */}
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
          <Legend />
          <Line type="monotone" dataKey="student" stroke="red" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <h1 className="chart-heading">Area Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          style={{ backgroundColor: '#050A30' }}
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="student" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>

      <h1 className="chart-heading">Bar Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          className="barchart"
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="student" fill="#8884d8" />
          <Bar dataKey="fees" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default App;
