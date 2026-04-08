'use client';

import { useState } from "react";

const faqs = [
  {
    question: "আমি কিভাবে অর্ডার দিতে পারি?",
    answer: "আপনি আমাদের অর্ডার পেজে গিয়ে প্যাকেজ সিলেক্ট করে, আপনার তথ্য পূরণ করে, এবং Confirm বাটনে ক্লিক করে অর্ডার দিতে পারবেন।",
  },
  {
    question: "আপনার ডেলিভারি এলাকা কোনগুলো?",
    answer: "আমরা বর্তমানে Court Hill, New Market, এবং Chowkbazar-এ ডেলিভারি করি। ভবিষ্যতে আরও এলাকা যুক্ত হবে।",
  },
  {
    question: "আপনারা কোন কোন পেমেন্ট মেথড গ্রহণ করেন?",
    answer: "আমরা ক্যাশ অন ডেলিভারি, bKash, Nagad এবং অনলাইন পেমেন্ট গ্রহণ করি।",
  },
  {
    question: "আমি কি অর্ডার পরিবর্তন বা বাতিল করতে পারি?",
    answer: "অর্ডার দেওয়ার ১৫ মিনিটের মধ্যে পরিবর্তন বা বাতিল করা যেতে পারে। দ্রুত আমাদের সাপোর্টে যোগাযোগ করুন।",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">
        সাধারণ জিজ্ঞাসা
      </h1>

      <div className="max-w-4xl w-full space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-2xl shadow p-4">
            <button
              className="w-full text-left flex justify-between items-center font-semibold text-gray-800"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}