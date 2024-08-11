import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const DateTimePicker = (props) => {
    return (
      <div className='text-center' id='dateTimePicker'>
        <DatePicker
            selected={props.startDate}
            onChange={props.handleChange}
            showTimeSelect
            dateFormat="Pp"
            className='fs-5'
        />
      </div>
    );
  };
  
  export default DateTimePicker;
  