import React from 'react'

function Form() {
  return (
    <div className='container-fluid'>
    <div className='row'>
        <div className='col-lg-6'>
          <label>Name</label>
          <input type = "text"/>
        </div>
        <div className='col-lg-6'>
          <label>Email</label>
          <input type = "email"/>
        </div>
        <div className='col-lg-6'>
          <label>Card no</label>
          <input type = "text"/>
        </div>
        <div className='col-lg-6'>
          <label>Seat</label>
          <input type = "text"/>
        </div>
        <button className='btn btn-primary'>submit</button>
    </div>
    </div>
  )
}

export default Form;