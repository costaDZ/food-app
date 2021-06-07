import React from 'react';
import './overlay.css';
import { useGlobalContext } from '../../context';
import { FaSistrix } from "react-icons/fa";

export function Overlay() {

    const { toggleSearch, closeSidebar } = useGlobalContext();

    return (
        <section className="overlay" onClick={(e) => closeSidebar(e)}>
            <div className="overlay-content">
                <h1>Find A Recipe</h1>
                <div className="overlay-form" onClick={toggleSearch}>
                    <h3>Search <FaSistrix /></h3>
                </div>
            </div>
        </section>
    )
}

