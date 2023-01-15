import {useEffect, useState } from "react"
import axios from "axios"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getData = async () => {
        await axios.get(url)
            .then(response =>{
                if(!response){
                    throw new Error("Error getting data from api")
                }
                else{
                setData(response.data)
                setLoading(false)
                }
            }, error =>{
                setError(response.message)
            })
    } 
    /* (async () => {
        try {
            const response = await axios(url)
            if (!response.ok) {
                throw new Error("Error fetching data")
            }
            setData(response)
        } catch (error) {
            setError(response.message)
        } finally {
            setLoading(false)
        }
    }, [url]) */

    useEffect(() => {
        getData()
    }, [getData])

    return { data, loading, error }
}
