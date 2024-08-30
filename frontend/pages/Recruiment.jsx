import React, {useState} from 'react'
import hero from "../assets/images/recruitment.jpg"
import employerImg from "../assets/images/employer.png"
import candidateImg from "../assets/images/candidate.jpg"


export const Recruiment = () => {

  const [selectedOption, setSelectedOption] = useState({option: 1, frame: "https://backend.ea-dental.com/candidate?embedded=true"});
  const handleClick = (option) => {
    setSelectedOption(option);
  };  

  return (
    <>
    <div className='hero-div fs-2'>
      <img src={hero} alt="" width='100%' />
      <div className='hero-img-text fs-6'>
          <h2>Looking for dentists & dental care providers, look no more!</h2>
          <p className='fs-5'>With no fee, unless we are successful for you</p>
      </div>
    </div>


    <div className='text-center mi-1'>
        
        <br />
        <h3 className='fs-5 navy'>Our service is 100% free of charge, until we are successful in securing a new member of staff.</h3>
        <br />

        <div className='rental-cards-div flex'>
            <RentalCard 
                image={employerImg}
                title='Employer'
                onClick={() => handleClick({option: 1, frame: "https://backend.ea-dental.com/employer?embedded=true"})}
                selected={selectedOption.option == 1}
            />
            <RentalCard 
                image={candidateImg}
                title='Candidate'
                onClick={() => handleClick({option: 2, frame: "https://backend.ea-dental.com/candidate?embedded=true"})}
                selected={selectedOption.option == 2}
            />
        </div>

        <br />
        <br />

        <div>
            <iframe src={selectedOption.frame} width="100%" height="1600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>        
        </div>
    </div>
    </>
  )
  
}





const RentalCard = ({ image, title, onClick, selected }) => {

  return (
      <div className={`rental-card ${selected ? 'selected' : ''}`}>
      <img src={image} alt={title} className="rental-card-image" />
      <div className="rental-card-content">
          <h3 className="rental-card-title">{title}</h3>
          <button 
                  className={`rental-card-button ${selected ? 'selected' : ''}`}
                  onClick={onClick}
          >
              Choose
          </button>
      </div>
      </div>
  );
  };
 