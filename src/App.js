import React from 'react';
import logo from './logo.svg';
import KegList from './components/KegList';
import NewKegForm from './components/NewKegForm';
import Header from './components/Header'
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
    <Route path='/newkeg' component={NewKegForm} />
    </Switch>
    </div>
  );
}

export default App;
