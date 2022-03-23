import React from "react";
import userImage from "../Image/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div className="item">
      <img className="ui avatar image" src={userImage} alt="User"></img>
      <div className="content">
        <div className="header" style={{ color: "Green" }}>
          {name}
        </div>
        <div style={{ color: "Red" }}>{email}</div>
      </div>
      <i
        style={{
          color: "red",
          float: "right",
          fontSize: "20px",
          marginTop: "8px",
        }}
        className="trash alternate outline icon"
        onClick={() => {
          props.clickHandler(id);
        }}
      ></i>
    </div>
  );
};

export default ContactCard;
