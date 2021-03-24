import React, { useState, useEffect, useContext } from 'react'

const AppContent = React.createContext();

let item = localStorage.getItem("category") ? JSON.parse(localStorage.getItem("category")).item : "chicken";
let itemInfo = (localStorage.getItem("itemInfo")) ? JSON.parse(localStorage.getItem("itemInfo")).item : "";

console.log(item);
const AppProvider = ({ children }) => {

    const App_id = "d38dc391";
    const App_key = "26e1a3819a28adc5b85aea74652891d7";

    const [food, setFood] = useState([]);
    const [loading, setLoading] = useState(true);
    const [kind, setKind] = useState(item);
    const [ingre, setIngre] = useState(itemInfo)

    const url =
        `https://api.edamam.com/search?q=${kind}&app_id=${App_id}&app_key=${App_key}`;

    const fetchData = async () => {
        setLoading(true);
        let response = await fetch(url);
        let info = await response.json();
        setFood(info.hits);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [kind])

    function handelSubmit(e, search) {
        e.preventDefault();
        setKind(search);
        addLocalStorage("category", search);
    }

    function setCategory(category) {
        setKind(category);
        addLocalStorage("category", category);
    }

    function getIngredients(target) {
        setIngre(target);
        addLocalStorage("itemInfo", target);
    }

    function resetApp() {
        removeLocalStorage();
        window.location.reload(false);
    }



    function addLocalStorage(id, item) {
        let target = { id, item };
        localStorage.setItem(id, JSON.stringify(target));
    }

    function removeLocalStorage() {
        localStorage.removeItem("category");
    }

    return (
        <AppContent.Provider value={
            {
                loading,
                food,
                handelSubmit,
                setCategory,
                getIngredients,
                ingre,
                resetApp
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

