import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const DateTimePicker = (props) => {

    const currentDate = new Date();
    const minTime = new Date();
    minTime.setHours(8, 30); // Set minimum time to 9:00 AM
    const maxTime = new Date();
    maxTime.setHours(17, 0); // Set maximum time to 6:00 PM


    return (
      <div className='text-center' id='dateTimePicker'>
        <DatePicker
            selected={props.startDate}
            onChange={props.handleChange}
            minDate={currentDate} // Disable past dates
            minTime={minTime} // Set minimum time to 9:00 AM
            maxTime={maxTime} // Set maximum time to 6:00 PM
            showTimeSelect
            dateFormat="Pp"
            className='fs-5'
        />
      </div>
    );
  };
  
  export default DateTimePicker;
  