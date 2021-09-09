import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');
    const handleAddCategory = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [...cats, inputValue])
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={inputValue}
                onChange={handleAddCategory} />
        </form>
    )
}
AddCategory.protTypes = {
    setCategories: PropTypes.func.isRequired
}