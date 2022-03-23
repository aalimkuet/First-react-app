import "./App.css";
import { React, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";

function MyApp() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandle={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default MyApp;
