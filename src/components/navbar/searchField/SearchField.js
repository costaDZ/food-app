import React, { useState } from 'react'
import './searchField.css'
import { useGlobalContext } from '../../../context'
import { FaTimes, FaSistrix } from "react-icons/fa";
import { useHistory } from 'react-router-dom';



function SearchField() {

    let history = useHistory();
    const [inputValue, setInputValue] = useState("")
    const { toggleSearch, showSearch, getCategory } = useGlobalContext();



    function handelSubmit(e) {
        e.preventDefault();
        getCategory(inputValue, "toggle");
        console.log(inputValue);
        history.push('/category');
    }


    return (

        <section className="search-field " style={{ display: `${showSearch ? "block" : "none"}` }}>
            <button className="cls-search-field" onClick={toggleSearch}><FaTimes /></button>
            <form className="search-form" onSubmit={(e) => handelSubmit(e)}>
                <input
                    type="text"
                    onChange={e => setInputValue(e.target.value)}
                    value={inputValue}
                    placeholder="Search"
                ></input>
                <button
                    className="search-field-btn"
                    type="submit">
                    <FaSistrix />
                </button>
            </form >
        </section >
    )
}

export default SearchField
