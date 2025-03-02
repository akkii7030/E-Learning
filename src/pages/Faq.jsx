import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What if I miss my Live class?',
      answer: 'Don’t worry! We record every session of the class then store it into our video library. You can easily find your missed class session.',
    },
    {
      question: 'How will I know that I am a graduate now?',
      answer: 'Once you complete all your projects and get good results in your final exam, the system will notify you that “you are graduated”. Moreover, you will get your certificate in hand within 5-10 days.',
    },
    {
      question: 'How much does the course cost me?',
      answer: 'It depends on the course you choose. Every course has different pricing, so you must check out the course pricing and later pay for your course.',
    },
    {
      question: 'Is there any scholarship available?',
      answer: 'Yes, we do offer scholarships for bright students. We provide this aid based on performance criteria. If you perform well, you can apply for it.',
    },
    {
      question: 'Does this platform give any discount on courses?',
      answer: 'We don’t have any discount offers yet. Once you enroll yourself on this platform, you will receive specific promotional offers from time to time.',
    },
    {
      question: 'What if I don’t receive my scholarship?',
      answer: 'If this ever happens, immediately connect with us. We will interact with you on a phone call to ensure you receive what you deserve.',
    },
    {
      question: 'Will I be charged for my subscription after I graduate?',
      answer: 'Once you graduate in your chosen course, you will not be charged for the next month’s billing cycle.',
    },
    {
      question: 'When can I cancel my subscription?',
      answer: 'You can cancel your subscription at any time without any hassle.',
    },
  ];

  return (
    <section className="faq-area page-paddings bg-gradient-to-r from-black to-gray-800 text-white">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-box-list transform transition-all duration-500 ease-in-out ${activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-80'}`}
              onClick={() => toggleFAQ(index)}
            >
              <a href="JavaScript:Void(0)" className="flex justify-between items-center py-3 px-4 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-700">
                <span className="text-lg font-semibold">{faq.question}</span> <FaPlus />
              </a>
              {activeIndex === index && (
                <div className="content py-2 px-4 bg-gray-700 rounded-b-lg animate-fadeInUp">
                  <p className="theme-description text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
