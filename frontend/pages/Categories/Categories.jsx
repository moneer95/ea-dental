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
            <div key={catego.collection} className="catego-container">
                <Link
                    to={`${catego.collection}`}
                >
                    <figure className="catego-figure">
                        <img src={catego.svg} alt="illustrating image"/>
                        <figcaption className="catego-caption fs-6">{catego.caption}</figcaption>
                    </figure>

                </Link>
            </div>
        ))
        return (
            <div className="categos-list">
                {categoElements}
            </div>
        )
    }

    return (
        <div className="categos-list-container">
            <h1 className="text-gradient">Explore our Courses, Products And Services</h1>


            <React.Suspense fallback={<h2>Loading vans...</h2>}>
                <Await resolve={dataPromise.categos}>
                    {renderCategories}
                </Await>
            </React.Suspense>
        </div>
    )
}