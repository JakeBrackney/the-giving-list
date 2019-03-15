import React, { Component } from 'react';
import axios from 'axios'
import './ShowCharity.css'

const charityUrl = 'localhost:3001/giving/'

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
    console.log(charityId)
    const url = `${charityUrl}${charityId}`

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
      <div key = {this.state.charity.id} className='charityCard'>
        <h1 className='charityTitle'>{this.state.charity.org}</h1>
        <p>Category: {this.state.charity.category}</p>
        <p>Mission Statement: {this.state.charity.mission}</p>
        <a href={this.state.charity.donateUrl}>Donate Here: </a>
      </div>
    );
  }
}

export default ShowCharity;