import React from 'react';  
import ReactDOM from 'react-dom';  
import { Route, Link, BrowserRouter as Router, Redirect } from 'react-router-dom'  

import './index.css'
import TicTacToe from './Components/tic-tac-toe'; 
import ConnectFour from './Components/connect-four';
import Weather from './Components/weather';
import Yvonne from './Components/yvonne';

const routing = (  
  <Router>  
    <div className="navbar">
      <a><Link to="/">Home</Link></a>   
      <a><Link to="/tictactoe">Tic-Tac-Toe</Link></a>
      <a><Link to="/connectfour">Connect-Four</Link></a>
      <a><Link to="/yvonne">Yvonne</Link></a>
    </div>  
    <Route exact path="/" component={Weather}/> 
    <Route path="/tictactoe" component={TicTacToe}/> 
    <Route path="/connectfour" component={ConnectFour}/> 
    <Route path="/yvonne" component={Yvonne}/>
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root'));  