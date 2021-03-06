import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../src/Components/Header/Header'
import NewCharity from './Components/NewCharity/NewCharity'
import CharityList from './Components/CharityList/CharityList'
import ShowCharity from './Components/ShowCharity/ShowCharity'
import './App.css';
import axios from 'axios'
import { CLIENT_URL } from '../src/constants'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      charities: []
    }
  }

  componentDidMount() {
    console.log("component did mount")
    axios.get(CLIENT_URL)
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
        <div className='about'>
        <h1>Making giving easier.</h1>
          <p>Charitable giving is a cornerstone of any thriving community. There are lots of charitable organizations to choose from, and it can be tough to find a cause or organization that speaks to you. The Giving List hopes to make that process easier. All organizations on this list are highly rated by one or several charity rating organizations. We hope to provide a simple solution to make giving back easier, because it's important to know your money is being spent on the mission.</p>
        </div>
        <div className ='charitytList'>
            <Switch>
              <Route path='/giving/neworg/' component={NewCharity}/>
              <Route path='/giving/:id' render={(routerProps)=>< ShowCharity {...routerProps} {...this.state} />} />
              <Route path='/giving' render={(routerProps)=>< CharityList  {...routerProps} {...this.state} charities={this.state.charities} />}/>
            </Switch>
          </div>
        </main>
        <div className='footer-container'>
          <footer>
            <p><a className='footer-link' href='http://github.com/JakeBrackney'>Developed by Jake Brackney</a></p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
