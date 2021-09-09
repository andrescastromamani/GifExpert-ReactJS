import React, { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([])
    useEffect(() => {
        getGifs();
    }, [])
    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=vikings&limit=10&api_key=Fya3XFMwSHzOLQFnR75l045KXDO4aYPt';
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
        console.log(gifs);
        setImages(gifs);
    }
    return (
        <div>
            <h3>{category}</h3>
            {
                images.map(img => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                ))
            }
        </div>
    )
}