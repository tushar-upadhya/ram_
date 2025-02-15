"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatePresence, motion } from "framer-motion"; // ✅ Import AnimatePresence
import React from "react";
import { Separator } from "../ui/separator";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What is Santusht?",
    answer:
      "Santusht is a platform designed to empower users to voice their concerns and resolve grievances promptly, ensuring high-quality healthcare services.",
  },
  {
    question: "How can I submit feedback?",
    answer:
      "You can submit feedback through the dedicated feedback portal available 24/7, allowing for prompt responses and solutions to your concerns.",
  },
  {
    question: "How does Santusht help with grievances?",
    answer:
      "Santusht provides a streamlined process for grievance resolution, ensuring efficient handling of issues and enhancing the overall user experience.",
  },
  {
    question: "Is Santusht available 24/7?",
    answer:
      "Yes, Santusht is available 24/7, ensuring timely assistance whenever needed.",
  },
];

const Faq: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-center text-[min(6vw,1.5rem)] font-bold dark:text-gray-300">
          Frequently Asked Questions
        </h2>
        <Separator className="mx-auto -mt-4 mb-4 h-[2px] w-24 bg-gray-300 dark:bg-gray-700" />

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-200 dark:border-gray-700"
            >
              <AccordionTrigger className="text-left text-[min(4vw,1rem)] capitalize leading-relaxed text-muted-foreground dark:text-gray-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent asChild>
                <AnimatePresence initial={false}>
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ ease: "easeInOut" }}
                    className="text-left text-[min(4vw,1rem)] capitalize leading-relaxed text-muted-foreground dark:text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                </AnimatePresence>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
