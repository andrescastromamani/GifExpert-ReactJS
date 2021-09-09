import React from "react";

export const GifGrid = ({ category }) => {
    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=goku&limit=10&api_key=Fya3XFMwSHzOLQFnR75l045KXDO4aYPt';
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
    }
    getGifs();
    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}