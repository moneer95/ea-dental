import React from 'react'
import hero from "../assets/images/recruitment.jpg"


export const Recruiment = () => {
  return (
    <>
    <div className='hero-div fs-2'>
      <img src={hero} alt="" width='100%' className='products-hero' />
      <div className='hero-img-text fs-5'>
          <h2>Recruitment</h2>
          <p className='fs-5'>Looking for dentists & dental care providers, look no more! with no fee, unless we are successful for you</p>
      </div>
      </div>
    <div className='text-center mi-1'>
        <h2 className='fs-4 '> Looking for dentists & dental care providers, look no more!</h2>
        <h3 className='fs-5'>With no fee, unless we are successful for you</h3>
        <h3 className='fs-5'>Our service is 100% free of charge, until we are successful in securing a new member of staff.</h3>
        <p className='fs-6'> with no obligation and one of our consultants will be in touch with you to discuss your requirements in confidence and how we can help you.  If you prefer to call, we are always happy to talk on 07447931179.</p>
        <div>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScX5Mru_BEQ1Y-w0M_vZ9DpNSii9XWkN0cLb1egSv-eK1t5tw/viewform?embedded=true" width="800" height="1364" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>        
        </div>
    </div>
    </>
  )
}
