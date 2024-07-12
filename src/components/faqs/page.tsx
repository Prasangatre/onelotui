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
    question: "What kind of financing does OneLot do?",
    answer:
      "OneLot offers collateralized short term loans to used car dealers, allowing them to leverage their inventory for growth. We differ from services such as AsiaLink and Global Dominion, since our financing options are for car dealers themselves, not the customers of car dealers.",
  },
  {
    question: "Is OneLot a bank?",
    answer:
      "No, OneLot is not a traditional bank. We are a dedicated financial institution that understands the unique requirements of used car dealers and offers short-term collateralized lending solutions to address their working capital needs. OneLot Financing Corporation is a duly registered corporate entity and is regulated by the Securities and Exchange Commission (SEC).",
  },
];

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl px-6  md:px-0 mx-auto mt-8 space-y-4 bg-[#f9fafb]">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#000]">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className=" border-b-1 border-gray-200 rounded-lg shadow-sm"
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
            <div className="p-4 ">
              <p className="text-[#6B7280]">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
