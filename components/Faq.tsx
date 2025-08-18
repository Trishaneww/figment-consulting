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
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start scroll-smooth py-14 lg:py-32 px-6 gap-6 lg:gap-20 w-full lg:w-[74%]">
      <section className="flex flex-col lg:items-center justify-center w-full lg:w-[40%]">
        <h1 className="text-[2.5rem] leading-[2.5rem] lg:text-[3.4rem] lg:leading-[3.4rem] font-medium text-center lg:text-left secondary">
          Questions?<span className="italic"> Answered</span>
        </h1>
        {/* <Button className="h-[45px] w-[140px] rounded-lg text-base shadow-slate-400 shadow-lg mt-8">Email us</Button> */}
      </section>

      <div className="flex flex-col justify-center items-center gap-6 text-slate-950 text-base md:text-lg lg:text-xl rounded-lg lg:w-[60%]">
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-2 w-full"
        >
          {data.map((accordion: any, idx: number) => (
            <AccordionItem
              value={`item-${idx}`}
              className="py-2"
              key={idx}
            >
              <AccordionTrigger className="text-base lg:text-lg text-left font-semibold">
                {accordion.item}
              </AccordionTrigger>
              <AccordionContent className="text-base lg:text-lg py-2">
                {accordion.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
