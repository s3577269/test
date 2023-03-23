import React, { Component } from 'react'
import { Route,Routes } from "react-router-dom";
import Login from './pages/login';
import Create from './pages/create';
import IndexPage from './pages/indexpage';


export default class App extends Component {
  render() {
    return (
      <div>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      </div>
    )
  }
}
