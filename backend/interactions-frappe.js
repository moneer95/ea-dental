const axios = require('axios');

const apiKey = process.env.FRAPPE_KEY;
const apiSecret = process.env.FRAPPE_SECRET;

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${apiKey}:${apiSecret}`
    }
};


function createPurchaseOrder(email, full_name, phone, address, paidShipping, items){
    const data = {
        email: email,
        full_name: full_name,
        phone: phone,
        address: address,
        shipping: paidShipping,
        items: items.map( item => {
            return {
                item_name: item.optionName,
                quantity: item.quantity
            }
        })
    };

    axios.post('https://backend.ea-dental.com/api/resource/Product%20Orders', data, config)
        .then(response => {
            console.log('Document created successfully:', response.data);
        })
        .catch(error => {
            console.error('Error creating document:', error.response ? error.response.data : error.message);
        });

}


function createCourseOrder(email, full_name, phone, address, courses){

    const data = {
        email: email,
        full_name: full_name,
        phone: phone,
        address: address,
        courses: courses.map( item => {
            return {
                course_name: item.courseName + item.choiceName,
                enroll_date: (new Date()).toString().split('T')[0]
            }
        })
    };


    axios.post('https://backend.ea-dental.com/api/resource/Courses%20Orders', data, config)
        .then(response => {
            console.log('Document created successfully:', response.data);
        })
        .catch(error => {
            console.error('Error creating document:', error.response ? error.response.data : error.message);
        });

}


function createTicketOrder(email, full_name, phone, tickets){
    
    const data = {
        email: email,
        full_name: full_name,
        phone: phone,
        order_date: new Date().toISOString().split('T')[0],
        tickets: tickets.map( ticket => {
            return {
                ticket_name: ticket.ticketName + ticket.choiceName
            }
        })
    };

    axios.post('https://backend.ea-dental.com/api/resource/Tickets%20Orders', data, config)
        .then(response => {
            console.log('Document created successfully:', response.data);
        })
        .catch(error => {
            console.error('Error creating document:', error.response ? error.response.data : error.message);
        });
}


function createBooking(email, full_name, phone, bookings){
    const data = {
        email: email,
        full_name: full_name,
        phone: phone,
        order_date: new Date().toISOString().split('T')[0],
        bookings: bookings.map( booking => {
            return {
                booking_details: booking.optionName
            }
        })
    };

    axios.post('https://backend.ea-dental.com/api/resource/Venue%20Bookings', data, config)
        .then(response => {
            console.log('Document created successfully:', response.data);
        })
        .catch(error => {
            console.error('Error creating document:', error.response ? error.response.data : error.message);
        });

}



module.exports = {
    createPurchaseOrder,
    createCourseOrder,
    createTicketOrder,
    createBooking
  };
  