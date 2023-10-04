import React, { useState } from 'react'

const Faq = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const handleChange = (index) => selectedAnswer === index ? setSelectedAnswer(null) : setSelectedAnswer(index);

  const faqData = [
    {
      question: 'Da li igraonica ima obezbedjen parking?',
      answer: 'U nasoj ulici dostupan je javni parking, a parking mesto se lako pronalazi, posebno u poslepodnevnim casovima.',
    },
    {
      question: 'How do I get started?',
      answer: 'To get started, follow the steps provided in this FAQ component.',
    },
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
          {faqData.map((item, index) => (
            <div className="qna-wrapper" key={index}>
              {selectedAnswer == index ?
                <h1 className='open-btn' onClick={() => handleChange(index)}>-</h1>
                :
                <h1 className='open-btn' onClick={() => handleChange(index)}>+</h1>
              }
              <div className={`qna ${selectedAnswer == index ? 'open' : ''}`}>
                <div className="question">
                  {item.question}
                </div>
                {selectedAnswer == index && 
                  <div className='answer' >
                    {item.answer}
                  </div>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq