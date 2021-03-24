import React from 'react'
import {useGlobalContext} from '../context'

const NotFound = () => {

    const {resetApp} = useGlobalContext();

    return (
        <section>
            <h1>Not Found Try Again </h1>
            <button onClick={resetApp}>Return</button>
        </section>
    )
}

export default NotFound
