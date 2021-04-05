import React from 'react'
import '../styles/loading.css'

function Loading() {
    return (
        <section className="loading">
            <img src={require("../food-img/326 (2).gif")} />
        </section>
    )
}

export default Loading
