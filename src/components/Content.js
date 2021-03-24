import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

function Content({ item }) {

    const { getIngredients } = useGlobalContext();
    return (
        <section className="food-item">
            <h2 className="food-title">{item.label}</h2>
            <img src={item.image} alt={item.label} />
            <ul className="food-info">
                <li>Calories: {`${Math.round(item.calories)}`}</li>
                <li>Origin Contry: {`${item.cuisineType || "Unknown"}`}</li>
                <li>Nutrition Quality:
                    {` ${item.dietLabels.length > 0 ? item.dietLabels : "/"}`}
                </li>
            </ul>
            <div className="item-btns">
                <Link to="/ingredient">
                    <button
                        className="ingredient-btn"
                        onClick={() => getIngredients(item)}
                    >
                        Show Ingredients
                    </button>
                </Link>
                <Link to="nutrition">
                    <button
                        className="nutrition-btn"
                        onClick={() => getIngredients(item)}
                    >Nutrition Info</button>
                </Link>
            </div>
        </section>
    )
}

export default Content
