import React from 'react'
import { useGlobalContext } from '../context';

function Nutrition() {

    const { ingre } = useGlobalContext();

    console.log(ingre.label);

    if (ingre.label) {
        return (

            <div className="nutrition-container">
                <h2>{ingre.label}</h2>
                <img src={ingre.image} alt={ingre.label} />
                <table>
                    <thead>
                        <tr>
                            <th>Vitamin</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody className="daily-table">
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
                    </tbody>
                </table>
            </div>
        )
    } else {
        return <h1>nnnnnnnnnnnnnnnnnnn</h1>
    }
}

export default Nutrition
