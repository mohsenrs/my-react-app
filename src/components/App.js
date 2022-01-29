import React, { useState } from 'react'
import ContactContext from './../context/ContactContext'
import './App.css'
import { Header, ContactCard, ContactList, AddContact } from './index'

function App() {
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, contact])
  }

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactContext.Provider value={contacts}>
        <ContactCard />
      </ContactContext.Provider>
    </div>
  )
}

export default App
