import React from "react";
import user from "../images/user.png";


export default function ContactCard(props)
{
    const {name, email,mobile } = props.contact;
    return(
        <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header"><b>{name}</b></div>
        <div>{email}</div> <div>{mobile}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
      ></i>
    </div>
    );
}