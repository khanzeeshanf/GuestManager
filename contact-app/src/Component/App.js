import React ,{ useState ,useEffect}from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from "./Header";
import AddContact from "./AddContact";
import "./App.css";
import ContactList from "./ContactList"



function App() {

  const LOCAL_STG_KEY ="KEY_contact"
  const [contacts,setContacts]=useState([]);

  const addContactHandler = (contact)=>{
    setContacts([...contacts,contact ]);
  }

   useEffect(() => {
     const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STG_KEY));
    if (retriveContacts) setContacts(retriveContacts);
   }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STG_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">

      <Header/>
      
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts}/>
      
    </div>
  );
}

export default App;
