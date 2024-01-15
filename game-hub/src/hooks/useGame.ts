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
}

interface FetchGamesResponse {
    count: number,
    results: GameObject[]
}

const useGames = () => {
    const [games, setGames] = useState<GameObject[]>([])
    const [error, setError] = useState('')
    useEffect(() => {
        const controller = new AbortController()
        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then(r => setGames(r.data.results))
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message)
            }
            )

        return () => controller.abort()
    }, [])

    return { games, error }
}

export default useGames
