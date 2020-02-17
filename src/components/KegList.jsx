import React from "react";
import Keg from "./Keg";

const kegList = [
 {
    name: "Eye of Newt",
    brand: "Witch's Brewery",
    price: "100",
    alcoholContent: "7"
 }
];

function KegList(){
  return (
    <div>
      <hr/>
      {kegList.map((keg, index) =>
        <Keg name={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        key={index}/>
      )}
    </div>
  );
}

export default KegList;
