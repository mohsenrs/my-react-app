import React, { useEffect, useState } from 'react'
import ContactContext from './../context/ContactContext'
import './App.css'
import { Header, ContactCard, ContactList, AddContact } from './index'

function App() {
  const LOCAL_STORAGE_KEY = 'contacts'
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, contact])
  }

  useEffect(() => {
    const retrieveContactsData = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    )
    if (retrieveContactsData) setContacts(retrieveContactsData)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })

    setContacts(newContactList)
  }

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactContext.Provider value={contacts}>
        <ContactCard clickHandler={removeContactHandler} />
      </ContactContext.Provider>
    </div>
  )
}

export default App
