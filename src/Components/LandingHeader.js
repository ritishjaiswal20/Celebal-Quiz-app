import React from 'react'
import "./LandingHeader.css"
import {Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Button } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";


function LandingHeader() {

  let navigate = useNavigate();
  const handleSign=()=>{
     navigate("./login");
  }
  return (
    <div className="landingheader">
      <Link to="/">
        <img
          className="header-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEXke5jULuaxhwDvcTPl5OgPUt30h8Di1ZQ&usqp=CAU"
          alt="logo"
        />
      </Link>

      <div className="header-right">
        <Link to="/features">
          <h1 className="landingheader-title">Features</h1>
        </Link>
        <Link to="/home">
          <h1 className="landingheader-quiz">Quiz</h1>
        </Link>
        <Link to="/payment">
          <h1 className="landingheader-title">Donate</h1>
        </Link>
        <Link to="/contact">
          <h1 className="landingheader-contact">Contact</h1>
        </Link>
      

        <button className="header-button-signin" onClick={handleSign}>
          SignOut
        </button>
        <button className="header-button-signout" onClick={handleSign}>
          Sign In
        </button>
        <Avatar />
      </div>
    </div>
  );
}

export default LandingHeader