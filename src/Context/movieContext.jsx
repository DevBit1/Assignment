import { createContext, useContext, useState, useEffect } from "react";

export const movieContext = createContext()

export default function MovieContextProvider({ children }) {
    const [data, setData] = useState([])
    const [details, setDetails] = useState(null)
    const [showDetails, setShowDetails] = useState(false)
    const [sortFlag, setSortFlag] = useState(false)

    async function fetchData() {
        const res = await fetch(" https://swapi.dev/api/films/?format=json")
        const final = await res.json()
        setData(final.results)
    }

    useEffect(() => {
        fetchData()
    }, [])

    function detailHandler(info) {
        setDetails(info)
        setShowDetails(true)
    }

    function romanize(num) {
        if (isNaN(num))
            return NaN;
        let digits = String(+num).split(""),
            key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
                "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
                "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
            roman = "",
            i = 3;
        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        return Array(+digits.join("") + 1).join("M") + roman;
    }
    
    function showHandler() {
        setShowDetails(false)
    }

    function sortHandler(metric) {
        switch (metric) {
            case "year":
                {
                    setData((prev) => (
                        prev.sort((a, b) => a.release_date.split("-")[0] - b.release_date.split("-")[0])
                    ))
                }
                break;
            case "episode":
                {
                    setData((prev) => (
                        prev.sort((a,b) => (a.episode_id - b.episode_id))
                    ))
                }
        }
        setSortFlag((prev) => !prev)
    }

    const values = {
        data, details, detailHandler, sortHandler, sortFlag, setSortFlag, romanize, showDetails, showHandler
    }

    return (
        <movieContext.Provider value={values}>
            {children}
        </movieContext.Provider>
    )
}