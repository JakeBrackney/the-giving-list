import React, { Component } from 'react'; 
import './NewCharity.css'

class NewCharity extends Component {

  constructor(props) {
    super(props)

    this.setState = {
      pin: props.pin
    }
  }
  
  render() {
    return (
      <div className='form-wrapper'>
        <form className='form'>
          <input className='input-field' type='text' placeholder='Organization Name' />
          <input className='input-field' type='text' placeholder="Category" />
          <input className='input-field' type='text' placeholder="Mission Statement" />
          <input className='input-field' type='text' placeholder="Donation Link" />
          <input className='input-field' type='text' placeholder='Organization Logo URL' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewCharity;