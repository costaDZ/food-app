import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { FaTimes, FaSistrix } from "react-icons/fa";
import { Link } from 'react-router-dom';



function SearchField() {


    const [inputValue, setInputValue] = useState("")
    const { toggleSearch, showSearch, getCategory} = useGlobalContext();



    function handelSubmit(e, value) {
        e.preventDefault();
        // if (window.location.href.slice(-9) !== "/category") {
        //     window.location.href = "/category"
        // }
        // setShowSearch(!showSearch);
        // getCategory(value);
    }


    return (

        <section className="search-field " style={{ display: `${showSearch ? "block" : "none"}` }}>
            <button className="cls-search-field" onClick={() => toggleSearch}><FaTimes /></button>
            <form className="search-form" onSubmit={(e) => handelSubmit(e, inputValue)}>
                <input
                    type="text"
                    onChange={e => setInputValue(e.target.value)}
                    value={inputValue}
                    placeholder="Search"
                ></input>
                <Link to="/category"
                    onClick={() => getCategory(inputValue, "toggle")}
                    className="search-field-btn"
                    type="submit">

                    <FaSistrix />
                </Link>

            </form >
        </section >
    )
}

export default SearchField
