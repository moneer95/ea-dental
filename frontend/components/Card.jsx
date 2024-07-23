import React from 'react'
import { Link } from "react-router-dom"
import { getImageUrl } from '../utils'



const Card = (props) => {

  return (
    <div key={props.name}>
      <Link
          to={`${props.id}`}
          state={{
              props: props
          }}
      >
          <figure className="product-figure">
            <img src={getImageUrl(props.image)} alt="" />
            <figcaption className="product-caption fs-6">
              <div className='product-title-price'>
                <div> { props.name } </div>
                <div>£{props.price} </div> 
              </div>
            </figcaption>
          </figure>
      </Link>
    </div>

  )
}

export default Card



