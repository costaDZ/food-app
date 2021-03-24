import React from 'react'
import Categories from '../components/Categories';
import Content from '../components/Content'
import NotFound from '../components/NotFound';
import Search from '../components/Search'
import {useGlobalContext} from '../context'


function Main() {
    const {loading, food} = useGlobalContext()

    if (loading) {
        return <h1>Loading App ...</h1>
    }
    if (!loading && food.length === 0) {
        return (
            <>
                <Search />
                <Categories />
                <NotFound />
            </>
        )
    }

    return (
        <>
            <Search />
            <Categories />
            <section className="content-section">
                {
                    food.map((item, index) => <Content key={index} item={item.recipe} />)
                }
            </section>
        </>
    )
}

export default Main
