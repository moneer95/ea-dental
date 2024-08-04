import React from 'react'
import hero from "../assets/images/ore-section.jpg"

import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';


export const Venue = () => {

    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [selectedTime, setSelectedTime] = React.useState('10:00');

    return (
        <div>
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
            <div>

            <h2>Select Date and Time</h2>
            <div>
                <label>Date: </label>
                <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy/MM/dd"
                />
            </div>
            <div>
                <label>Time: </label>
                <TimePicker
                onChange={setSelectedTime}
                value={selectedTime}
                disableClock={true}
                />
            </div>
            </div>

        </div>
    )
    }

