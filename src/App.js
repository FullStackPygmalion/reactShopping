import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

import Home from './pages/home'
import Detail from './pages/detail'
import Register from './pages/register'
import Login from './pages/login'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={Detail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

