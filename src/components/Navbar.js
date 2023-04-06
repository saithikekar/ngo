import React from "react";
import { styled, alpha } from "@mui/material/styles";
import logo from "../assets/preview.jpg";
import Login from "../components/Login";
import {Routes, Route} from "react-router-dom";
import {useHistory} from "react-router-dom";
import profile from "../assets/prof.webp"


import {
  AppBar,
  Tab,
  Toolbar,
  Typography,
  Tabs,
  Button,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function navbar() {
  return (
    <>
      <React.Fragment>
        <AppBar sx={{ background: "#2c387e" }}>
          <Toolbar className="toolbar" >
            <img src={logo} alt="LOGO" className="logo" style={{width:"100px"}} />
            <Tabs className="navtabs" textColor="#FFFFF" values={0} indicatorColor="#48927">
              <Tab label="Home" Link="" style={{fontSize:"20px",padding:"10px"}}/>
              <Tab label="Contact Us" Link="" style={{fontSize:"20px",padding:"10px"}}/>
              <Tab label="Volunteer"Link="" style={{fontSize:"20px",padding:"10px"}}/>
              <Tab label="" />
            </Tabs>

            <a href="/login">
            <Button
              sx={{ marginLeft: "auto", marginRight: "8px" ,fontSize:"20px", width:"160px"}}
              variant="contained"  
            >
              Login
            </Button>
      </a>
      <a href="/donation">
            <Button
              sx={{ marginLeft: "auto", marginRight: "8px" ,fontSize:"20px", width:"160px"}}
              variant="contained"  
            >
              Donate
            </Button>
      </a>
            <a href='/logine'>
            <Button variant="contained" sx={{marginLeft: "10px",fontSize:"20px"}} >About us</Button></a>
        
            
            <Button variant="contained" style={{marginLeft:"10px", fontSize:"20px"}} >Change Language</Button>
            <div className="profile" >
            <a href="/dashboard"><img src={profile} className="profimg" ></img></a>
            </div>
            
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </>
  );
}

export default navbar;
