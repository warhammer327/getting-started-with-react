import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

export interface Platform {
    id: number,
    name: string,
    slug: string
}

export interface GameObject {
    id: number,
    name: string,
    background_image: string
    parent_platforms: {platform:Platform}[]
    metacritic: number;
}

interface FetchGamesResponse {
    count: number,
    results: GameObject[]
}

const useGames = () => {
    const [games, setGames] = useState<GameObject[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then(r => {setGames(r.data.results); setIsLoading(false)})
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message)
            }
            )

        return () => controller.abort()
    }, [])

    return { games, error, isLoading }
}

export default useGames
