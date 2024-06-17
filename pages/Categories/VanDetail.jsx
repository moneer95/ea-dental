import React from "react"
import { Link, useParams, useLocation, useLoaderData } from "react-router-dom"
import { getVan } from "../../api"


export function loader({ request }) {
    const pathSegments = request.url.split('/')
    const collectionName = pathSegments[pathSegments.length - 1]
    return getVan(collectionName)
}

export default function VanDetail() {
    const colloecData = useLoaderData()

    const itemsList = colloecData.map(item => (
        <div key={item.id}>
            <div>
                <h2>{item.name}</h2>
            </div>

            {subItem(item)}
        </div>
    ))

    return (
        <div className="catego-detail-container">
            <Link
                to={`..`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to all categories</span></Link>

            {itemsList}

        </div>
    )

    function subItem(item){
        const intro = item.intro.map(line => (
                <h3 className={line.className}>{line.introText}</h3>
            ))
        
        const main = item.shoppingOptions && 
        <div>
            {item.shoppingOptions.map(option => (
                <div>
                    <h2 key={option.name}>
                        {option.name}
                    </h2>
                    <h3>
                        {option.descrip} <span className="main-question">ADD TO CART</span>
                    </h3>
                </div>
            ))}
        </div>

        return (
            <>
                {intro}
                {main}
            </>
        )
    }
}