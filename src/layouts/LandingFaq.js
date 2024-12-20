import React, { useEffect, useState } from "react";
import {
  Button,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";

import type { ButtonProps } from "@relume_io/relume-ui";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  heading: string;
  description: string;
  footerHeading: string;
  footerDescription: string;
  button: ButtonProps;
  questions: QuestionsProps[];
};

export type LandingFaqProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const LandingFaq = (props: LandingFaqProps) => {
  const { heading, description, questions, footerHeading, footerDescription, button } = {
    ...LandingFaqDefaults,
    ...props,
  };

  const dotSize = 40; // Size of each grid cell

  // State to store grid dimensions
  const [grid, setGrid] = useState({ cols: 0, rows: 0 });

  // Function to calculate grid dimensions
  const calculateGrid = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = document.body.scrollHeight; // Entire scrollable height

    const cols = Math.ceil(screenWidth / dotSize);
    const rows = Math.ceil(screenHeight / dotSize);

    setGrid({ cols, rows });
  };

  useEffect(() => {
    calculateGrid(); // Initial calculation
    window.addEventListener("resize", calculateGrid); // Recalculate on resize
    window.addEventListener("scroll", calculateGrid); // Recalculate on scroll

    return () => {
      window.removeEventListener("resize", calculateGrid);
      window.removeEventListener("scroll", calculateGrid);
    };
  }, []);

  return (
    <section
      id="faq"
      className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-black text-white overflow-hidden"
    >
      {/* Grid Background with Connected Dots */}
      <div
        className="absolute inset-0 grid pointer-events-none z-0"
        style={{
          gridTemplateColumns: `repeat(${grid.cols}, ${dotSize}px)`,
          gridTemplateRows: `repeat(${grid.rows}, ${dotSize}px)`,
        }}
      >
        {[...Array(grid.cols * grid.rows)].map((_, i) => (
          <div
            key={i}
            className="relative w-[1px] h-[1px] bg-white opacity-20"
          >
            {/* Horizontal Line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] w-full bg-white"></div>
            {/* Vertical Line */}
            <div className="absolute top-0 left-0 right-0 w-[1px] h-full bg-white"></div>
            {/* Dot */}
            <div className="absolute top-0 left-0 w-[3px] h-[3px] bg-white rounded-full transform translate-x-[-1px] translate-y-[-1px]"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-lg relative z-10">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="text-md text-gray-300 md:text-lg">{description}</p>
        </div>
        <Accordion type="multiple">
          {questions.map((question, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="py-3 text-lg font-medium md:py-5 md:text-xl">
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="py-2 text-gray-400 md:pb-6 md:text-lg">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-12 text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl lg:text-4xl">
            {footerHeading}
          </h4>
          <p className="text-md text-gray-300 md:text-lg">{footerDescription}</p>
          <div className="mt-6 md:mt-8">
            <Button
              className="bg-blue-500 hover:bg-white hover:text-black text-white rounded-md border-black"
              {...button}
            >
              {button.title}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const LandingFaqDefaults: Props = {
  heading: "FAQs",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  questions: [
    {
      title: "What is your return policy?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      title: "How long does shipping take?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      title: "What payment methods are accepted?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      title: "Do you offer international shipping?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      title: "How can I track my order?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
  ],
  footerHeading: "Still have questions?",
  footerDescription: "Contact our support team for further assistance.",
  button: {
    title: "Contact Us",
    variant: "outline",
  },
};
