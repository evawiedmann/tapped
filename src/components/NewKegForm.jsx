import React from 'react';

function NewKegForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'
          ref={(input) => {_name = input}}/>
        <input
          type='text'
          id='brand'
          placeholder='Brewery Name'
          ref={(input) => {brand = input}}/>
        <input
          type='text'
          id='price'
          placeholder='Price Per Keg'
          ref={(input) => {_price = input}}/>
        <input
          type='text'
          id='alcoholContent'
          placeholder='ABV'
          ref={(input) => {_abv = input}}/>
        <button type='submit'>Add!</button>
      </form>
    </div>
  );
}

export default NewKegForm;
