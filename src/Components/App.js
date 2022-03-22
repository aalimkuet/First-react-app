import "./App.css";
import React from "react";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";
import Header from "./Header";

function MyApp() {
  const contacts = [
    {
      id: 1,
      name: "abdul alim",
      email: "aalim@gmail.com",
    },
    {
      id: 1,
      name: "Masud rana",
      email: "masud@gmail.com",
    },
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default MyApp;
