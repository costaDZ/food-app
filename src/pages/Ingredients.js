import React from 'react'
import { useGlobalContext } from '../context';


const Ingredients = () => {

    const { ingre } = useGlobalContext();

    console.log(ingre);

    if (ingre.label) {
        return (
            <div className="ingredients-container">

                <>
                    <h3>{ingre.label}</h3>
                    <img src={ingre.image} alt={ingre.label} />
                    <ul className="general-info">
                        <li>Calories : {ingre.calories}</li>
                        <li>Origin Contry: {`${ingre.cuisineType || "Unknown"}`}</li>
                        <li>Nutrition Quality: {` ${ingre.dietLabels.length > 0 ? ingre.dietLabels : "/"}`}</li>
                    </ul>
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


                    {/* <tbody className="daily-table">
                        <tr>
                            <th>Vitamin</th>
                            <th>Quantity</th>
                        </tr>
                        {
                            Object.values(ingre.totalDaily).map((item, index) => {
                                const { label, quantity, unit } = item;
                                return (
                                    <tr key={index}>
                                        <td>{label}</td>
                                        <td>{quantity.toFixed(2)}{unit}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody> */}
                </>
            </div>
        )
    } else {
        return <h1>nonononoon</h1>
    }

}

export default Ingredients
