import React from "react"
import { Link, useNavigate, useParams, useLocation, useLoaderData, Await, defer } from "react-router-dom"
import { getDetail } from "../../api"
import CartContext from "../../contexts/cartContext";

import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { FaZ } from "react-icons/fa6";

let collectionName = ''
export function loader({ request }) {
    const pathSegments = request.url.split('/')
    collectionName = pathSegments[pathSegments.length - 1]
    return defer( {colloecData: getDetail(collectionName)} )
}

export default function CategoDetail() {
    const dataPromise = useLoaderData()

    function loadData(colloecData){
        const location = useLocation()

        console.log(colloecData)
    
        const type = location.state?.type || "";
    
        const [openItems, setOpenItems] = React.useState( colloecData.length == 1 ? {0:true} : {} );
        const [openOption, setOption] = React.useState( colloecData.length == 1 && colloecData[0].shoppingOptions?.length == 1 ? {0:true} : {} );
    
        const { cartItems, setCartItems } = React.useContext(CartContext)
        const navigate = useNavigate()
    
        const toggleItem = (index) => {
            setOpenItems((prevOpenItems) => ({
              ...prevOpenItems,
              [index]: !prevOpenItems[index],
            }));
          };
    
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
                    {
                     height: 'auto',
                     overflow: 'scroll',
                    } 
                    : {
                        height: '5vh',
                        minHeight: '4.8rem',
                      }
                    }
            >
                <div 
                    onClick={() => toggleItem(idx)} 
                    style={
                            {
                                cursor: 'pointer',
                            }
                        }
                >
                    <h2>{item.name} <span className="slice-hint">click to {openItems[idx] ? 'collapse' : 'expand'}</span> </h2>  
                </div>
     
                {
                    openItems[idx] 
                    ? <div style={{
                        padding: '20px 0',
                        background: 'linear-gradient(to right, #dee2e6 45%, transparent 55%) top / 100% 1px no-repeat',
                        }}
                    >
                        {subItem(item)}</div>
                    : null
                }
            </div>
        ))
    
    
        return (
            <div className="catego-detail-container">
    
                <Link
                    to={`..?type=${type}`}
                    relative="path"
                    className="back-button"
                >&larr; <span>☰Back to all categories</span></Link>
    
                {itemsList}
                <div style={{margin: '3rem'}} dangerouslySetInnerHTML={{ __html: colloecData[0]?.details }} />              
            </div>
        )
    
    
    
        function subItem(item){
            const intro = item.intro.map(line => (
                    <p key={line.introText} className={`${line.className}`}>
                        {line.introText}
                    </p>
                ))
            
            const shoppingOptions = item.shoppingOptions && 
            <div className="options-container">
                {item.shoppingOptions.map((option, idx) => (
                    <div
                        key={option.name} 
                        className={`option-card ${openOption[idx] ? 'expanded-option' : 'collapsed-option'}`}>
                        <div 
                            className='card-title-add'
                            style={ openOption[idx] ?
                                { background: 'linear-gradient(to right, #dee2e6 45%, transparent 55%) bottom / 100% 1px no-repeat'
                                , marginBottom: '1.5rem' } 
                                : null} 
                        >
                            <span className="arrow-span"> 
                                {openOption[idx] ? 
                                    <AiOutlineDown className="arrow fs-5" onClick={() => toggleOption(idx)} style={{paddingTop: '5px', cursor: 'pointer'}} /> 
                                    : <AiOutlineUp className="arrow fs-5" onClick={() => toggleOption(idx)} style={{paddingBottom: '5px', cursor: 'pointer'}} />} 
                            </span> 
                            <h2 onClick={() => toggleOption(idx)} style={{cursor: 'pointer',}} className="fs-7">
                                {option.name}
                            </h2>
                            <button onClick={()=> addToCart(option)} className="add-cart-button fs-6"> <i>Add To Cart + <FaShoppingCart/></i> </button> 

                        </div>
                        {
                         
                         <p className="fs-7 ls-5 mi-3" dangerouslySetInnerHTML={{ __html: option.descrip }}/>
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
    
        function addToCart(option){
            setCartItems( prevItems =>
                cleanAddToCart(prevItems, option)
            )
        }
    
    
        function cleanAddToCart(prevItems, option){
            
            const existingItems = prevItems?.filter(item => item.optionName == option.name)
    
            if(!existingItems.length){
                toast.success(`${option.name} added to cart`)
                return [...prevItems,
                        {    
                            optionName: option.name,
                            category: collectionName,
                            choices: option.choices,
                            choiceId: [
                                Object.keys(option.choices[0])[0],
                                option.choices.length > 1 ? Object.keys(option.choices[1])[0] : null
                        ]
                        }
                    ]
            }
            else{
                toast(() => (
                    <span 
                        style={{
                            textAlign: 'center'
                        }}
                    >
                    This Item is already in cart 🛒
                    <button 
                        onClick={() => navigate('/cart')}
                        style={{
                            backgroundColor: '#FF914D',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            padding: '8px 22px',
                            margin: '5px 0 0 0px',
                            fontFamily: 'Varela Round, sans-serif',
                            width: '100%',
                        }}
                    >
                        Check Out
                    </button>
                    </span>
                ));
                return prevItems
            }
            }
    }

    return <React.Suspense fallback={<div style={{height: '1000px'}}><h2>Loading Contetnt...</h2></div>}>
                <Await resolve={dataPromise.colloecData}>
                    {colloecData => loadData(colloecData)}
                </Await>
            </React.Suspense>



}




    