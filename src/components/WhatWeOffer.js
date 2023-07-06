import React from "react";
import OfferCard from "./Card/Offercard";
import { WhatWeOffer } from "./config";
// import color from "../../constant";
// import OfferCard from "../../components/Card/OfferCard";
// import { WhatWeOffer } from "../../config";

function WhatweOffer() {
  return (
    <>
      <div
        className="container-fluid wallpaper row d-flex justify-content-between my-5 py-3 py-md-5 px-5 mx-0 offerbg"
        id="myfeature"
      >
        <h1 className="Heading-1 text-center col-12 py-5" style={{color:"white"}}>What We Offer ?</h1>
        {WhatWeOffer.map((items) => {
          return <OfferCard data={items} />;
        })}
      </div>
    </>
  );
}

export default WhatweOffer;
