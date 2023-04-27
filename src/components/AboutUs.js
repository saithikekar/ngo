// import React from 'react'
// // import CssBaseline from '@mui/material/CssBaseline';
// // import Box from '@mui/material/Box';
// // import Container from '@mui/material/Container';
import './AboutUs.css';
// import Navbar from "./Navbar"
// import { Navbar } from 'react-bootstrap';
import React, { Component } from 'react'
import Form from "./Form"
import Navbar from "./Navbar"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from "./Hero"
import Instagram from "./Instagram";
import AboutFooter from "./AboutFooter"

function AboutUs() {
    return (
      <>
         <Navbar></Navbar>
        <div  id="heading">
          About Us
        </div>
        <div>
        NGO Connect is a website that aims to connect non-profit organizations with each other, as well as with potential donors, volunteers, and supporters. The platform provides a range of tools and resources to help NGOs increase their visibility, fundraising efforts, and overall impact.

The website's homepage features a clean and user-friendly design, with easy-to-navigate menus and search functions. Users can quickly access information on NGOs from around the world, and filter their search results based on various criteria, such as geographical location, focus area, and size.

NGO Connect offers a range of services to help non-profits connect with donors and supporters. These include online fundraising tools, such as crowdfunding and peer-to-peer fundraising campaigns, as well as social media integration and email marketing capabilities. NGOs can also use the platform to recruit volunteers and manage their volunteer programs.

In addition to its online tools, NGO Connect offers a range of resources and training materials to help non-profits improve their operations and increase their impact. These resources include webinars, workshops, and online courses on topics such as fundraising, marketing, and organizational management.

NGO Connect is a valuable resource for non-profits of all sizes and focus areas. By connecting NGOs with each other and with potential supporters, the platform helps to build a stronger and more effective global community of non-profit organizations.
        </div>
        <div className='video'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8fZIhH5KboA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </>
      
    )
  }
  




export default AboutUs


