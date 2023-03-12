import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { fontFamily } from "@mui/system";
// import {useRef} from "react";
  
export default function FirstPage() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="register" >
        
        <div className="col-1" style={{padding:"5px 5px 5px 5px"}}>
        <h2 style={{textAlign:"center"}}>Fill your details</h2>
          <div className="row1" style={{padding:"1px 4px 12px 30px"}} >
            <TextField required id="outlined-required" label="First name" />
            <TextField required id="outlined-required" label="Last Name" />
          </div>
          <div className="row2" style={{padding:"20px 4px 12px 30px"}}>
            <TextField required id="outlined-required" label="Phone Number" />
            <TextField required id="outlined-required"
        InputLabelProps={{
          shrink: true
        }} label="Date Of Birth" type="date" />
          </div>
          <div className="row3" style={{padding:"20px 4px 12px 30px"}}>
          <TextField required id="outlined-required" label="State" />
            <TextField
              required
              id="outlined-required"
              label="Country"
            />
            
          </div>
          <div className="row4" style={{padding:"20px 4px 12px 30px"}}>
            <TextField
              required
              id="email"
              label="Your Email ID"
              // ref={emailInputRef}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              // ref={passwordInputRef}
            />
          </div>
        </div>
        
      </div>
    </Box>
  );
}
