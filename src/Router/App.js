import React, { Component } from 'react'
import { Route,Routes,Link } from "react-router-dom";
import Login from './pages/login';
import Create from './pages/create';
import IndexPage from './pages/indexpage';
import User from './pages/user';

export default class App extends Component {
  render() {
    return (
      <div>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/atlas" element={<Create />} />
        <Route path="/atlas/:id" element={<User />}/>
      </Routes>
      </div>
    )
  }
}
