// import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import Cardlist from './components/card-list/Cardlist.component';
import SearchBox from './components/searchBox/searchBox.component';


class App extends Component {
  constructor() {
    super(); 
    this.state = {
      monster :[],
      searchField:''
    }
    }
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users') // fetch makes api request to url and returns promise
      .then(response=> response.json())
      .then(users=>this.setState({monster:users}))
    }
    handleChange=(e)=> {
      this.setState({searchField:e.target.value})
    }
    
    
  render() {
    const { monster, searchField } = this.state;
    const filterMonster = monster.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    
    return(
      <div className="App">
      <h1>Monster Rolodex</h1>
        <SearchBox className='search'
          placeholder='search monster'
          handleChange={this.handleChange}
        />
        <Cardlist monster={filterMonster}/>
      </div>
    )
  }
}


export default App;
