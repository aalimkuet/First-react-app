import React from "react";
import userImage from "../Image/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={userImage} alt="User"></img>
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        style={{ color: "red", float: "right", fontSize: "20px" }}
        className="trash alternate outline icon"
      ></i>
    </div>
  );
};

export default ContactCard;
