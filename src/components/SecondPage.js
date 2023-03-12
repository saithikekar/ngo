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
        <div className="col-1" style={{padding:"5px 5px 5px 5px"}}>
            <h2 style={{textAlign:"center"}}>Add Your top 5 skills</h2>
          <form id="form" className="flex flex-col" >
            <input type="text" placeholder="Skill 1" style={{border:"1px solid #2991f8"}}/>
            <input type="text" placeholder="Skill 2" style={{border:"1px solid #2991f8"}}/>
            <input type="text" placeholder="Skill 3" style={{border:"1px solid #2991f8"}}/>
            <input type="text" placeholder="Skill 4" style={{border:"1px solid #2991f8"}}/>
            <input type="text" placeholder="Skill 5" style={{border:"1px solid #2991f8"}}/>
          </form>
          
        </div>
        
      </div>
    </Box>
  );
}
