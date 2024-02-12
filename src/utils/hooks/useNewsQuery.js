import { useEffect, useState } from "react"

const useNewsQuery = (category = "", searchTerm = "") => {
    const [loading, setLoading] = useState({
        state: true,
        message: ""
    })
    const [data, setData] = useState(null)
    const [noData, setNoData] = useState(false)
    const [error, setError] = useState(null)
    if (searchTerm) category = ""
    const fetchData = async (category, searchTerm) => {
        setLoading({
            ...loading,
            state: true,
            message: "fetching news.........."
        })
        try {
            let queryString = import.meta.env.VITE_API_URL
            if (category) {
                queryString += `/top-headlines?category=${category}`
            } else if (searchTerm) {
                queryString += `/search?q=${searchTerm}`
            } else {
                queryString += `/top-headlines`
            }
            const response = await fetch(`${queryString}`)
            if (!response.ok) {
                let errorMessage = `fetching news data failed ${response.status}`
                throw new Error(errorMessage)
            }
            const data = await response.json()
            if (data?.articles?.length === 0 || data?.result?.length === 0) {
                setNoData(true)
            } else {
                setNoData(false)
            }
            setData(data)

        } catch (error) {
            setError(error)
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: ""
            })
        }
    }

    useEffect(() => {
        fetchData(category, searchTerm)
    }, [category, searchTerm])

    return { data, error, loading, noData }
}

export default useNewsQuery