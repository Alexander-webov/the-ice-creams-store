import Image from "next/image";
import ButtonLink from "./components/ui/ButtonLink";
import icecreameMainImage from "@/public/icecreame-main-page.png";
import reliveImage from "@/public/relive-image.png";
import Container from "./components/Container";

import { Berkshire_Swash } from "next/font/google";

const berkshireSwash = Berkshire_Swash({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <header className="bg-main bg-cover bg-center bg-no-repeat -mt-25 pb-20">
        <Container>
          <div className="flex pt-40 items-center">
            <div>
              <div className="flex items center">
                <span className="mr-5 h-px w-10 bg-black inline-block my-auto"></span>
                <span
                  className={`${berkshireSwash.className} text-[40px] leading-none`}
                >
                  Welcome to The
                </span>
              </div>
              <h1
                className={`${berkshireSwash.className} text-[112px] leading-none mt-7`}
              >
                Discover <span className="text-[#F83D8E]">Sweet</span> Delights!
              </h1>
              <p className="mt-5 max-w-lg">
                Relish the timeless taste of handcrafted ice cream, made with
                passion and the finest ingredients.
              </p>
              <div className="mt-10">
                <ButtonLink link="/" text="Browse Our Classic Flavors" />
              </div>
            </div>
            <div>
              <Image src={icecreameMainImage} alt="icecreame" />
            </div>
          </div>
        </Container>
      </header>
      <div className="bg-wave relative bottom-10  bg-coverbg-center bg-repeat w-full h-[125px] z-100"></div>
      <section>
        <Container>
          <div className="flex items-center justify-between">
            <div className="pr-20">
              <Image
                src={reliveImage}
                alt="icecreame"
                width={619}
                className="max-w-[619px] w-full"
              />
            </div>
            <div className="max-w-[500px] w-full">
              <h1
                className={`${berkshireSwash.className} text-[60px] leading-none mt-7`}
              >
                Relive the Sweet Memories of Classic
                <span className="text-[#F83D8E]">Ice Creams</span>
              </h1>
              <p className="mt-5 max-w-lg">
                From rich chocolate fudge to creamy vanilla sundaes, discover
                our menu of classic ice cream creations.
              </p>
              <div className="mt-10">
                <ButtonLink link="/" text="Explore Our Menu" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
