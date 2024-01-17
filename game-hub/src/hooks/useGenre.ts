import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

interface Genre{
    id: number,
    name: string
}

interface FetchGenreResponse{
    count: number,
    results: Genre[]
}
const useGenre = ()=>{
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        apiClient.get<FetchGenreResponse>('/genres', { signal: controller.signal })
            .then(r => {setGenres(r.data.results); setIsLoading(false)})
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message)
            }
            )

        return () => controller.abort()
    }, [])

    return { genres, error, isLoading }
}

export default useGenre
