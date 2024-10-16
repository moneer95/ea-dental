import React from "react"

import old from "../assets/images/old-site.png"
import moodle from "../assets/images/moodle.png"


export default function Login() {

    return <div className='login-container rental-cards-div flex'>
        <LoginCard 
            image={old}
            title='The old Platform'
            selected={false}
            dest='https://v1.ea-dental.com/wp-login.php'
        />
        <LoginCard 
            image={moodle}
            title='The <span class="light-text"> New </span> Platform'
            selected={true}
            dest='https://moodle.ea-dental.com/moodle/my/'
        />
    </div>
}


const LoginCard = ({ image, title, selected, dest }) => {


    return (
        <div className={`rental-card ${selected ? 'selected' : ''}`}>
        <img src={image} alt={title} className="rental-card-image" />
        <div className="rental-card-content">
            <h3 className="rental-card-title" dangerouslySetInnerHTML={{ __html: title }}></h3>
            <button 
                    className={`rental-card-button`}
                    onClick={()=> window.open(dest, '_blank')}
            >
                Choose
            </button>
        </div>
        </div>
    );
    };