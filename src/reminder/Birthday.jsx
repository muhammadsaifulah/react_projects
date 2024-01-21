import React, { useState } from 'react'
import SingleBirthday from './SingleBirthday'
import {bdays} from "./data"

const Birthday = () => {
const [data,setData] = useState(bdays)
const removeBDay =(id) => {
    const newBDays = data.filter((item)=>{
        return item.id !== id  
    })
    setData(newBDays)
}
  return (
    <>
    
    <div className="container col-lg-7 mx-auto shadow rounded-4 py-4">
        <h1 className="text-center display-4">
            {data.length} BIRTHDAYS TODAY 
        </h1>
        <div className="container">
            {data.map((func)=>{
                return <SingleBirthday key={func.id} {...func} remove= {removeBDay}/>
            })}
        </div>
        <button
  onClick={data.length === 0 ? ()=>setData(bdays) : ()=>setData([])}
  className={`btn ${data.length === 0 ? 'btn-success' : 'btn-danger'} mx-auto d-block`}
>
  {data.length === 0 ? 'Refresh All' : 'Remove All'}
</button>

    </div>
    
    </>
  )
}

export default Birthday