import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const SingleAccordians = ({answer,question}) => {
    const [show,setShow] = useState(false)
  return (
    <>
    
    <div className="container bg-light p-3 d-flex my-2 justify-content-between">
        <div className="data">

        <h4>{question}</h4>
        {
            show &&
        <p className="text-secondary">
            {answer}
        </p>
        }
        </div>
        <div className="icon">
            {show ? <FiMinus size={30}cursor= 'pointer'onClick={()=>setShow(false)} /> : <GoPlus size={30}cursor= 'pointer'onClick={()=>setShow(true)} /> }
            
        </div>

    </div>
    
    </>
  )
}

export default SingleAccordians