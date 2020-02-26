import React from "react";
import EditKeg from './../EditKeg'
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';

function Keg(props){
  return (
    <div>
    <style jsx>{`
      div {
        background-color: lavender;
      }
      `}</style>
      <h3>{props.name} - made by - {props.brand}</h3>
      <p><em>{props.price}</em></p>
      <p><em>{props.alcoholContent}</em></p>
      <hr/>
      </div>
    );
  }

  function editCurrentKeg(){
    (<EditKeg
      name = {props.name}
      brand = {props.brand}
      price = {props.price}
      ABV = {props.ABV}/>

    )
  }else {
    (null)
  }
}


return (
  <div>
  {content}
  <p className='button' onClick={()=> onEditClick()}>Edit Keg Information</p>
    </div>
  );
}else {
  return(
    <div>
    {content}
    </div>
  )
}
}


export default Keg;
