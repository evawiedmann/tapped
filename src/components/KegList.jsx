import React from 'react';
import Keg from './Keg';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';

function KegList(props) {

  let kegStyle = {
    // height: '90px',
    // width: '400px',
    // border: '1px solid lightgrey',
    // marginLeft: '425px',
  }

  let anotherPint = {
    // marginTop: '30px',
  }

  let kegContent = {
    // marginLeft: '20%',
    //
    // border: '1px solid lightblue',
    // display: 'flex',
    // justifyContent: 'flex-start',
    // padding: '10px',
    // width: '270px',
  }

  let square = {
    // height: '29px',
    // width: '29px',
    // border: '1px solid darkred',
    // // backgroundColor: 'darkred',
    // marginTop: '-15%',
    // marginLeft: '40px',
  }

  return(
    <div style={kegStyle}>
      <h4 style={kegContent}> {props.content}</h4>
        <div style={square}>
        <div>
        {props.allKegs.map((keg, index) =>
          <Keg
            names={keg.name}
            brand={keg.brand}
            price={keg.price}
            ABV={props.ABV}
            key={index}/>
        )}
        </div>
      // <p onClick={props.sellPint}style={anotherPint}>Sell</p><p>Pints Remaining:</p> {props.totalPints}
      </div>
    </div>

  )
}
export default KegList;
