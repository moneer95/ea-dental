import React from "react"
import {
    Link,
    useSearchParams,
    useLoaderData,
    defer,
    Await
} from "react-router-dom"
import { categories } from "../../api"
import categoriesArr from './ctegoriesArr'


export function loader() {
    return defer({ categos: categories() })
}


export default function Categories() {
    const dataPromise = useLoaderData()


    function renderCategories(categos) {

        const categoElements = categoriesArr.map(catego => (
            <div key={catego.id} className="van-tile">
                <Link
                    to={catego.id}
                >
                    <figure className="catego-figure">
                        <img src={catego.svg} alt="illustrating image"/>
                        <figcaption className="catego-caption">{catego.caption}</figcaption>
                    </figure>

                </Link>
            </div>
        ))
        return (
            <div className="van-list">
                {categoElements}
            </div>
        )
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>


            <React.Suspense fallback={<h2>Loading vans...</h2>}>
                <Await resolve={dataPromise.categos}>
                    {renderCategories}
                </Await>
            </React.Suspense>
        </div>
    )
}