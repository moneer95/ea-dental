import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CartContext from "../contexts/cartContext";
import toast, { Toaster } from 'react-hot-toast';
import ImageSlider from '../components/ImageSlider';



const ProductDetail = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const [quan, setQuan] = React.useState(1)
    const [choiceId, setChocieId] = React.useState(0)

    const { cartItems, setCartItems } = React.useContext(CartContext)

    const props = location.state.props


    function handleChange(e){
        setChocieId(e.target.value)
    }
    return (
        <div className='product-detail'>
            <div className='product-detail-img-div'>
       
            <ImageSlider >
            {props.images.map((image, index) => {
                return <img key={index} src={image} alt={index} />;
            })}
            </ImageSlider>
            </div>
            <div className='product-detail-button-choices'>
                <div className='product-detail-button-choices-title-div'>
                    <h2>{props.name}</h2>
                    <div className='fs-5'>£{props.price} <span className='fs-8'>inc VAT</span></div>
                </div>
                <div className='product-detail-quan'>
                    <button onClick={() => setQuan(
                        pQuan => pQuan > 1 
                        ? pQuan -1 
                        : 1
                        )}>-</button>
                    <div>{quan}</div>
                    <button onClick={() => setQuan(pQuan => pQuan + 1)}>+</button>
                </div>

                { Object.keys(props.choices[0]).length > 1 &&
              props.choices.map( (choice, cIndex) => {
              return <select value={choiceId} onChange={(e) => handleChange(e)}  className={`fs-8 cart-choices${cIndex}`}>
                  {Object.entries(choice).map( (option, oIndex)  => {
                return <option
                        key={oIndex}
                        value={oIndex}
                       >
                        {option[1].name}
                       </option>
               }               
               )}
              </select>

              } )

              }

                <button className='add-cart-product-button' onClick={() => addToCart(props)}>add to cart</button>
                <Toaster
                    position="top-right"
                />
            </div>
            <div className='product-detail-description fs-4 ls-5'>
                <div dangerouslySetInnerHTML={{ __html: location.state.props.descrip }}/>
            </div>
        </div>
    )







    function addToCart(option){
        setCartItems( prevItems =>
            cleanAddToCart(prevItems, option)
        )
    }
    
    
    function cleanAddToCart(prevItems, option){
        
        const existingItems = prevItems?.filter(item => {
        console.log(item.choices[0][choiceId.toString()].name)
        return (item.optionName + item.choices[0][choiceId.toString()].name) == (option.name + item.choices[0][choiceId.toString()].name)
        }
    )
    
    
        if(!existingItems.length){
            toast.success(`${option.name} added to cart`)
            return [...prevItems,
                    {    
                        id: props.id,
                        optionName: props.name + props.choices[0][choiceId.toString()].name,
                        category: props.category,
                        choices: props.choices,
                        quantity: quan,
                        choiceId: [
                            choiceId.toString(),
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




export default ProductDetail