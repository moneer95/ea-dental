import React, {useState} from "react";

import ahmed from "../assets/images/team/ahmed.webp"
import boss from "../assets/images/team/boss.webp"
import hanyah from "../assets/images/team/hanyah.webp"
import jayatill from "../assets/images/team/jayatill.webp"
import kunnal from "../assets/images/team/kunnal.webp"
import laveeza from "../assets/images/team/laveeza.webp"
import shahla from "../assets/images/team/shahla.jpg"
import syed from "../assets/images/team/syed.webp"
import touraj from "../assets/images/team/touraj.webp"
import radwan from "../assets/images/team/radwan.jpeg"
import amir from "../assets/images/team/amir.webp"
import ayesha from "../assets/images/team/ayesha.webp"
import hero from "../assets/images/team-section.png"

export default function Team() {

    return(
    <>
        <div className="team-container" >

            <TeamCard 
                image={boss}
                name='Dr. Ebtisam El Hamalawy'
                caption=' MJDF RCS (Lon), MFDS RCS(Edn), BDs							'
                details={[
                    "Membership of the Joint Dental Faculties at The Royal College of Surgeons of England {MJDF RCS Eng} 2014",
                    "Membership of the Faculty of Dental Surgery of Edinburgh {MFDS RCS Ed} 2014",
                    "Invisalign-Certified provider",
                    "Facial aesthetics Botox and fillers certified",
                    "Multisystem Dental Implant Certificate (1yr programme, Trafford General Hospital and ICE Institute, Manchester)",
                    "BDs Misr International University (MIU), Cairo, Egypt 'Distinction'"
                ]}
            />

            <TeamCard 
                image={ahmed}
                name='Dr. Ahmed Alkhalily'
                caption='Manikin Tutor'
                details={
                [
                    "MSc, PgCert, BDS with a decade of clinical experience.",
                    "Former mentor at the Iraqi Ministry of Health's specialized dental training center (2019-2020).",
                    "Tutor and lecturer at Alghadeer Dental Training Center in Baghdad (2018-2020).",
                    "2020 Certificate in Restorative Dentistry from the University of Edinburgh.",
                    "2018 Master's degree in Conservative Dentistry from the University of Baghdad.",
                    "Earned BDS in 2012 from the University of Baghdad.",
                    "Dr. Ahmed embodies a wealth of experience and a strong commitment to dental excellence."
                ]
            }
            />

            <TeamCard 
                image={radwan}
                name='Dr. Radwan Badran'
                caption='CO Manager'
                details={[
                    "CO Manager"
                ]}
            />

            <TeamCard 
                image={shahla}
                name='Dr. Shahla Shokrollahi'
                caption='Manikin Tutor'
                details={[
                    "General Dental Practitioner based in London, renowned for her expertise and special interest in restorative dentistry.",
                    "Graduated with distinction in multiple subjects, earning her BDS in 2017.",
                    "Currently registered with the General Dental Council UK, ensuring high standards of professionalism and care.",
                    "Dedicated service in primary dental care, bringing a wealth of practical experience to her practice.",
                    "Offers comprehensive and top-tier dental services to her patients in the vibrant city of London.",
                    "A passionate and skilled practitioner where commitment to excellence converges for optimal oral health."
                  ]}
            />
 
            <TeamCard 
                image={hanyah}
                name='Dr. Haniyeh Moaven'
                caption='Specilaist Periodontist, BDS, DClinDent in Periodontology, M Perio (RCS-Ed)'
                details={[
                    "Clinical teacher at QMUL and Clinical Research Assistant at KCL.",
                    "Completed general dental degree at SBMU, Tehran, Iran in 2017.",
                    "Pursued a 3-year full-time program specializing in periodontology and implant dentistry.",
                    "Earned a Doctorate in Clinical Dentistry (Periodontology) from Queen Mary University of London in 2021.",
                    "Currently works in private practice, engages in clinical research, and serves as a clinical lecturer for trainee dentists at King's College London."
                ]}
            />
 
            <TeamCard 
                image={jayatill}
                name='Dr. Jayatillake '
                caption='Clinical Lecturer / ORE2 LEAD'
                details={[
                    "General dental practitioner with 13 years of clinical experience in primary dental care.",
                    "Graduated in December 2007 from the University of Otago, Dunedin, New Zealand.",
                    "Worked full-time in private practice in Melbourne, Australia from March 2008 to May 2018.",
                    "Currently registered with the General Dental Council and practicing in the UK."
                ]}
            />
 
            <TeamCard 
                image={kunnal}
                name='Dr. Kunal Kumar'
                caption='Manikin Tutor'
                details={[
                    "Dr. Kunnal holds prestigious qualifications including MJDF RCS Part 1, ORE, and BDS, showcasing a diverse range of expertise.",
                    "Specializing in restorative dentistry, he brings seven years of invaluable experience in general dental practice.",
                    "His commitment to exceptional dental care is defined by a blend of skill, knowledge, and a passion for teaching and excellence."
                  ]}
            />
 
            <TeamCard
                image={laveeza}
                name='Dr. Laveeza Pervaz'
                caption='BDS'
                details={[
                    "General dental practitioner in London with a special interest in cosmetic dentistry.",
                    "Completed her BDS in 2016.",
                    "Has been teaching overseas dentists since 2019."
                  ]}
            />
 
            <TeamCard 
                image={syed}
                name='Dr. Syed Hammad Hassan'
                caption='MSC, FCPS in prosthodontics, BDS'
                details={[
                    "Qualified Prosthodontist and Medical & Dental Educator.",
                    "Experienced in teaching both undergraduate and postgraduate Prosthodontics students, supervising research projects.",
                    "Associate Dentist at Littlehampton Dental Care and The Bower Dental, Staplehurst, Kent.",
                    "Associate Professor and Head of Prosthodontics at Margalla Dental College."
                ]}
            />
 
            <TeamCard 
                image={touraj}
                name='Dr. Touraj Nejatian'
                caption='AD, DDS, PhD (restorative dentistry), AFHEA'
                details={[
                    "Dr Nejatian qualified as a dentist (DDS) in 2001 and completed his PhD (dental materials) in 2008.",
                    "He has 15 years of academic teaching experience nationally and internationally, including several leading UK dental universities (Sheffield, Newcastle, and UCL).",
                    "Dr Nejatian is a member of the UK Higher Education Academy.",
                    "He has taught and supervised students on multiple programmes including BDS, DDS, MClinDent, and MSc in Restorative Dental Practice Course at Eastman Dental Institute.",
                    "Dr Nejatian is an LDS and ORE dental manikin examiner at the Royal College of Surgeons and Eastman Dental Institute."
                ]}
            />
 
            <TeamCard 
                image={amir}
                name='Dr. Amir Hakim'
                caption='Msc (Oxon) PhD DIC FHEA PGCert Barts and the London SMD, QMUL National heart and lung institute, Imperial college London'
                details={[
                    "Dr Hakim is an academic based at Barts and the London SMD, QMUL, and the National Heart & Lung Institute, Imperial College London.",
                    "He completed his PhD at Imperial College London, and his research was awarded the American Thoracic Society/Emphysema Foundation Scholarship.",
                    "Prior to his PhD, he completed his degree at the University of Oxford, where he was awarded an academic scholarship.",
                    "He is a member of the British Thoracic Society and the European Respiratory Society."
                ]}
            />
 
            <TeamCard 
                image={ayesha}
                name='Dr. Ayesha Anwar'
                caption='B.D.S, FCPS Orthodontics, Morth RCSEd (Edinburgh)'
                details={[
                    "Specialist Orthodontist and Member of the Royal College of Surgeons Edinburgh (Orthodontics).",
                    "Clinical Supervisor responsible for academic and clinical training of both undergraduate and postgraduate students."
                ]}
            />


            </div>
        </>
    )
}





const TeamCard = ({ image, name, caption, details }) => {

    // State to control the modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className={`team-card`} onClick={openModal}>
                <img src={image} alt={name} className="team-card-image" />
                <div className="team-card-content">
                    <h3 className="team-card-title">{name}</h3>
                    <p className="team-card-caption">{caption}</p>
                </div>
            </div>
            
            {isModalOpen && <DetailCard 
                image={image}
                name={name}
                details={details}
                caption={caption}
                close={closeModal}
                isModalOpen={isModalOpen}
            />}
        </>
    );
    };
    


const DetailCard = ({ image, name, details, caption, close, isModalOpen }) => {

    return (
        <div className="team-detail-card-wrapper" onClick={close}>
            <div className={`team-detail-card`}>
                <div className="close" onClick={close}>
                &times;
                </div>

                <img src={image} alt={name} className="team-detail-card-image" />
                <div className="team-detail-card-content">
                    <h3 className="team-detail-card-title">{name}</h3>
                    <p className="team-detail-card-caption">{caption}</p>
                    <hr />
                    <ul className="fs-7">{details.map( detail => <li>{detail}</li> )}</ul>
                </div>
            </div>
        </div>

    );
}
    