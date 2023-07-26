import { useState, useEffect } from "react"
import { Invoice } from "../interface/interface"


export const useInitialData = () => {

    const [ data, setData ] = useState<Invoice[]>([])
    const [ isListShown, setIsListShown ] = useState<boolean>(false)

    useEffect(()=> {
        const getData = async () =>  {
            try {
                const res = await fetch('data/data.json');
                const json = await res.json()
                setData(json)
                setIsListShown(true)
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsListShown(false)
            }
        };
            setTimeout(()=> getData(), 1000)  
    }, [])

    return {
        data,
        isListShown,
        setData
    }
} 