import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import ContactContext from './../context/ContactContext'
import api from '../api/contacts'
import './App.css'
import {
  Header,
  ContactCard,
  ContactList,
  AddContact,
  ContactDetail,
} from './index'

function App() {
  const LOCAL_STORAGE_KEY = 'contacts'
  const [contacts, setContacts] = useState([])

  // Create data
  const addContactHandler = async (contact) => {
    const response = await api.post('contacts', contact)
    console.log(response.data)
    setContacts([...contacts, response.data])
  }

  //retrieve contacts
  const retrieveContact = async () => {
    try {
      const response = await api.get('/contacts')
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  // Read data
  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContact()
      if (allContacts) setContacts(allContacts)
    }

    getAllContacts()
  }, [])

  // delete contact
  const removeContactHandler = async (id) => {
    await api.delete(`contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })

    setContacts(newContactList)
  }

  return (
    <div className='ui container'>
      <Header />
      <Switch>
        <Route path='/' exact>
          <ContactContext.Provider value={contacts}>
            <ContactList clickHandler={removeContactHandler} />
          </ContactContext.Provider>
        </Route>
        <Route path='/add'>
          <AddContact addContactHandler={addContactHandler} />
        </Route>
        <Route path='/contact/:contactId'>
          <ContactDetail />
        </Route>
      </Switch>
    </div>
  )
}

export default App
