
const { exec } = require('child_process');

function getUserID(userEmail){
    const curlCommand = `curl -g "https://ea-dental-moodle.monirskaik.sbs/moodle/webservice/rest/server.php?wstoken=${process.env.GET_USER_TOKEN}&wsfunction=core_user_get_users&moodlewsrestformat=json&criteria[0][key]=username&criteria[0][value]='${userEmail}'"`

    return new Promise((resolve, reject) => {
        exec(curlCommand, (error, stdout, stderr) => {
            if (error) {
                reject(`Error executing curl: ${error}`);
                return;
            }
            try {
                const json = JSON.parse(stdout);
                const users = json.users;
                if (users.length) {
                    resolve(users[0]['id']);
                } else {
                    resolve(null);
                }
            } catch (parseError) {
                reject(`Error parsing JSON: ${parseError}`);
            }
        });
    });

}


async function createUser(userEmail, fName, lName){ //userEmail is the email we get from stripe

    const password = generatePassword(fName + ' ' + lName)

    const user = await getUserID(userEmail)
    if(user){
        console.log(user)
        return user;
    }

    else{

        const curlCommand = `curl -g "https://ea-dental-moodle.monirskaik.sbs/moodle/webservice/rest/server.php?wstoken=${process.env.CREATE_USER_TOKEN}&wsfunction=core_user_create_users&moodlewsrestformat=json&users[0][username]=${userEmail}&users[0][firstname]=${fName}&users[0][lastname]=${lName}&users[0][email]=${userEmail}&users[0][password]=${password}"`;
        
        // Execute the curl command
        return new Promise((resolve, reject) => {
            exec(curlCommand, (error, stdout, stderr) => {
                
                if (error) {
                    reject(`Error executing curl: ${error}`);
                    return;
                }
                try {
                    const json = JSON.parse(stdout);
                    const userID = json[0].id;

                    resolve(userID);
                                    
                } catch (parseError) {
                    reject(`Error parsing JSON: ${parseError}`);
                }
                console.log(`Curl output: ${stdout}`);
                // console.error(`Curl error output: ${stderr}`);
            });
        })
    }
}


 
async function enrollUser(userEmail, fName, lName, courses){

    const userID = await createUser(userEmail, fName, lName)
    
    curlCommand = `curl -g "https://ea-dental-moodle.monirskaik.sbs/moodle/webservice/rest/server.php?wstoken=${process.env.ENROLL_USER_TOKEN}&wsfunction=enrol_manual_enrol_users&moodlewsrestformat=json&enrolments[0][roleid]=5&`

    for(let i=0; i<courses.length; i++){
      let courseIDs = coursesInfo[courses[i].courseName]
      console.log(courseIDs)
      for(let j=0; j<courseIDs.length; j++){
        curlCommand += `enrolments[${j}][roleid]=5&enrolments[${j}][userid]=${userID}&enrolments[${j}][courseid]=${courseIDs[j]}&`
      }   
    }

    curlCommand = curlCommand + '"'
    console.log(curlCommand)

    exec(curlCommand, (error, stdout, stderr) => {
            
        if (error) {
        console.error(`Error executing curl: ${error}`);
        return;
        }
        console.log(`Curl output: ${stdout}`);
        // console.error(`Curl error output: ${stderr}`);
    });
}




// --------------create royal mail order ----------------
const axios = require('axios');
const { cursorTo } = require('readline');

const createOrder = async () => {
  try {
    const response = await axios.post('https://api.parcel.royalmail.com/api/v1/Orders', {
      items: [
        {
          orderReference: "ORDER123",
          recipient: {
            name: "John Doe",
            address: {
                fullName: 'moni skaik',
                line1: "123 Main St",
                city: "London",
                postcode: "E1 6AN",
                countryCode: "GB",
                addressLine1: "23 - 25 st",
                postcode: "HR5 - WDS"
              }
          },
          packages: [
            {
                weightInGrams: 700,
                dimensions: {
                  depthInMms: 1000,
                  widthInMms: 5000,
                  heightInMms: 8000
                },
                packageFormatIdentifier: "undefined"
              }
          ],
          orderDate: "2024-08-05T14:48:00.000Z",
          subtotal: 100.00,
          shippingCostCharged: 10.00,
          total: 110.00,
          currencyCode: "USD"
        }
      ]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${process.env.ROYAL_MAIL_TOKEN}`
      }
    });

    console.log('Order created successfully:', response.data);

    if (response.data.errorsCount > 0) {
      console.error('Failed Orders:', JSON.stringify(response.data.failedOrders));
    }

  } catch (error) {
    console.error('Error creating order:', error.response ? error.response.data : error.message);
  }
};





// generate password
function generatePassword(name) {
    const specialCharacters = "!@#$%*+-.";
    const digits = "0123456789";
  
    // Select two random digits
    let digit1 = digits[Math.floor(Math.random() * digits.length)];
    let digit2 = digits[Math.floor(Math.random() * digits.length)];
  
    // Select one random special character
    let specialChar = specialCharacters[Math.floor(Math.random() * specialCharacters.length)] || '/';
  
    // Combine them to form a suffix
    let suffix = digit1 + digit2 + specialChar;
  
    //get first or last name
    name = name.split(' ')[Math.floor(Math.random() * 2)]
    //title it
    name = name.charAt(0).toUpperCase() + name.slice(1)
  
    // Add the suffix to the name
    const pass = name + suffix //the ! just in case the special charachter not recognised
    console.log(pass)
    return pass
    }

let coursesInfo= {
  "Mock Exams Only": [17, 5],
  "LDS1 Silver Bundle": [14, 15],
  "LDS1 Gold Bundle": [14, 13],
  "LDS1 Diamond Bundle": [14, 13, 17, 5], 
  "ORE1 Silver Bundle": [14, 15],
  "ORE1 Gold Bundle": [14, 13],
  "ORE1 Diamond Bundle": [14, 13, 17, 5],
  "ORE2 Comprehensive Online Course": [16],
  "ORE2 Dental Treatment Planning Videos Subscription": [6],
  "ORE2 Theory course notes + Videos 10 DTP cases": [12],
  "ORE2 Dental Manikin Videos Subscription": [7]
}
  




module.exports = createUser
module.exports = enrollUser