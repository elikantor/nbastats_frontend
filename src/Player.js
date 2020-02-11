import React from 'react'

export default class Player extends React.Component {

    state = {
        stats: []
    }

    showPlayer = id => {
        fetch("http://localhost:3000/player", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                player: id
            })
        })
        .then(res => res.json())
        .then(data=> {
            // console.log(data)
            this.setState({
                stats: data.data
            }, ()=> console.log(this.state.stats))
        })
    }

    render() {
        let {id, position, first_name, last_name, team: {full_name}} = this.props.player
        return (
            <div onClick={()=>this.showPlayer(id)}>
                <p>{first_name}</p>
                <p>{last_name}</p>
                <p>{position}</p>
                <p>{full_name}</p>
                {this.state.stats.length === 0 ? null : <div>{this.state.stats[0].games_played}</div>}
            </div>
        )
    }
}