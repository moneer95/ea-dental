import React from "react"
import {
    Link,
    useSearchParams,
    useLoaderData,
    useNavigate,
    defer,
    Await
} from "react-router-dom"
import { courses, therapists, advanced } from './ctegoriesArr'
import { AiOutlineUnorderedList } from "react-icons/ai"
import hero from "../../assets/images/ore-section.jpg"



export function loader() {
    return defer({ categos: {courses, therapists, advanced} })
}


export default function Categories() {
    const dataPromise = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    const typeFilter = searchParams.get("type")


    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    const categosNav = () => (
        <div className="van-list-container">
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "courses")}
                    className={
                        `van-type 
                        ${typeFilter === "courses" ? "selected" : ""}`
                    }
                >Courses</button>
                <button
                    onClick={() => handleFilterChange("type", "therapists")}
                    className={
                        `van-type 
                        ${typeFilter === "therapists" ? "selected" : ""}`
                    }
                >Therapists</button>
                <button
                    onClick={() => handleFilterChange("type", "advanced")}
                    className={
                        `van-type 
                        ${typeFilter === "advanced" ? "selected" : ""}`
                    }
                >Advanced GDP Courses</button>
                <button
                    onClick={() => navigate('/products')}
                    className={
                        `van-type 
                        ${typeFilter === "products" ? "selected" : ""}`
                    }
                >Products</button>
            </div>
        </div>
    
    )


    function renderCategories(categos) {
        const filteredCategories = categos[typeFilter] || [];

        const categoElements = filteredCategories.map(catego => (
            <div key={catego.collection} className="catego-container">
                <Link
                    to={`${catego.collection}`}
                    state={{
                        type: typeFilter
                    }}
                >
                    <figure className="catego-figure">
                        <img src={ catego.svg } alt="illustrating image"/>
                        <figcaption className="catego-caption fs-6">{ catego.caption }</figcaption>
                    </figure>
                </Link>
            </div>
        ))
        return (
            <>
                <div className="categos-list">
                    {categoElements}
                </div>
            </>
        )
    }

    return (
        <>
            {<img className='sub-hero' src={hero} alt=""/>}
            <div className="categos-list-container">
                {/* <h1 className="text-gradient">Explore our Courses, Products And Services</h1> */}
                {categosNav()}
                <React.Suspense fallback={<h2>Loading categories...</h2>}>
                    <Await resolve={dataPromise.categos}>
                        {categos => typeFilter ? renderCategories(categos) : <h2>Please select a category</h2>}
                    </Await>
                </React.Suspense>
            </div>
        </>
    )
}



