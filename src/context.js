import React, { useState, useEffect, useContext } from 'react'

const AppContent = React.createContext();

let currentFood = JSON.parse(localStorage.getItem('food')) || [];
let currentIngre = JSON.parse(localStorage.getItem('ingri')) || [];

const AppProvider = ({ children }) => {

    const [category, setCategory] = useState("");

    const [loading, setLoading] = useState(true);
    const [food, setFood] = useState(currentFood);
    const [showSlider, setShowSlider] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [page, setPage] = useState("");
    const [ingre, setIngre] = useState(currentIngre);

    const url =
        `https://api.edamam.com/search?q=${category}&app_id=${process.env.REACT_APP_id}&app_key=${process.env.REACT_APP_API_KEY}`;

    const fetchData = async () => {
        setLoading(true);
        let response = await fetch(url);
        let info = await response.json();
        setFood(info.hits);
        setLoading(false);

    }


    useEffect(() => {
        localStorage.setItem('ingri', JSON.stringify(ingre));
        localStorage.setItem('food', JSON.stringify(food));
    }, [food, ingre]);



    useEffect(() => {
        if (category.length > 0) {
            fetchData();
        }
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [category]);


    function getCategory(value, check) {
        setPage(value);
        setCategory(value);
        setShowSlider(false);
        if (check === "toggle") {
            setShowSearch(!showSearch);
        }
    }

    function toggleSlider() {
        setShowSlider(!showSlider);
    }
    function closeSidebar(e) {
        if (showSlider) {
            setShowSlider(false);
        }
    }

    function toggleSearch() {
        console.log(1);
        setShowSearch(!showSearch);
    }

    function getIngredients(target) {
        setIngre(target);
    }

    return (
        <AppContent.Provider value={
            {
                loading,
                toggleSlider,
                toggleSearch,
                getCategory,
                showSlider,
                showSearch,
                closeSidebar,
                food,
                page,
                ingre,
                setShowSlider,
                getIngredients
            }
        }>
            {children}
        </AppContent.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContent);
}

export { AppProvider, AppContent }






















