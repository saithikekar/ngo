import React, { Component } from 'react'
import Form from "./Form"
import Navbar from "./Navbar"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from "./Hero"
export class landing extends Component {
  render() {
    return (
        <>

        <Navbar></Navbar>
        <div className="herobg"><Hero></Hero></div>
        
      </>
    )
  }
}

export default landing
