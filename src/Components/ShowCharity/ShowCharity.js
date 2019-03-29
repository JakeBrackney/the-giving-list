import React, { Component } from 'react';
import axios from 'axios'
import './ShowCharity.css'
import { CLIENT_URL } from '../../constants'

// const charityUrl = 'http://localhost:3001/giving/'

class ShowCharity extends Component {

  constructor(props) {
    super(props)
    this.state = {
      charity: []
  }
}

  componentDidMount() {
    console.log('single component did mount')
    const charityId = this.props.match.params.id
    console.log(`${CLIENT_URL}giving/${charityId}`)
    const url = `${CLIENT_URL}giving/${charityId}`

    axios.get(url)
      .then((res) => {
        console.log(res)
        this.setState({
          charity: res.data
        })
        console.log(this.state.charity)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className='card-container'>
        <div key = {this.state.charity._id} className='charity-card'>
          <img src={this.state.charity.logoUrl} className='logo' alt=""/>
          <h1 className='charity-title'>{this.state.charity.org}</h1>
          <h2>Category</h2><p>{this.state.charity.category}</p>
          <h2>Mission Statement</h2> <p>{this.state.charity.mission}</p>
          <h2><a href={this.state.charity.donateUrl} className='link'>Donate Here </a></h2>
        </div>
      </div>
    );
  }
}

export default ShowCharity;