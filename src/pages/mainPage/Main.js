import React from 'react'


import { Loading, Navbar, Overlay } from '../../components';

import { useGlobalContext } from '../../context'

export function Main() {
    const { loading } = useGlobalContext();


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
