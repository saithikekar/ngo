import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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
        <div className="col-1" style={{padding:"5px 5px 5px 8px"}}>
          <h2 style={{textAlign:"center" ,padding:"0 0 0 40px"}}>Your Previous Job Experience</h2>
          <div className="row1" style={{padding:"1px 2px 12px 75px"}} >
            <TextField required id="outlined-required" label="Job Type" />
            <TextField required id="outlined-required" label="No of years worked" />
          </div>
          <div className="row2" style={{padding:"1px 3px 12px 75px"}} >
            <TextField required id="outlined-required" label="City" />
            <TextField required id="outlined-required" label="State" />
          </div>
          <div>
          <h2 style={{textAlign:"center" ,padding:"0 0 0 40px"}}>Your Bio</h2>
          </div>
          <div className="row3" style={{padding:"1px 3px 65px 60px"}} >
            <input type="text" placeholder="Write about yourself" style={{border:"1px solid", height:"70px"}}/>
          </div>
        </div>
        
      </div>
    </Box>
  );
}
