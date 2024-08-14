import React from 'react'
import { useLoaderData } from 'react-router-dom';
import hero from "../../assets/images/ore-section.jpg"
import DateTimePicker from '../../components/DateTimePicker';
import { areIntervalsOverlapping, format } from 'date-fns';
import CartContext from "../../contexts/cartContext";
import toast, { Toaster } from 'react-hot-toast';
import { getPrevBooking } from '../../api'


export function loader(){
    return getPrevBooking('MEBookings')
}


export const MEVenue = () => {

    const [startDate, setStartDate] = React.useState(new Date());
    const [selectedDate, setSelectedDate] = React.useState(format(startDate, 'yyyy-MM-dd'))
    const [selectedTime, setSelectedTime] = React.useState(format('2024-08-08T00:00:00', 'HH:mm:ss'))
    const [changedCount, setchangedCount] = React.useState(0)
    const [choiceId, setChoiceId] = React.useState('0')

    const { cartItems, setCartItems } = React.useContext(CartContext)

    const prevBookings = useLoaderData()
    console.log(prevBookings)


    const handleDateChange = (date) => {
      setStartDate(date);
      setSelectedDate(format(date, 'yyyy-MM-dd'))
      setSelectedTime(format(date, 'HH:mm:ss'))
      setchangedCount(prevValue => prevValue += 1)

      console.log(startDate.getTime())
      console.log(new Date(startDate))

    //   console.log("Selected Date: ", format(date, 'yyyy-MM-dd'));
    //   console.log("Selected Time: ", format(date, 'HH:mm:ss'));
  
      // Example comparison date with time
      const comparisonDate = new Date('2024-08-08T00:00:00');
  
      // Compare the dates directly including time
      const areDatesEqual = date.getTime() === comparisonDate.getTime();
      console.log("Are the dates and times equal? ", areDatesEqual);
      
    };    

    function handleChoiceChange(e){
        setChoiceId(e.target.value);
    }


    return (
        <div className='venue-div'>
            <img className='sub-hero' src={hero} alt=""/>
            <div className='mi-1 text-center'>
                <p className='fs-5 ls-5'>
                    Rent our manikin facility for ORE2- LDS2 dental manikin practice.<br />
                    Venue Location: Westbury House, 23-25 Bridge St, Pinner, Middlesex, HA5 3HRx<br /> 
                </p>
                <h3 className='fs-4 '>We have the equipment and materials recommended by The Consortium published by the GDC.</h3>
                <h3 className='fs-4 main-question '>
                    Starts from £15.00/hr for EA Manikin students only &
                    £25.00/hr for any candidate
                </h3>
            </div>
            <div class="mi-1 fs-6 ls-4">
            What’s included?
            <ul>
                <li>Access to the facility</li>
                <li>Exam dental Frasaco simulators with torso</li>
                <li>Handpieces, Dental units, Light cure, Amalgamator</li>
                <li>Refreshments</li>
                <li>Administrator support</li>
            </ul>
            Price doesn’t include consumables
            Exam’s dental supplies and equipment can be purchased from our course venue, refer to ORE-LDS dental supplies store for more information regarding pricing. 
            </div>

            <div className='booking-div'>
                <h3 className='fs-4'>Choose Your Booking Date Now!</h3>


                <div className='picker-duration-div fs-5 main-question'>
                    <div className='flex'>
                        <label >Date & Time:</label>
                        <DateTimePicker
                            startDate={startDate}
                            handleChange={handleDateChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="duration">Duration:</label>
                        <select id="duration" className='fs-5' value={choiceId} onChange={(e) => handleChoiceChange(e)} >
                            <option value="0">1 Hour 25£</option>
                            <option value="1">2 Hour 50£</option>
                        </select>
                    </div>

                </div>

                {changedCount>=2 &&
                    <div className='book-button-div'>
                        <button 
                            onClick={addToCart}
                            className='add-cart-button book-button fs-5'
                        >
                            Book At {selectedDate} {selectedTime} 
                        </button>
                    </div>
                }
                <Toaster
                    position="top-right"
                />
            </div>


        </div>
    )

    function addToCart(){
        setCartItems( prevItems =>
            cleanAddToCart(prevItems)
        )
    }

    function cleanAddToCart(prevItems){
        
        const existingItems = prevItems?.filter(item => {
            
            const isExist = (item.optionName + `${item.dateTime}`) == ('Venue Booking' + startDate.getTime())
            return ( isExist )
            }
        )
        
        const isOverLap = checkOverLap()
    
    
        if(!existingItems.length && !isOverLap ){
            toast.success('Venue Booking added to cart')
            return [...prevItems,
                    {    
                        optionName: 'Venue Booking',
                        dateTime: startDate.getTime(),
                        collectionName: 'MEBookings',
                        category: 'Venue Hire',
                        choices: [{'0': {name: '1 Hour 25£', price: 25}, '1': {name: '2 Hours 50£', price: 50}}], // price here just for display in cart
                        choiceId: [
                            choiceId,
                            null
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

        function checkOverLap(){
            
            for(let i=0; i<prevBookings.length; i++){
                console.log(i)
                const duration = parseInt(choiceId, 10) + 1;
                const startSelectedDate = startDate.getTime();
                const endDate = startSelectedDate + ( duration * 60 * 60 * 1000 ) - ( 60 * 60 ) // add the duration in milleseconds the minutes the additional three seconds;

                
                console.log(new Date(prevBookings[i].startDate) + '====' +  new Date(prevBookings[i].endDate)) 
                console.log('-----------------')
                console.log(new Date(startDate) + '====' + new Date(endDate))

                const isOverLap = areIntervalsOverlapping(
                    {start: new Date(prevBookings[i].startDate), end: new Date(prevBookings[i].endDate)},
                     {start: new Date(startDate), end: new Date(endDate)}
                );
                console.log(isOverLap)
                if(isOverLap) return true;
            }
            return false;
        }


    }

