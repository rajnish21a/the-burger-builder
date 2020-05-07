import React from "react";
import classes from "./Logo.module.css";
import LogoImage from "../../assets/images/original.png";



const logo = (props)=>{
  return (
  <div className={classes.Logo}>
    <img src={LogoImage} alt="Logo"/>
  </div>
  )

}

export default logo;