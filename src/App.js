import React, {Component} from 'react';

import {CardList} from './component/card-list/card-list.component';
import {SearchBox} from './component/search-box/search-box.component';
import './App.css';

class App extends Component {


  constructor(){
    super();
    this.state = {
      players: [
        {
          name: 'Paul George',
          id: '1.png',
          pos: 'SG/SF #13'
        },
        {
          name: 'Kawhi Leonard',
          id: "2.png",
          pos: 'SF #2'
        },
        {
          name: 'Serge Ibaka',
          id: "3.png",
          pos: 'PF/C #9'
        },
        {
          name: 'Nicolas Batum',
          id: "4.png",
          pos: 'SF/PF #33'
        },
        {
          name: 'Marcus Morris Sr.',
          id: "5.png",
          pos: 'SF #8'
        },
        {
          name: 'Luke Kennard',
          id: "6.png",
          pos: 'SG #5'
        },
        {
          name: 'Patrick Beverley',
          id: "7.png",
          pos: 'PG #21'
        },
        {
          name: 'Lou Williams',
          id: "8.png",
          pos: 'SG #23'
        },
        {
          name:'Ivica Zuvac',
          id:"9.png",
          pos: 'C #40'
        },
        {
          name: 'Terrance Mann',
          id: "10.png",
          pos: 'SG/SF #14'
        },
        {
          name: 'Reggie Jackson',
          id: "11.png",
          pos: 'PG #1'
        },
        {
          name: 'Patrick Patterson',
          id: "12.png",
          pos: 'PF #54'
        }
      ],

      searchField: ''
    };
  }


  render(){
    const { players, searchField } = this.state;
    const filteredPlayers = players.filter(player =>
      player.name.toLowerCase().includes(searchField.toLowerCase())
      );


    return (
      <div className="App">
        <h1 className="pageTitle" >Clippers Main Roster</h1>
        <SearchBox placeholder='Search Players' handleChange={e => this.setState({searchField: e.target.value})}/>
        <CardList players={filteredPlayers}/>
      </div>
    );
  }
}

export default App;
