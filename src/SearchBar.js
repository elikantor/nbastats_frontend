import React from 'react'

export default class SearchBar extends React.Component {

    state = {

    }

    render() {
        return (
            <button onClick={this.props.searchClick}>Search</button>
        )
    }
}