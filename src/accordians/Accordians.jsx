import React from "react";
import SingleAccordians from "./SingleAccordians";
import { FAQs } from "./data";


const Accordians = () => {
  return (
    <>
      <div className="container col-lg-7 mx-auto shadow p-4">
        <h1 className="display-2 text-center">Accordions</h1>
        {FAQs.map((f)=>{
         return <SingleAccordians key={f.id} {...f} />
        })}
      </div>
    </>
  );
}

export default Accordians;
