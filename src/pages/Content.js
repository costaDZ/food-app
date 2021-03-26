import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import SearchField from '../components/SearchField'
import { Link } from 'react-router-dom'

import { useGlobalContext } from '../context';
import NotFound from '../components/NotFound'
import Loading from '../components/Loading'



function Content() {

    const { page, food, loading, getIngredients, closeSidebar} = useGlobalContext();

    if (loading) {
        return <Loading />
    }

    if (food.length === 0) {
        return (
            <>
                <Navbar />
                <NotFound />
            </>
        )

    }


    return (
        <>
            <Navbar />
            <section className="content-page" onClick={closeSidebar}>
                {
                    page.length > 0 ? <h2>Search Result : "{`${page}`}"</h2> : <h2>Descover Best Recipies In The World</h2>
                }
                

                <div className="content-items">
                    {
                        food.map((item, index) => {
                            const { label, image, calories, cuisineType, dietLabels, ingredients, totalDaily, totalNutrients } = item.recipe;
                            return (
                                <section className="food-item" key={index}>
                                    <img src={image} alt={label} />
                                    <div className="description">
                                        <h2 className="food-title">{label}</h2>
                                        {/* <ul className="food-info">
                                            <li>Calories: {`${Math.round(calories)}`}</li>
                                            <li>Origin Contry: {`${cuisineType || "Unknown"}`}</li>
                                            <li>Nutrition Quality:
                                        {` ${dietLabels.length > 0 ? dietLabels : "/"}`}
                                            </li>
                                        </ul> */}
                                        <div className="item-btns">
                                            <Link to="/category/ingredient">
                                                <button
                                                    className="ingredient-btn"
                                                    onClick={() => getIngredients({image, label, calories, cuisineType, dietLabels, ingredients})}
                                                >
                                                    Show Ingredients
                                        </button>
                                            </Link>
                                            <Link to="/category/nutrition">
                                                <button
                                                    className="nutrition-btn"
                                                    onClick={() => getIngredients({image, label, totalDaily , totalNutrients})}
                                                >Nutrition Info</button>
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Content
