import { useState } from "react"


export const useFetchGifs = () => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    setTimeout(() => {
        setState({
            data: [
                {
                    id: "ABC",
                    title: "ABC"
                },
                {
                    id: "DEF",
                    title: "DEF"
                }
            ],
            loading: false
        })
    }, 3000)
    return state;
}
