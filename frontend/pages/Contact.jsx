import React from 'react'

import hero from '../assets/images/contact-us.jpg'

export const Contact = () => {


  return (
      <>
      <div className='hero-div fs-2'>
        <img src={hero} alt="hero image" width='100%' />
        <div className='hero-img-text fs-6'>
            <h2>If you have any questions or need assistance, please feel free to contact us!</h2>
            <p className='fs-5'>Our team is dedicated to providing a swift and thorough response.</p>
        </div>
      </div>
  
  
      <div className='text-center mi-1'>
            
          <br />

          <div>
              <iframe src='https://backend.ea-dental.com/enquiries' width="100%" height="1600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>        
          </div>
      </div>
      </>
    )
}
