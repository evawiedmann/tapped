import React from "react";
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';

function Keg(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.brand}</h3>
      <h4>{props.price}</h4>
      <h4>{props.abv}</h4>
      <hr/>
      </div>
    );

  // function editCurrentKeg(){
  //   (<EditKeg
  //     id = {props.id}
  //     name = {props.name}
  //     brand = {props.brand}
  //     price = {props.price}
  //     abv = {props.abv}/>
  //
  //   )
  // }else {
  //   null
  // }


// return (
//   <div>
//   {content}
//   <p className='button' onClick={()=> editCurrentKeg()}>Edit Keg Information</p>
//     </div>
//   );
//   return(
//     <div>
//     {content}
//     </div>
//   )
}


export default Keg;
