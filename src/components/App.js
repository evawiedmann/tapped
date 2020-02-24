import React from 'react';
import Header from './components/Header'
import KegList from './components/KegList';
import NewKegControl from './components/NewKegControl';
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
    <Route path='/newkeg' component={NewKegControl} />
    <Route component={Error404} />
    </Switch>
    </div>
  );
}

export default App;
