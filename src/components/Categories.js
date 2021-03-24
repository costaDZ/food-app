import React from 'react'
import data from '../Data';
import { useGlobalContext } from '../context';

function Categories() {

    const { setCategory } = useGlobalContext();
    return (
        <section className="categories">
            <h2>Categories</h2>
            <div className="btns-categories">
                {
                    data.map(item => <button
                        className="category-btn"
                        key={item.id}
                        onClick={() => setCategory(item.category)}
                    >
                        {item.category}
                    </button>
                    )
                }
            </div>
        </section>
    )
}

export default Categories
