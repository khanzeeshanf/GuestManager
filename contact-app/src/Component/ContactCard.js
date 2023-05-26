import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";


export default function ContactCard(props)
{
    const {name, email,mobile } = props.contact;
    const msg = name +" - "+mobile ;
    return(

        <div className="item" style={{ border: '1px solid #000' }}>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header"><b>{name}</b></div>
        <div>{email}</div> <div>{mobile}</div>
        <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
      ></i>
      </div>
      
    </div>
    );
}