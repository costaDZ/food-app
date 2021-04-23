import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import '../styles/categories.css';

// import Slider from '../components/Slider'
// import SearchField from '../components/SearchField'
import { Link, useHistory } from 'react-router-dom'

import { useGlobalContext } from '../context';
import NotFound from '../components/NotFound'
import Loading from '../components/Loading'





function Content() {

    const { page, food, loading, getIngredients, closeSidebar } = useGlobalContext();

    const history = useHistory();


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
                    page.length > 0 ? <h2>Matching Result for : "{`${page}`}"</h2> : <h2>Discover Best Recipies In The World</h2>
                }
                <div className="content-items">
                    {
                        food.map((item, index) => {
                            const { label, image, calories, cuisineType, dietLabels, ingredients, totalDaily, totalNutrients } = item.recipe;
                            console.log(dietLabels);
                            return (
                                <section className="food-item" key={index}>
                                    <div className="image">
                                        <img src={image} alt={label} />
                                    </div>

                                    <div className="description">
                                        <h3 className="food-title">{label}</h3>
                                        <ul className="des-info">
                                            {cuisineType ? <li><span>Original Contry</span>{` : ${cuisineType[0].toUpperCase()}`}</li> : null}
                                            {calories ? <li><span>Calories</span> {` :${calories.toFixed(2)} kcal`}</li> : null}
                                            {dietLabels.length > 0 ? <li><span>Nutrition Quality</span>{` :${dietLabels}`}</li> : null}
                                        </ul>


                                        <div className="item-btns">
                                            <Link to="/ingredient">
                                                <button
                                                    className="ingredient-btn"
                                                    onClick={() => getIngredients({ image, label, calories, cuisineType, dietLabels, ingredients })}
                                                >
                                                    Show Ingredients
                                        </button>
                                            </Link>
                                            <Link to="/nutrition">
                                                <button
                                                    className="nutrition-btn"
                                                    onClick={() => getIngredients({ image, label, totalDaily, totalNutrients, calories, cuisineType, dietLabels })}
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
