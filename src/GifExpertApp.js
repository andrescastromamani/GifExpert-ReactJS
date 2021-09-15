import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import PropTypes from 'prop-types';

export const GifExpertApp = ({ categoriesGifs = [] }) => {
    const [categories, setcategories] = useState(categoriesGifs);
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
GifExpertApp.propTypes = {
    categoriesGifs: PropTypes.array.isRequired
}
