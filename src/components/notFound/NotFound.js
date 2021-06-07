import React from 'react';
import './notFound.css';
import { useGlobalContext } from '../../context';
import { Link } from 'react-router-dom';


export function NotFound() {

    const { toggleSearch } = useGlobalContext();

    return (
        <section className="not-found">
            <div className="not-found-content">
                <h1>Not Result Matchs !!! </h1>
                <Link to="/">
                    <button
                        className="try-again"
                        onClick={toggleSearch
                        }>Try Again</button>
                </Link>
            </div>
        </section>
    )
}

