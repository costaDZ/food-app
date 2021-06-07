import React from 'react'
import './ingerediens.css';
import { useGlobalContext } from '../../context';

import { Navbar } from '../../components';

export function Nutrition() {

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
                    <h2 className="yield" style={{ fontSize: "1.5em" }}>NUTRITION INFO :</h2>
                    <ul className="ingrediens-list">
                        {
                            Object.values(ingre.totalNutrients).map((item, index) => {
                                const { label, quantity, unit } = item;
                                return (
                                    <li key={index}>
                                        <ul className="ingrediens-line">
                                            <li>{label}</li>
                                            <li id="weight">{quantity.toFixed(2)}{unit}</li>
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

