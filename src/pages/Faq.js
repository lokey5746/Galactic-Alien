import React, { useState } from "react";
import faqData from "../handler/faqData";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function Faq() {
  const [data, setData] = useState(faqData);
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active closed it
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <section className="px-8 md:px-32 mx-auto md:py-10" id="faq">
      <div className="flex flex-col items-center space-y-5 py-10">
        <h2 className="text-3xl md:text-5xl text-center font-semibold font-Kalam tracking-wide uppercase special__font">
          FAQ
        </h2>
      </div>
      <div>
        {data.map((item, index) => (
          <div key={item.id} onClick={() => toggle(index)} className="">
            <div className="mb-6 md:mb-10">
              <div className="cursor-pointer">
                <div className="question flex justify-between items-center rounded-md shadow-md md:py-3 py-2 px-2 md:px-5">
                  <h2 className="text-white text-sm md:text-xl">
                    {item.question}
                  </h2>
                  <span className="text-white font-bold">
                    {clicked === index ? (
                      <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                    ) : (
                      <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                    )}
                  </span>
                </div>
                {clicked === index ? (
                  <div className="mt-4 answer text-white rounded-md shadow-md md:py-5 py-2 px-2 md:px-5 text-xs md:text-sm">
                    {item.answer}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
