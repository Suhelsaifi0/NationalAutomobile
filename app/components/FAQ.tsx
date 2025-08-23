"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of vehicles do you service?",
      answer: "We service Only Maruti Suzuki and Hyundai and Honda, Petrol Work And CNG Fitting",
    },
    {
      question: "Do I need an appointment for auto repairs?",
      answer: "Before Come to Shop to Call Us At +91 9891696828.",
    },
    {
      question: "How long does it typically take to complete an auto repair?",
      answer: "Most repairs are completed the same day, but it depends on the type of service.",
    },
    {
      question: "Do you offer any warranties on your repairs?",
      answer: "Yes, we provide warranties on most repairs. Please ask our staff for details.",
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept cash, and UPI payments, Online Banking.",
    },
  ];

  return (
    <section className="px-8 py-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-red-500 uppercase text-sm tracking-wider">FAQ</h3>
        <h2 className="text-3xl font-bold mt-2">Frequently Asked Questions</h2>

        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between w-full text-left font-semibold text-lg"
              >
                <span>{faq.question}</span>
                <span className="cursor-pointer">{openIndex === index ? "-" : "+"}</span>
              </button>

              {openIndex === index && (
                <p className="text-gray-400 mt-2 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
