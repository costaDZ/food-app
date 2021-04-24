import React from 'react'
import '../styles/ingerediens.css'
import Navbar from '../components/Navbar'
import { useGlobalContext } from '../context';


const Ingredients = () => {

    const { ingre } = useGlobalContext();

    console.log(ingre);
    return (
        <>
            <Navbar />
            <section className="ingredients-container">
                <div className="title-section">
                    <h2>{ingre.label}</h2>
                    <ul className="item-info-section">
                        {ingre.cuisineType ? <li><span>Original Contry</span>{` : ${ingre.cuisineType[0].toUpperCase()}`}</li> : null}
                        {ingre.calories ? <li><span>Calories</span> {` :${ingre.calories.toFixed(2)} kcal`}</li> : null}
                        {ingre.dietLabels.length > 0 ? <li><span>Nutrition Quality</span>{` :${ingre.dietLabels}`}</li> : null}
                    </ul>

                </div>

                <figure className="ingr-image">
                    <img src={ingre.image} alt={ingre.label} />
                    <figcaption>{ingre.label}</figcaption>
                </figure>

                <section className="ingredients">
                    <p className="yield"><strong>YIELD :</strong> {`${ingre.ingredients.length}`} servings</p>

                    <h2>INGREDIENTS</h2>


                    <ul className="ingrediens-list">
                        {
                            ingre.ingredients.map((ingre, index) => {
                                const { text, weight, foodCategory } = ingre;
                                return (
                                    <li key={index} >
                                        < ul className="ingrediens-line">
                                            <li>{text}</li>
                                            <li id="weight">{weight.toFixed(2)} g</li>
                                            <li id="cat">{foodCategory}</li>
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
            </section>
        </>
    )
}

export default Ingredients
