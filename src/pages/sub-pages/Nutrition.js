import React from 'react'
import { useGlobalContext } from '../../context';
import Navbar from '../../components/Navbar'

function Nutrition() {

    const { ingre } = useGlobalContext();

    return (
        <>
            <Navbar />
            <section className="nutrition-container">
                <div className="title-section">
                    <h3>{ingre.label}</h3>
                    <img src={ingre.image} alt={ingre.label} />
                </div>
                <section className="nut-tables">
                    <table className="nut-table-one">
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
                    <table className="nut-table-two">
                        <thead>
                            <tr>
                                <th>Vitamin</th>
                                <th>persontage</th>
                            </tr>
                        </thead>
                        <tbody className="nutrition-table">
                            {
                                Object.values(ingre.totalNutrients).map((item, index) => {
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
                </section>
            </section>
        </>
    )

}

export default Nutrition
