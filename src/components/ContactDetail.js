import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import user from '../images/user.jpg'

function ContactDetail() {
  const [contact, setContact] = useState({})
  const LOCAL_STORAGE_KEY = 'contacts'

  const params = useParams()

  useEffect(() => {
    const retreiveContactsData = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    )
    if (retreiveContactsData) {
      const contact = retreiveContactsData.find(
        (data) => data.id == params.contactId
      )
      setContact(contact)
    }
  }, [])

  return (
    <div>
      <div>
        <img src={user} alt='user' />
      </div>
      <div>{contact.name}</div>
      <div>{contact.email}</div>
      <Link to='/'>
        <button className='ui button blue'>Go back to List</button>
      </Link>
    </div>
  )
}

export default ContactDetail
