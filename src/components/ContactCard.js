import React from 'react'
import { Link } from 'react-router-dom'
import user from '../images/user.png'

function ContactCard({ contact, clickHandler }) {
  return (
    <div className='item' key={contact.id}>
      <img className='ui avatar image' src={user} alt='user' />
      <div className='content'>
        <Link to={`/contact/${contact.id}`}>
          <div className='header'>{contact.name}</div>
          <div>{contact.email}</div>
        </Link>
      </div>
      <i
        className='trash alternate outline icon'
        style={{ color: 'red', cursor: 'pointer' }}
        onClick={() => clickHandler(contact.id)}
      ></i>
    </div>
  )
}

export default ContactCard
