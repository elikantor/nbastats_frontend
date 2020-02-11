import React from 'react'
import PlayersContainer from './PlayersContainer'

export default class SearchContainer extends React.Component {

    state = {
        player: "",
        players: []
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = event => {
        console.log("hi")
        fetch("http://localhost:3000/players", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                player: this.state.player
            })
        })
        .then(res => res.json())
        .then(data=> {
            this.setState({
                players: data
            })
        })
    }

    render() {
        return (
            <div>
                <input placeholder="Enter NBA Player Name..." name="player" value={this.state.player} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Submit</button>
                {this.state.players.length === 0 ? null : <PlayersContainer players={this.state.players}/>}
            </div>
        )
    }
}