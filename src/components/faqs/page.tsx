"use client";
import React, { useState } from "react";
import { BiDownArrow } from "react-icons/bi";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Frequently asked questions",
    answer:
      "What is OneLot? OneLot is a digital auto financier providing short-term loans for used car dealers in the Philippines. Our vision is to empower dealers to expand their inventory, increase sales, and facilitate smoother business operations through tailored financial solutions",
  },
  {
    question: "How does Next.js differ from React?",
    answer:
      "Next.js is a React framework that provides additional features like server-side rendering, routing, and optimized performance out of the box.",
  },
  {
    question: "What are the benefits of using TypeScript?",
    answer:
      "TypeScript adds static typing to JavaScript, which can help catch errors early, improve code quality, and enhance developer productivity.",
  },
];

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 space-y-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#000]">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-b-gray-200 hover:bg-gray-200 rounded-lg shadow-sm"
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-medium text-gray-900">
              {faq.question}
            </span>
            <BiDownArrow
              className={`w-5 h-5 text-[#000] transform transition-transform duration-200 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-gray-50">
              <p className="text-[#6B7280]">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
