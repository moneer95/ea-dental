import React from "react"
import { Link, useParams, useLocation, useLoaderData } from "react-router-dom"
import { getVan } from "../../api"
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';



export function loader({ request }) {
    const pathSegments = request.url.split('/')
    const collectionName = pathSegments[pathSegments.length - 1]
    return getVan(collectionName)
}

export default function VanDetail() {
    const colloecData = useLoaderData()

    const [openItems, setOpenItems] = React.useState({});

    const toggleItem = (index) => {
        setOpenItems((prevOpenItems) => ({
          ...prevOpenItems,
          [index]: !prevOpenItems[index],
        }));
      };

    const [openOption, setOption] = React.useState({});

    const toggleOption = (index) => {
        setOption((prevOpenOption) => ({
          ...prevOpenOption,
          [index]: !prevOpenOption[index],
        }));
      };
    
    const itemsList = colloecData.map((item, idx) => (
        
        <div 
            key={idx} 
            className='item-slice'
            style={openItems[idx] ?
                {height: '90%',
                overflow: 'scroll',
                } 
                : {height: '100px'}}
        >
            <div 
                onClick={() => toggleItem(idx)} 
                style={
                        {
                            cursor: 'pointer',
                            background: 'linear-gradient(to right, #dee2e6 45%, transparent 55%) bottom / 100% 1px no-repeat',
                            marginBottom: '30px'
                        }
                    }
            >
                <h2 style={{height: '80px'}}>{item.name}</h2>                  
            </div>
            { 
                <div >
                    { subItem(item)  }
                </div>
            }
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
                <p className={`${line.className} fs-5 l-s-4`}>
                    {line.introText}
                </p>
            ))
        

        const shoppingOptions = item.shoppingOptions && 
        <div>
            {item.shoppingOptions.map((option, idx) => (
                <div 
                    className={`option-card ${openOption[idx] ? 'expanded-option' : 'collapsed-option'}`}>
                    <div 
                        key={idx} 
                        className='card-title-add'
                        style={ openOption[idx] ?
                            { background: 'linear-gradient(to right, #dee2e6 45%, transparent 55%) bottom / 100% 1px no-repeat'
                            , marginBottom: '1.5rem' } 
                            : null} 
                    >
                        <span 
                            className="arrow-span"
                        > 
                            {openOption[idx] ? 
                                <AiOutlineDown className="arrow fs-5" onClick={() => toggleOption(idx)} style={{paddingTop: '5px', cursor: 'pointer'}} /> 
                                : <AiOutlineUp className="arrow fs-5" onClick={() => toggleOption(idx)} style={{paddingBottom: '5px', cursor: 'pointer'}} />} 
                        </span> 
                        <h2 onClick={() => toggleOption(idx)} style={{cursor: 'pointer',}}>
                            {option.name}
                        </h2>
                        <button onClick={()=> console.log('koooooooom')} className="fs-6">ADD TO CART <i><FaShoppingCart/></i> </button> 
                    </div>
                    {
                    <p className="fs-7 ls-5">
                        {option.descrip}
                    </p>
                    }
                </div>
            ))}
        </div>

        return (
            <>
                {intro}
                {shoppingOptions}
            </>
        )
    }
}