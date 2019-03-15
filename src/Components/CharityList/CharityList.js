import React, { Component } from 'react';
import './CharityList.css'

class CharityList extends Component {

  render() {
    if(this.props.charities) {
    let list = this.props.charities.map(index => {
        return (
        <div key={index.org}>
            <ul>
                <li><a href={"/giving/" + index._id}>{index.org}</a></li>
            </ul>
        </div>
        )      
    })
    return (
        <div className='charityList'>
            <h1>Organizations</h1>
            {list}
        </div>
    );}
}
}

export default CharityList;