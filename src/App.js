import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import TeamContainer from './TeamContainer'
import SearchContainer from './SearchContainer'

class App extends React.Component{

  state = {
    search: false
  }

  searchClick = () => {
    let newState = !this.state.search
    this.setState({
      search: newState
    })
  }


  
  render(){
    return (
      <div>
        <NavBar searchClick={this.searchClick}/>
        {!this.state.search ? <TeamContainer /> : <SearchContainer />}
      </div>
    )
  }

}

export default App;
