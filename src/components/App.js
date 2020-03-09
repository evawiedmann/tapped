import React from 'react';
import Header from './Header'
import KegList from './KegList';
import EditKeg from './EditKeg'
import NewKegForm from './NewKegForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allKegs: []
    };

    this.handleAddNewKeg = this.handleAddNewKeg.bind(this)
    this.sellPint = this.sellPint.bind(this)
  }

  handleAddNewKeg(keg) {
    let list = this.state.allKegs.slice();
    list.push(keg)
    this.setState({allKegs: list})
  }

  sellPint(){
    let pintsVar = this.state.totalPints;
    pintsVar -= 1
    this.setState({totalPints: pintsVar})
  }


render() {

  let content = {
    width: '400px',
    float: 'left',
  }

  return (
    <div style={content}>
    <Header/>
    <Switch>
    <Route exact path='/' render={()=><KegList allKegs={this.state.allKegs}/>}/>
    <Route path='/NewKegForm' render={()=><NewKegForm createKeg={this.handleAddNewKeg} kegList={this.state.allKegs}/>}/>


    <Route component={Error404} />
    </Switch>
    </div>
  );
}
}

export default App;
