import React from 'react'
import "./LandingHeader.css"
import {Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Button } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";
import { useStateValue } from "../StateProvider.js";
import { auth } from "../firebase";
function LandingHeader() {
  const [{ user }] = useStateValue();
  let navigate = useNavigate();
   const handleAuthentication = () => {
     if (user) {
        auth.signOut();
     }
    else
    {
      navigate('/login');
    }
   };
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

        {/* {!user ? (
          <button className="header-button-signout" onClick={handleSign}>
            Sign In
          </button>
        ) : (
          <button className="" onClick={handleSign}>
            SignOut
          </button>
        )} */}
        {/* <Link to={!user && "/login"}> */}

        <button onClick={handleAuthentication} className="header-button-signin">
          <span className="header_optionLineOne">Hello,{user?.email}</span>
          <span className="header_optionLineTwo">
            {user ? "Sign Out" : "Sign IN"}
          </span>
        </button>
        {/* </Link> */}
        <Avatar />
      </div>
    </div>
  );
}

export default LandingHeader