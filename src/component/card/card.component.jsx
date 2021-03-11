import React from 'react';
import './card.styles.css';



export const Card= props => (
    <div className="card-container">
        <img className="player-image"
         alt='player'
         src={`players/${props.player.id}`}/>
        <h2 className='playerName'> {props.player.name} </h2>
        <p className='posName'> {props.player.pos} </p>
    </div>
);