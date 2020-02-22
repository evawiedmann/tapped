import React from "react";

// const kegList = [
  //   {
    //     name: "Eye of Newt",
    //     brand: "Witch's Brewery",
    //     price: "100",
    //     alcoholContent: "7"
    //   }
    // ];

    class KegList extends React.Component{
      render(){
        return(

          <div>
          <hr/>
          <p>
          {props.kegList.map((keg, index) =>
            <Keg
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            <p onClick={this.sellPint}style={sellPint}>Sell Pint</p>{this.state.totalPints}/>
          )}
          </div>

          sellPint(){
            let pintsVar = this.state.totalPints
            pintsVar += 1
            this.setState({totalPints: pintsVar})
            console.log(pintsVar)

          }
          render(){
            let tweetStyle = {
              height: '90px',
              width: '400px',
              border: '1px solid lightgrey',
              marginLeft: '425px',
            }

            let pints = {
              marginTop: '30px',
            }

            let pintContent = {
              marginLeft: '20%',

              border: '1px solid lightblue',
              display: 'flex',
              justifyContent: 'flex-start',
              padding: '10px',
              width: '270px',
            }

            let square = {
              height: '29px',
              width: '29px',
              border: '1px solid darkred',
              backgroundColor: 'darkred',
              marginTop: '-15%',
              marginLeft: '40px',
            }
            export default KegList;
