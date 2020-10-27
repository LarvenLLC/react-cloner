import React from 'react'

import Cloner from 'react-cloner'

const App = () => {
  function handleSubmit(event) {
    event.preventDefault()
    let form = {},
      formData = new FormData(event.target)
    for (let pair of formData.entries()) {
      let key = pair[0],
        value = pair[1]
      form[key] = value
    }
    alert(JSON.stringify(form, 0, 2))
  }
  return (
    <div className='col py-3'>
      <form onSubmit={handleSubmit}>
        <Cloner
          title='Contact Person'
          addButtonClassName='btn btn-outline-primary'
          deleteButtonClassName='btn btn-outline-danger'
          deleteButtonWrapperClassName='form-group'
          component={<ContactPerson />}
          componentWrapperClassName='d-flex w-100 align-items-end justify-content-between mb-3'
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

function ContactPerson({ increment }) {
  return (
    <div className='row w-100 mx-auto'>
      <div className='pl-0 col col-12 col-md-4 form-group'>
        <label>Name</label>
        <input name={`contact-person-name-${increment}`} class='form-control' />
      </div>
      <div className='px-0 col col-12 col-md-5 form-group'>
        <label>Email</label>
        <input
          name={`contact-person-email-${increment}`}
          class='form-control'
        />
      </div>
      <div
        className={`${
          increment === 1 ? 'pr-0' : ''
        } col col-12 col-md-3 form-group`}
      >
        <label>Phone</label>
        <input
          name={`contact-person-phone-${increment}`}
          class='form-control'
        />
      </div>
    </div>
  )
}

export default App
