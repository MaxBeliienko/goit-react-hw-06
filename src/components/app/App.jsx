import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";
import SearchBox from "../searchBox/SearchBox";

function App() {
  const [contactArray, setContactArray] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contactArray));
  }, [contactArray]);

  const [inputValue, setInputValue] = useState("");
  const handleChangeSearch = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNewContact = (newContact) => {
    setContactArray((prevState) => {
      return [...prevState, newContact];
    });
  };

  const handleDeleteContact = (contactId) => {
    setContactArray((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const filteredContacts =
    contactArray &&
    contactArray.filter((contact) =>
      contact.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addNewContact={handleAddNewContact} />
      <SearchBox inputValue={inputValue} onChange={handleChangeSearch} />
      <ContactList
        contactArray={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
