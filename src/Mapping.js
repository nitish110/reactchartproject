import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";

export default function Mapping() {
    const [jsondata, setjsondata] = useState([]);
  console.log(jsondata)
  useEffect(() => {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then(res =>{
       const mydata=res.data;
       console.log(mydata)
        setjsondata({
          jsondata:mydata
        });
      
      } )
      .catch(err => console.error(err));
     
  }, []);
  return (
    <>
     {/* <div style={{height:'500px', width:'100%', backgroundColor:'red'}}>
       {jsondata && jsondata.data.map(datas=>{
         return <li>{datas.data.employee_name}</li>
       })}
      </div> */}
    </>
  );
}
