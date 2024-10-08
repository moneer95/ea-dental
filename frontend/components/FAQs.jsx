import React, {useState} from "react";


export default function FAQ({faqs, isLarge}) {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const toggleFAQ = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    return (
      <div className="faq-container">
        <h1 className="fs-6 text-center">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    );
  };