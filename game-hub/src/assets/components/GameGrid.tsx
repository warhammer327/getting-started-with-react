import React, { useEffect, useState } from 'react'
import apiClient from '../../services/api-client'
import useGames from '../../hooks/useGame'
import { SimpleGrid } from '@chakra-ui/react'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'

const GameGrid = () => {

    const { games, error, isLoading } = useGames()
    const skeletons = [1,2,3,4,5,6,7,8,1,2,3,4,5,6]
    return (
        <>
            {error && <p>{error}</p>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding="10px" spacing={10}>
                {isLoading &&
                    skeletons.map(r => <GameCardSkeleton key={r}/>)}
                {games.map(game => <GameCard key={game.id} game={game} />)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid
