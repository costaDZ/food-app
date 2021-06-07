import React from 'react'
import './navbar.css';
import { useGlobalContext } from '../../context';

import { Link } from 'react-router-dom';

import Slider from './slider/Slider';
import SearchField from './searchField/SearchField';

import { GoThreeBars, GoHeart, GoHome } from "react-icons/go";
import { FaFacebook, FaGithub, FaGooglePlus, FaSistrix } from "react-icons/fa";


export function Navbar() {

    const { toggleSlider, toggleSearch, closeSidebar } = useGlobalContext();

    // const [search, setSearch] = useState("");

    return (
        <>
            <nav className="navbar" onClick={closeSidebar}>
                <section className="slider-section">
                    <button className="slider-btn" onClick={toggleSlider}><GoThreeBars viewBox="0 0 16 13" /></button>
                    <ul className="log-list">
                        <li><GoHeart viewBox="0 0 16 10" /></li>
                        <li><a href="/">Sign-up</a></li>
                        <li><a href="/">Login</a></li>
                        <li><GoHome viewBox="0 0 16 14" /></li>
                    </ul>
                </section>

                <Link to="/" className="logo">
                    <img
                        src={require("../../food-img/logo.png")}
                        alt="logo"
                        className="logo-img" />
                </Link>

                <section className="follow-section">
                    <ul className="follow-icones">
                        <h4>Follow : </h4>
                        <li><a href="/"><FaFacebook viewBox="0 0 496 480" /></a></li>
                        <li><a href="/"><FaGithub viewBox="0 0 496 480" /></a></li>
                        <li><a href="/"><FaGooglePlus viewBox="0 0 496 480" /></a></li>
                    </ul>
                    <button className="search-btn" onClick={toggleSearch}>
                        <FaSistrix /> <span className="hide-search">Search</span>
                    </button>
                </section>
                {/* <form className="search-form" onSubmit={(e) => handelSubmit(e, search)}>
                <label htmlFor="item">Search Your Favorit Food :</label>
                <input
                    id="item"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input-field" />
                <button type="submit" className="sub-btn">Search</button>
            </form> */}
            </nav>
            <Slider />
            <SearchField />
        </>
    )


}
