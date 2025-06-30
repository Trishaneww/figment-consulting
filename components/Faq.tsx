import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { faqData } from "@/data";
import '../styles/global.scss'

type ListItem = {
  item: string,
  content: string
}

type OrderedListProps = {
  data: ListItem[];
};

const Faq = ({data} : OrderedListProps) => {
  return (
    <div className="flex flex-col justify-center items-center scroll-smooth py-14 lg:py-32 px-6 gap-6 w-full bg-gray-100 z-20">
      <section className="flex flex-col lg:items-center justify-center w-full">
        <h1 className="text-3xl lg:text-[2.5rem] font-medium lg:text-center secondary">
          Questions?<span className="italic"> Answered</span>
        </h1>
        {/* <Button className="h-[45px] w-[140px] rounded-lg text-base shadow-slate-400 shadow-lg mt-8">Email us</Button> */}
      </section>

      <div className="flex flex-col justify-center items-center gap-6 text-slate-950 text-base md:text-lg lg:text-xl rounded-lg w-full">
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-2 w-full lg:w-[48%]"
        >
          {data.map((accordion: any, idx: number) => (
            <AccordionItem
              value={`item-${idx}`}
              className="py-2 rounded-2xl border-b-[1px] border-gray-300"
              key={idx}
            >
              <AccordionTrigger className="text-base text-left">
                {accordion.item}
              </AccordionTrigger>
              <AccordionContent className="text-base py-2">
                {accordion.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {/* <div className="flex flex-col gap-2 items-center px-6 lg:px-2 py-8 border-gray-200 border-[1px] rounded-lg text-center w-[92%] lg:w-[46%] bg-white">
        <p className="font-semibold text-2xl lg:text-4xl">Still have a question?</p>
        <p className="text-base">Get in touch with us and let's discuss it.</p>
        <Button className="font-semibold w-[160px] h-[45px] mt-4">Get Started</Button>
      </div> */}
    </div>
  );
};

export default Faq;
