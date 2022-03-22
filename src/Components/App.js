import "./App.css";
import { React, useState } from "react";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";
import Header from "./Header";

function MyApp() {
  const [contacts, setContacts] = useState([], "");
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandle={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default MyApp;
