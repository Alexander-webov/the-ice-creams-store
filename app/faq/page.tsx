"use client";

import { useState } from "react";
import TitleSection from "../components/ui/TitleSection";
import { Berkshire_Swash } from "next/font/google";
import Container from "../components/Container";
const berkshireSwash = Berkshire_Swash({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

type Tabs = {
  id: string;
  title: string;
  description: string;
};

const dataTabs: Tabs[] = [
  {
    id: "tab1",
    title: " Some of the queries you want to know about us.",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Repellat officia illo ducimus, vitae voluptatem exercitationem  dignissimos. Atque officiis vel dolore quia repellat  voluptatibus repudiandae nemo ipsam dolores modi odio obcaecati  fugiat, esse facilis, culpa, harum illum laborum repellendus  dicta accusamus?",
  },
  {
    id: "tab2",
    title: "What ingredients do you use in your ice cream?",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Repellat officia illo ducimus, vitae voluptatem exercitationem  dignissimos. Atque officiis vel dolore quia repellat  voluptatibus repudiandae nemo ipsam dolores modi odio obcaecati  fugiat, esse facilis, culpa, harum illum laborum repellendus  dicta accusamus?",
  },
  {
    id: "tab3",
    title: "Do you have gluten-free ice cream?",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Repellat officia illo ducimus, vitae voluptatem exercitationem  dignissimos. Atque officiis vel dolore quia repellat  voluptatibus repudiandae nemo ipsam dolores modi odio obcaecati  fugiat, esse facilis, culpa, harum illum laborum repellendus  dicta accusamus?",
  },
  {
    id: "tab4",
    title: "Can I order ice cream online?",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Repellat officia illo ducimus, vitae voluptatem exercitationem  dignissimos. Atque officiis vel dolore quia repellat  voluptatibus repudiandae nemo ipsam dolores modi odio obcaecati  fugiat, esse facilis, culpa, harum illum laborum repellendus  dicta accusamus?",
  },
  {
    id: "tab5",
    title: "Do you have nutritional information available?",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Repellat officia illo ducimus, vitae voluptatem exercitationem  dignissimos. Atque officiis vel dolore quia repellat  voluptatibus repudiandae nemo ipsam dolores modi odio obcaecati  fugiat, esse facilis, culpa, harum illum laborum repellendus  dicta accusamus?",
  },
  {
    id: "tab6",
    title: "Can I book your store for private events?",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Repellat officia illo ducimus, vitae voluptatem exercitationem  dignissimos. Atque officiis vel dolore quia repellat  voluptatibus repudiandae nemo ipsam dolores modi odio obcaecati  fugiat, esse facilis, culpa, harum illum laborum repellendus  dicta accusamus?",
  },
];
function Faq() {
  const [isActiveTab, setIsActiveTab] = useState<string | null>(null);

  return (
    <main className="mb-40 ">
      <TitleSection titlePage="Faq" />
      <Container>
        <div className="text-center">
          <h2 className={`${berkshireSwash.className} pt-20 pb-1  text-6xl`}>
            Frequently Asked <span className="text-[#F83D8E]">Questions</span>
          </h2>
          <p className="text-gray-500 text-xl mt-5">
            Some of the queries you want to know about us.
          </p>
        </div>
        <div className="mt-20 flex flex-col gap-6 max-w-[900px] mx-auto justify-center items-center ">
          {dataTabs.map((tab) => {
            const isOpen = isActiveTab === tab.id;

            return (
              <div className="max-w-[540px] w-full" key={tab.id}>
                <div
                  className={`${isOpen ? "scale-110" : "scale-100"} p-5 shadow-2xl rounded-2xl font-bold text-xl cursor-pointer transition-all duration-300 hover:scale-110`}
                  onClick={() => setIsActiveTab(isOpen ? null : tab.id)}
                >
                  {tab.title}
                </div>

                <div
                  className={[
                    "mt-2 shadow-2xl overflow-hidden transition-all duration-300 ease-out",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                  ].join(" ")}
                >
                  <div className="p-5">{tab.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </main>
  );
}

export default Faq;
