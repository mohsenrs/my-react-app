// import React, { Component } from 'react'

// export default class AddContact extends Component {
//   render() {
//     return (
//       <div className='ui main'>
//         <h2>Add Contact</h2>
//         <form className='ui form'>
//           <div className='field'>
//             <label>Name</label>
//             <input type='text' name='name' placeholder='name' />
//           </div>
//           <div className='field'>
//             <label>Email</label>
//             <input type='text' name='email' placeholder='email' />
//           </div>
//           <button className='ui button blue'>Add</button>
//         </form>
//       </div>
//     )
//   }
// }

import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

function AddContact(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const history = useHistory()

  const onNameChangeHandler = (e) => {
    setName(e.target.value)
  }

  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value)
  }

  const addContactHandler = (e) => {
    e.preventDefault()

    if (name.trim() === '' || email.trim() === '') {
      alert('fill the inputs')
      return
    }

    const contact = {
      name,
      email,
      id: Math.random().toFixed(2).toString() * 100,
    }

    props.addContactHandler(contact)

    setName('')
    setEmail('')

    history.push('/')
  }

  return (
    <div className='ui main'>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h2>Add Contact</h2>

        <Link className='ui button blue' to='/'>
          Go To List
        </Link>
      </div>
      <form className='ui form' onSubmit={addContactHandler}>
        <div className='field'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            placeholder='name'
            onChange={onNameChangeHandler}
            value={name}
          />
        </div>
        <div className='field'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            placeholder='email'
            onChange={onEmailChangeHandler}
            value={email}
          />
        </div>
        <button className='ui button blue'>Add</button>
      </form>
    </div>
  )
}

export default AddContact
