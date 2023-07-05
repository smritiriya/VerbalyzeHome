import React from "react";
// import { Accodiondata } from "../../../config";
// import { BlogCardData } from "../../../config";
// import AccordionCard from "./AccordianCard/AccordianCard";
import { Accodiondata } from "./config";
import AccordionCard from "./Card/AccordianCard";

// import color from "../../../constant";
// import AccordionCard from "../../../components/cards/AccordianCard";

function FAQ({data}) {
  return (
    <>
      <div
        className="row  m-0 d-flex justify-content-center my-5 py-5 py-md-5"
        style={{ background: "#f5f5f5" }}
        id="myfaq"
      >
        <p
          className="text-center py-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{ color: "blue", fontSize: "20px" }}
        >
          <b>FAQ's</b>
        </p>
        <text
          className="Heading-1 text-center col-12 py-2 "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Find the answers you need
        </text>
        <div className="col-9 col-lg-7 col-sm-8">
          <div className="row">
            {Accodiondata.map((items) => {
              return <AccordionCard data={items} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
