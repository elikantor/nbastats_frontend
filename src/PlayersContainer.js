import React from 'react'
import Player from './Player'

export default class PlayersContainer extends React.Component {

    state = {

    }


    render() {
        let players = this.props.players.data.map(p=> <Player key={p.id} player={p}/>)
        return (
            <div>
                {players}
            </div>
        )
    }
}