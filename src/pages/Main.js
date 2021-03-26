import React from 'react'
import Loading from '../components/Loading'
// import NotFound from '../components/NotFound'
import Navbar from '../components/Navbar'
import Overlay from '../components/Overlay'
import {useGlobalContext} from '../context'

function Main() {
    const {loading} = useGlobalContext()

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Navbar />
            <Overlay />
        </>
    )
}

export default Main
