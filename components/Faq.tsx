import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data";
import { Button } from "./ui/button";

const Faq = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-12 lg:mt-20 scroll-smooth py-24 pb-40 px-6 gap-6">
      <section className="flex flex-col items-center justify-center gap-2 mb-10 text-center xl:text-left p-2">
        <p className="text-xl">FAQs</p>
        <h1 className="text-3xl lg:text-6xl font-semibold text-center">
          Frequently Asked <span className="italic">Questions</span>
        </h1>
        {/* <Button className="h-[45px] w-[140px] rounded-lg text-base shadow-slate-400 shadow-lg mt-8">Email us</Button> */}
      </section>

      <div className="flex flex-col justify-center items-center gap-6 text-slate-950 text-base md:text-lg lg:text-xl px-2 py-6 rounded-lg">
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-2 lg:w-[800px]"
        >
          {faqData.map((accordion: any, idx: number) => (
            <AccordionItem
              value={`item-${idx}`}
              className="py-2 px-4 rounded-2xl bg-white border-[1px] border-gray-200"
              key={idx}
            >
              <AccordionTrigger className="text-base font-bold md:text-lg text-left">
                {accordion.item}
              </AccordionTrigger>
              <AccordionContent className="text-base lg:text-lg py-2">
                {accordion.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="flex flex-col gap-2 items-center px-6 lg:px-2 py-8 border-gray-200 border-[1px] rounded-lg text-center lg:w-[800px] bg-white">
        <p className="font-semibold text-2xl lg:text-4xl">Still have a question?</p>
        <p className="text-base">Get in touch with us and let's discuss it.</p>
        <Button className="font-semibold w-[160px] h-[45px] mt-4">Get Started</Button>
      </div>
    </div>
  );
};

export default Faq;
