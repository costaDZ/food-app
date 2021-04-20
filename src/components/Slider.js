import React from 'react'
import '../styles/slider.css';
import categories from '../Data';
import { FaFacebook, FaGithub, FaGooglePlus, FaTimes } from "react-icons/fa";
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';


function Slider() {

    const { toggleSlider, showSlider, getCategory } = useGlobalContext();

    return (
        <section className={showSlider ? "slider toogle-slider" : "slider"}>
            <button className="close-slider" onClick={toggleSlider}><FaTimes /></button>
            <div className="slider-logo">
                <img src={require("../food-img/logo white final.png")} alt="logo" />
            </div>
            <h2>Main Categories :</h2>

            <div className="slider-categories">
                {
                    categories.map(item => {
                        const { id, category } = item;
                        return (
                            <Link to="/category" key={id} onClick={() => getCategory(category)}>
                                {category}
                            </Link>
                        )
                    })
                }
            </div>

            <div className="social-icons">
                <h3>Follow Us :</h3>
                <ul className="slider-icons">
                    <li><a href="/"><FaFacebook /></a></li>
                    <li><a href="/"><FaGithub /></a></li>
                    <li><a href="/"><FaGooglePlus /></a></li>
                </ul>
            </div>
        </section>
    )
}

export default Slider
