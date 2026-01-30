"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../Container";
import { Berkshire_Swash } from "next/font/google";

const berkshireSwash = Berkshire_Swash({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

function TitleSection({ titlePage }: { titlePage: string }) {
  const namePage = usePathname();

  return (
    <div className="bg-title-section h-[460px] text-center ">
      <Container>
        <h1 className={`${berkshireSwash.className} pt-20 pb-8 text-8xl`}>
          {titlePage}
        </h1>
        <div className="px-10 py-3 bg-white inline-block rounded-4xl text-xl">
          <Link className="text-[#F83D8E]" href="/">
            Home
          </Link>
          <span> {namePage}</span>
        </div>
      </Container>
    </div>
  );
}

export default TitleSection;
