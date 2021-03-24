import React, { useState } from 'react'
import {useGlobalContext} from '../context'

function Search() {
    const {handelSubmit} = useGlobalContext();

    const [search, setSearch] = useState("");

    return (
        <section className="search-section">
            <div className="logo">
                <h1>LOGO</h1>
            </div>
            <form className="search-form" onSubmit={(e) => handelSubmit(e, search)}>
                <label htmlFor="item">Search Your Favorit Food :</label>
                <input
                    id="item"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input-field" />
                <button type="submit" className="sub-btn">Search</button>
            </form>
        </section>
    )


}

export default Search
