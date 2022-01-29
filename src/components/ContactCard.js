import React, { useContext } from 'react'
import ContactContext from './../context/ContactContext'
import user from '../images/user.png'

function ContactCard() {
  const contacts = useContext(ContactContext)

  return (
    <div className='ui celled list'>
      {contacts?.map((contact) => {
        return (
          <div className='item' key={contact.id}>
            <img className='ui avatar image' src={user} alt='user' />
            <div className='content'>
              <div className='header'>{contact.name}</div>
              <div>{contact.email}</div>
            </div>
            <i
              className='trash alternate outline icon'
              style={{ color: 'red' }}
            ></i>
          </div>
        )
      })}
    </div>
  )
}

export default ContactCard
