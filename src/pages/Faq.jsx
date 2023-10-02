import React, { useState } from 'react'

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setIsOpen(!isOpen)
  }

  console.log(isOpen)

  const faqData = [
    {
      question: 'Da li igraonica ima obezbedjen parking?',
      answer: 'U nasoj ulici dostupan je javni parking, a parking mesto se lako pronalazi, posebno u poslepodnevnim casovima.',
    },
    {
      question: 'How do I get started?',
      answer: 'To get started, follow the steps provided in this FAQ component.',
    },
  ];

  return (
    <div className='faq-section'>
      <div className="container">
        <h1>Cesto postavljana pitanja</h1>
        <div className="questions">
          {faqData.map(item => (
              <div className="qna-wrapper">
                <h1 className='open-btn' onClick={handleChange}>+</h1>
                <div className="qna">
                  <div className="question">
                    {item.question}
                  </div>
                  <div className='answer' >
                    {item.answer}
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq