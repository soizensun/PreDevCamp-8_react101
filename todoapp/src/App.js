import React from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import TodolistClassComponent from './components/TodolistClassComponent'
import TodolistFunctionComponent from './components/TodolistFunctionComponent'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ HomePage }/>
      <Route path="/todolistClassComponent" component={ TodolistClassComponent }/>
      <Route path="/todolistFunctionComponent" component={ TodolistFunctionComponent }/>
    </BrowserRouter>
  );
}

export default App;
