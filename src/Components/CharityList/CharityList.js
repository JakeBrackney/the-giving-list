import React, { Component } from 'react';
import './CharityList.css'

class CharityList extends Component {

  render() {

        let list = [...this.props.charities]
            .sort((a, b) => (a.org > b.org)-1)
            .map((index, i) => 
                <div key={i} className='list'>
                    <ul>
                        <li><a href={"giving/" + index._id}>{index.org}</a></li>
                    </ul>
                </div>
    )
    return (
        <div className='charityList-container'>
            <h1>Organizations</h1>
            {list}
        </div>
    )}
}


export default CharityList;