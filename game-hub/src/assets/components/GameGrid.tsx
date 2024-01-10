import React, { useEffect, useState } from 'react'
import apiClient from '../../services/api-client'
import useGames from '../../hooks/useGame'

const GameGrid = () => {

    const {games, error} = useGames()

    return (
        <ul>
            {error && <p>{error}</p>}
            {games.map(game => <li key={game.id}>{game.name}</li>)}
        </ul>
    )
}

export default GameGrid
