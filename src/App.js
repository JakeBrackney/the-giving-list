import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../src/Components/Header/Header'
import NewCharity from './Components/NewCharity/NewCharity'
import CharityList from './Components/CharityList/CharityList'
import ShowCharity from './Components/ShowCharity/ShowCharity'
import './App.css';
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      charities: []
    }
  }

  componentDidMount() {
    console.log("component did mount")
    axios.get('http://localhost:3001/')
      .then((res) => {
        console.log(res.data)
        this.setState({
          charities: res.data
        })
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
        <main>
        <div className ='charitytList'>
            <Switch>
              <Route path='/giving/neworg/' component={NewCharity}/>
              <Route path='/giving/:id' render={(routerProps)=>< ShowCharity {...routerProps} {...this.state} />} />
              <Route path='/giving' render={(routerProps)=>< CharityList  {...routerProps} {...this.state} charities={this.state.charities} />}/>
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
