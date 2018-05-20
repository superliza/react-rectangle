import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CuadrateRightUp from './components/CuadrateRightUp';
import CuadrateCenter from './components/CuadrateCenter';
import CuadrateLeftDown from './components/CuadrateLeftDown';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CuadrateRightUp className='RightUp'/>
        <CuadrateCenter className='Center'/>
        <CuadrateLeftDown className='LeftDown'/>
      </div>
    );
  }
}

export default App;
