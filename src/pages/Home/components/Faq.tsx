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
      question: 'Koje je radno vreme igraonice?',
      answer: 'Radnim danima od 12h do 20h časova, vikendom od 10h do 21h.',
    },
    {
      question: 'Da li organizujete i proslave rođendana?',
      answer: 'Da, organizujemo proslave rođendana uz prisustvo profesionalnih lica koji su zaduženi za bezbednost i zabavu dece. Svi rođendani su zatvorenog tipa sto znači da vam je naše osoblje tokom trajanja termina u potpunosti posvećeno',
    },
    {
      question: 'Da li postoje usluge čuvanja dece bez prisustva roditelja?',
      answer: 'Da, roditeljima je na raspolaganju i usluga čuvanja dece na sat, sa ili bez njihovog prisustva.',
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