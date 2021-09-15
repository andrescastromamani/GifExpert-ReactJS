import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['react js'])
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setcategories} />
            <hr></hr>

            <ol>
                {
                    categories.map(category =>
                    (<GifGrid
                        key={category}
                        category={category} />
                    ))
                }
            </ol>
        </>
    )
}
