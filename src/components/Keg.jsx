import React from "react";
import PropTypes from "prop-types";

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

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired
};

export default Keg;
