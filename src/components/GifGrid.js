import React, { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from '../helpers/getGifs'
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
    /*const [images, setImages] = useState([])
    useEffect(() => {
        getGifs(category).then(setImages)
    }, [category])*/
    const { loading, data } = useFetchGifs();
    console.log(data);
    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    loading ? 'Loading....' : 'Listo'
                }
                {/*
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))*/
                }
            </div>
        </>
    )
}