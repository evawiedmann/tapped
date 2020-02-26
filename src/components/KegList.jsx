import React from 'react'

class KegList extends React.Component{

  constructor(props) {
    console.log(props)
    super(props)
    this.state = {
      totalPints: 124,
    }
    console.log(this)
    this.sellPint = this.sellPint.bind(this)
  }
  sellPint(){
    let pintsVar = this.state.totalPints
    pintsVar -= 1
    this.setState({totalPints: pintsVar})
    console.log(pintsVar)

  }
  render(){
    let kegStyle = {
      height: '90px',
      width: '400px',
      border: '1px solid lightgrey',
      marginLeft: '425px',
    }

    let anotherPint = {
      marginTop: '30px',
    }

    let kegContent = {
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
      // backgroundColor: 'darkred',
      marginTop: '-15%',
      marginLeft: '40px',
    }

    return(
      <div style={kegStyle}>
        <h4 style={kegContent}> {this.props.content}</h4>
        <div style={square}>
          <p onClick={this.sellPint}style={anotherPint}>Sell</p><p>Pints Remaining:</p> {this.state.totalPints}
        </div>
      </div>

    )
  }
}
export default KegList
