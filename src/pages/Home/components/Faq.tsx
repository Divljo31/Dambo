import { useState } from 'react'

const Faq = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const handleChange = (index: number) => selectedAnswer === index ? setSelectedAnswer(null) : setSelectedAnswer(index);

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
        <h1 className='title'>Cesto postavljana pitanja</h1>
        <div className="questions">
          {faqData.map((item, index) => (
            <div className="qna-wrapper" key={index}>
              <div className='open-btn' onClick={() => handleChange(index)}>
                {selectedAnswer === index ? '-' : '+'}
              </div>
              <div className={`qna ${selectedAnswer == index ? 'open' : ''}`}>
                <div className="question">
                  {item.question}
                </div>
                <div className='answer' >
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
    </div>
  )
}

export default Faq