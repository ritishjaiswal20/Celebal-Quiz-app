import React from 'react'
import "./LandingHeader.css"
import {Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Button } from '@mui/material';


function LandingHeader() {
  return (
    <div className="landingheader">
     
    <Link to="/">
    <img className="header-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEXke5jULuaxhwDvcTPl5OgPUt30h8Di1ZQ&usqp=CAU"alt="logo"/>
    </Link>
    

    <div className="header-right">
        <h1 className="landingheader-title">Features</h1>
        <h1 className="landingheader-quiz">Quiz</h1>
        <h1 className="landingheader-contact">Contact</h1>
        <button className="header-button-signin">
        SignIn</button>
        <button className="header-button-signout">
         SignOUt</button>
        <Avatar/>
    </div>
</div>
  )
}

export default LandingHeader