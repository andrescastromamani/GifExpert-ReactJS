import React, { useState } from 'react'

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('Hola Mundo');
    const handleAddCategory = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
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
