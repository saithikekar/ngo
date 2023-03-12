import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import profile from "../assets/prof.webp"
function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <h3 style={{textAlign:"center"}}>Profile Photo</h3>
      
      <div>
        <img src={profile} style={{height:"260px"}}></img>
      </div>
    </React.Fragment>
  );
}