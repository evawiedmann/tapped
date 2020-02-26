import React from 'react';
import Header from './Header'
import KegList from './KegList';
import EditKeg from './EditKeg'
import NewKegForm from './NewKegForm';
import Error404 from './Error404';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  let content = {
    width: '400px',
    float: 'left',
  }

  return (
    <div style={content}>
    <Header/>
    <Switch>
    <Route exact path='/' component={KegList} />
    <Route path='/NewKegForm' component={NewKegForm} />
    <Route component={Error404} />
    </Switch>
    </div>
  );
}

export default App;
