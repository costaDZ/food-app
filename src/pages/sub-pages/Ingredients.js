import React from 'react'
import Navbar from '../../components/Navbar'
import { useGlobalContext } from '../../context';


const Ingredients = () => {

    const { ingre } = useGlobalContext();

    console.log(ingre);


    return (
        <>
        <Navbar />
            <section className="ingredients-container">
                <div className="title-section">
                    <ul className="general-info">
                        <h3>{ingre.label}</h3>
                        <li><span id="calories">Calories</span> {ingre.calories.toFixed(2)}</li>
                        <li><span id="contry">Origin Contry</span> {`${ingre.cuisineType || "/"}`}</li>
                        <li><span id="quality">Nutrition Quality</span> {` ${ingre.dietLabels.length > 0 ? ingre.dietLabels : "/"}`}</li>
                    </ul>
                    <img src={ingre.image} alt={ingre.label} />
                </div>
               

                
                <table>
                    <thead>
                        <tr>
                            <th>Ingredien</th>
                            <th>Weight</th>
                            <th>Food category</th>
                        </tr>
                    </thead>
                    <tbody className="ingrediens-table">
                        {
                            ingre.ingredients.map((ingre, index) => {
                                const { text, weight, foodCategory } = ingre;
                                return (
                                    <tr key={index}>
                                        <td>{text}</td>
                                        <td>{weight}</td>
                                        <td>{foodCategory}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}



export default Ingredients
