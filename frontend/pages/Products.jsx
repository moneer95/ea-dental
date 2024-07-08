import React from 'react'
import { Link, useLoaderData} from "react-router-dom"
import  Card  from "../components/Card"
import { getProducts } from "../api"
import hero from "../assets/images/ore-section.jpg"

export function loader(){
    return getProducts()
}

export default function Products(){
    const productsData = useLoaderData()
    
    function categozedProducts(catego){
        return productsData.filter( product => product.category == catego )
    }

    const categoDivs = categos.map(catego => (
        <div className='products-list-container'>
            <h2 className='catego-title main-question' > { catego } </h2>
            <div className='products-list'>
                { categozedProducts(catego).map(product => (
                    <Card 
                        name = {product.name}
                        image = {product.image_path}
                        price = {product.price}
                    />
                )) }
            </div>
            <hr />
        </div>
    ))
    return(
        <>
            <div className='products-hero-div fs-4'>
                <img src={hero} alt="" width='100%' className='products-hero' />
                <h2>Shop Premium EA-Dental Products – <span>Trusted by Professionals Across the UK</span> </h2>
            </div>
            {categoDivs}
        </>
        
    )
}


const categos = [
    "Instruments",
    "Endodontics",
    "Burs",
    "Surgical",
    "Accessories",
    "Simulation",
    "Equipment",
    "Handpieces",
    "Impression Materials",
    "Kits"
]