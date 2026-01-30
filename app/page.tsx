import Image from "next/image";
import { Berkshire_Swash } from "next/font/google";
import { getFavoriteProducts } from "./utils/actions";

//components
import ButtonLink from "./components/ui/ButtonLink";
import Container from "./components/Container";
import SlderFavoritesItems from "./components/slider/SlderFavoritesItems";

//Images
import bannerAD from "@/public/banner-deal-main-page.png";
import icecreameMainImage from "@/public/icecreame-main-page.png";
import reliveImage from "@/public/relive-image.png";
import sectionInstagramImg1 from "@/public/section-instagram/follow-image1.jpg.png";
import sectionInstagramImg2 from "@/public/section-instagram/follow-image2.jpg.png";
import sectionInstagramImg3 from "@/public/section-instagram/follow-image3.jpg.png";
import sectionInstagramImg4 from "@/public/section-instagram/follow-image4.jpg.png";
import sectionInstagramImg5 from "@/public/section-instagram/follow-image5.jpg.png";

const berkshireSwash = Berkshire_Swash({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default async function Home() {
  const items = await getFavoriteProducts();
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
              <Image src={reliveImage} alt="icecreame" width={619} />
            </div>
            <div className="max-w-[590px] w-full">
              <h2
                className={`${berkshireSwash.className} text-[60px] leading-none mt-7`}
              >
                Relive the Sweet Memories of Classic
                <span className="text-[#F83D8E]"> Ice Creams</span>
              </h2>
              <p className="mt-5 max-w-[400px]">
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
      <section className="bg-section2 bg-cover bg-center bg-repeat w-full py-32">
        <Container>
          <div className="text-center mb-16">
            <h2
              className={`${berkshireSwash.className} text-[60px] leading-none mt-7`}
            >
              Our
              <span className="text-[#F83D8E]"> Classic</span>
              Favorites
            </h2>
            <p className="">
              Check out our top products that our customers love.
            </p>
          </div>
          <div>
            <SlderFavoritesItems items={items} />
          </div>
        </Container>
      </section>
      <section className="my-auto w-full">
        <Image
          className="object-cover w-full"
          src={bannerAD}
          alt="great deal"
        />
      </section>

      <section className="bg-section-instagram bg-cover bg-center bg-repeat w-full py-20">
        <Container>
          <div className="mt-32 text-center">
            <h2
              className={`${berkshireSwash.className} text-[60px] leading-none mt-7`}
            >
              Follow Us on <span className="text-[#F83D8E]"> Instagram</span>
            </h2>
            <p className="text-xl mt-5 text-gray-500">
              Join our Instagram community for updates, special deals, and more!
            </p>
          </div>
          <div className="mt-12 flex justify-between gap-2 ">
            <Image
              src={sectionInstagramImg1}
              alt="Instagram"
              width={245}
              height={316}
              className="w-[245px] object-cover"
            />
            <Image
              src={sectionInstagramImg2}
              alt="Instagram"
              width={245}
              height={326}
              className="w-[245px] object-cover"
            />
            <Image
              src={sectionInstagramImg3}
              alt="Instagram"
              width={245}
              height={326}
              className="w-[245px] object-cover"
            />
            <Image
              src={sectionInstagramImg4}
              alt="Instagram"
              width={245}
              height={326}
              className="w-[245px] object-cover"
            />
            <Image
              src={sectionInstagramImg5}
              alt="Instagram"
              width={245}
              height={326}
              className="w-[245px] object-cover"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
