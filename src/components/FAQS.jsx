import React, { useState } from 'react';

const FAQ = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openFAQIndex === index) {
      setOpenFAQIndex(null);
    } else {
      setOpenFAQIndex(index);
    }
  };

  const faqData = [
    {
      question: 'How does the automated agenda and resolution builder work?',
      answer: 'The automated agenda and resolution builder generates comprehensive agendas and resolutions automatically. Organizers can easily customize and edit these documents according to their needs, saving valuable time and ensuring consistent and accurate content.',
    },
    {
      question: 'How does the digital voting system improve the MUN experience?',
      answer: 'The digital voting system provides a platform for delegates to cast their votes digitally. This enhances accuracy, transparency, and efficiency in tallying results. Delegates can conveniently participate in the voting process, and the system ensures that the outcomes are reliable.',
    },
    {
      question: 'How does the speech timer contribute to fair debate?',
      answer: 'The automated speech timer monitors delegates speaking time and issues alerts and notifications. This ensures fairness by adhering to established speaking time limits, promoting balanced participation, and maintaining a well-structured debate environment.',
    },
    {
      question: 'How does the automated rules of procedure tool assist delegates?',
      answer: 'The automated rules of procedure tool provides instant access to the rules governing MUN sessions. Delegates can quickly clarify procedures, resolve disputes, and ensure that their discussions and interactions adhere to established protocols, enhancing the overall MUN experience.',
    },
  ];

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Frequently asked questions
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Your Quick Guide to Seamless MUN Management and Participation.
            </p>
          </div>

          <div className="mx-auto flex max-w-screen-sm flex-col border-t">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b">
                <div
                  className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold transition duration-100 md:text-lg">
                    {faq.question}
                  </span>

                  <span className={`text-indigo-500 ${openFAQIndex === index ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>

                <p
                  className={`mb-4 text-gray-500 ${
                    openFAQIndex === index ? 'max-h-[1000px] opacity-100 transition-all duration-300' : 'max-h-0 opacity-0 transition-all duration-300'
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
