import React, { Component } from 'react'; 
import './NewCharity.css'
import { CLIENT_URL } from '../../constants'
import axios from 'axios'
// import {Redirect} from 'react-router-dom'

class NewCharity extends Component {

  

  constructor(props) {
    super(props)

    this.state = {
      org: "",
      category: "",
      mission: "",
      donateUrl: "",
      logoUrl: ""
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    // this.handleRedirect = this.handleRedirect.bind(this)
  }
  
  componentDidMount() {
    console.log('new component did mount')
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state);
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("form submitted");
    axios.post(`${CLIENT_URL}/giving/:id`, this.state)
    .then(result => {
      console.log(result);
      // this.setState ({
      //   newCharity: result.data
      // })
      this.props.history.push("/giving/:id");
    });
  };
  
  render() {
    const { org, category, mission, donateUrl, logoUrl } = this.state
    return (
      <div className='form-wrapper'>
        <form className='form' onSubmit={this.onSubmit}>
          <input className='input-field' type='text' name='org' value={org} placeholder='Organization Name' onChange={this.onChange} />
          <input className='input-field' type='text' name='category' value={category} placeholder="Category" onChange={this.onChange} />
          <input className='input-field' type='text' name='mission' value={mission} placeholder="Mission Statement" onChange={this.onChange} />
          <input className='input-field' type='text' name='donateUrl' value={donateUrl} placeholder="Donation Link" onChange={this.onChange} />
          <input className='input-field' type='text' name='logoUrl' value={logoUrl} placeholder='Organization Logo URL' onChange={this.onChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewCharity;
