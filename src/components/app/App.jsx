import "./App.css";
import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";
import SearchBox from "../searchBox/SearchBox";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
