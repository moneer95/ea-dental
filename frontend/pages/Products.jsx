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
                        id = {product.id}
                        name = {product.name}
                        image = {product.image_path}
                        price = {product.choices[0][0].price}
                        descrip = {product.description}
                        category = {product.catego} //to pass to cart through card
                        choices = {product.choices}
                        // choiceId = {product.choiceId}
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
    "Restorative",
    "Burs",
    "Surgical",
    "Accessories",
    "Simulation",
    "Equipment",
    "Handpieces",
    "Impression Materials",
    "Kits",
    "Infection Control"
]