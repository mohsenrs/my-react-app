import React, { useContext } from 'react'
import ContactContext from './../context/ContactContext'
import user from '../images/user.png'
import { Link } from 'react-router-dom'

function ContactCard(props) {
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
              onClick={() => props.clickHandler(contact.id)}
            ></i>
          </div>
        )
      })}
    </div>
  )
}

export default ContactCard
