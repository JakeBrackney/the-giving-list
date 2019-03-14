import React, { Component } from 'react';
import Header from '../src/Components/Header/Header'
import './App.css';
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      charity: []
    }
  }

  componentDidMount() {
    console.log("component did mount")
    axios.get('http://localhost:3001/giving')
      .then((res) => {
        console.log(res.data)
        this.setState({
          pins: res.data
        })
        console.log(this.state.pins)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
      </div>
    );
  }
}

export default App;
