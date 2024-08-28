const axios = require('axios');

const apiKey = process.env.FRAPPE_KEY;
const apiSecret = process.env.FRAPPE_SECRET;

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${apiKey}:${apiSecret}`
    }
};


function createPurchaseOrder(email, full_name, phone, address, items){
    const data = {
        email: email,
        full_name: full_name,
        phone: phone,
        address: address,
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
    console.log('++++++++++++++++++++++++====================++++++++++++++++++++++++++==========+++++++++====+++++==+=+=======+=+============')

    const data = {
        email: email,
        full_name: full_name,
        phone: phone,
        address: address,
        courses: courses.map( item => {
            return {
                course_name: item.courseName,
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



module.exports = {
    createPurchaseOrder,
    createCourseOrder
  };
  