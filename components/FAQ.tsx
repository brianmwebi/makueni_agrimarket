import React from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "Who are the sellers?",
      answer:
        "Sellers are typically producers, farmers and cooperatives of agricultural crops. All sellers are verified by our platform through a seller specific (KYC) process, to keep market wide credibility.",
    },
    {
      question: "Who are the buyers?",
      answer:
        "Buyers can be referred to as industrial buyers, whom may be crop processors, food manufactures, food retailers, etc... All buyers are verified with a buyer specific (KYC) process.",
    },
    {
      question: "What is KYC?",
      answer:
        "Know-Your-Customer (KYC) is the process we use to verify the identity of our platform users, assessing their reliability and trustworthiness to perform digital crop transactions over the Agri Marketplace platform. To obtain a KYC verified account, we require the user to provide us with 1. company registration, 2. proof of user ID and address, and 3. proof of company IBAN.",
    },
  ];

  return (
    <div>
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <i className="fas fa-globe mr-2"></i>
          <span>Language (EN)</span>
          <i className="fas fa-caret-down ml-1"></i>
        </div>
        <div>
          <button className="mr-4">Login</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Sign Up</button>
        </div>
      </header>
      <main className="text-center mt-8">
        <img
          src="https://placehold.co/200x50"
          alt="Agri Marketplace Logo"
          className="mx-auto mb-4"
        />
        <h1 className="text-4xl font-light">FAQ</h1>
        <div className="mt-8 text-left max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-green-600 text-xl font-bold">
                Q{index + 1}: {faq.question}
              </h2>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FAQ;
