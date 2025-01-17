"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { FAQ } from "../data";

const Card = ({question, answer}) => {
  const [isClose, setIsClose] = useState(true);
  return (
    <div className={`${isClose ? 'bg-[#FFEFE5]': 'bg-white'}  h-fit w-full lg:w-[48%] p-6 border border-black rounded-lg transition-all duration-700`}>
      <div className="[&>p]:font-medium flex items-center justify-between">
        <p>{question}</p>
        <span className=" cursor-pointer h-fit p-1 border border-black rounded-md" onClick={() => setIsClose(!isClose)}>
          <Icon icon={isClose === true? "ic:round-plus":"ic:round-minus"} width="20" height="20" />
        </span>
      </div>
      <p className={`${isClose === true? 'hidden': '' } mt-2 pt-2 text-sm w-[90%] border-t border-black`}>
        {answer}
      </p>
    </div>
  );
};

const FAQs = () => {
  return (
    <section className="my-12 md:my-16 flex flex-col items-center">
      <p className=" mb-4 py-1 px-3 text-xs rounded-lg border border-black bg-white">
        Solutions For The Doubts
      </p>
      <h2 className=" font-bold text-center md:text-start text-3xl md:text-4xl font-raleway">
        Frequently Asked Questions
      </h2>
      <p className=" md:w-[68%] text-center">
        Find all the essential information you need in our FAQ section, designed
        to address the most frequently asked questions and help you make
        informed decisions for your child's education.
      </p>
      <div className=" mt-14 flex flex-wrap justify-between gap-5 ">
        {
          FAQ.map(faq => (
            <Card key={faq.id} question={faq.question} answer={faq.answer} />
          ))
        }
      </div>
    </section>
  );
};

export default FAQs;
