import React from 'react'
import Home from './Home'
import SearchBar from './SearchBar'

class NavBar extends React.Component {

    state = {

    }

    render() {
        return (
            <div>
                <Home />
                {/* // <LogIn /> */}
                <SearchBar searchClick={this.props.searchClick}/>
                {/* <UserFavorites /> */}
            </div>
        )
    }
}

export default NavBar
