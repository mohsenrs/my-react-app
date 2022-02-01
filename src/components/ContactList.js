import React, { useContext } from 'react'
import ContactContext from '../context/ContactContext'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'

function ContactList({clickHandler}) {
  const contacts = useContext(ContactContext)

  return (
    <div className='ui celled list'>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '1rem auto',
        }}
      >
        <Link className='ui button blue' to='/add'>
          Add Contact
        </Link>
      </div>
      {contacts?.map((contact) => {
        return <ContactCard contact={contact} clickHandler={clickHandler} />
      })}
    </div>
  )
}

export default ContactList
