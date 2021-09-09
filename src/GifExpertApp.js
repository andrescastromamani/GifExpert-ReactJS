import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['anime', 'series', 'comics'])
    const handleAdd = () => {
        //setcategories([...categories, 'new category']);
        setcategories(cats => [...cats, 'new category']);
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setcategories} />
            <hr></hr>

            <ol>
                {
                    categories.map(category => {
                        return < li key={category} > {category}</li>
                    })
                }
            </ol>
        </>
    )
}
