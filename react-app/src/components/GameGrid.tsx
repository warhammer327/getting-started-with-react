import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

interface GameObject {
    id: number,
    name: string
}

interface GameResponse {
    count: number,
    result: GameObject[]
}

const GameGrid = () => {
    const [games, setGames] = useState<GameObject[]>([])
    const [error, setError] = useState("")
    useEffect(() => {
        apiClient.get<GameResponse>('/games')
            .then(res => setGames(res.data.result))
            .catch(error => setError(error.message))
    },[])
    return (
        <ul>
            {games.map(game => <li key={game.id}>{game.name}</li>)}
        </ul>
    )
}

export default GameGrid
