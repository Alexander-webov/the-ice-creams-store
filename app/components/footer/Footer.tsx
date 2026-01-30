import MainLogoLink from "../MainLogoLink";
import Container from "../Container";
import Link from "next/link";
//IMAGES
import iconPhone from "@/public/icon-phone.png";
import iconAddress from "@/public/icons/icon-address.png";
import iconEmail from "@/public/icons/icon-email.png";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-footer bg-cover bg-center bg-repeat w-full py-20 ">
      <Container>
        <div className="flex justify-between items-center text-white">
          <div className="">
            <MainLogoLink />
          </div>
          <div>
            <p className="text-xl"> Navigation</p>
            <ul className="flex flex-wrap max-w-[180px] gap-x-15 gap-y-5 mt-10 text-[#CFB6E2]">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Shop</Link>
              </li>
              <li>
                <Link href="/">Prodects</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="text-lg">
            <div className="flex items-center">
              <Image
                src={iconAddress}
                alt="phone"
                width={46}
                height={46}
                className="w-[46px] h-[46px] mr-5"
              />
              <div>
                <p>Address:</p>
                <h5>121 King Street Melbourne, 3000, Australia</h5>
              </div>
            </div>
            <div className="mt-8 flex items-center">
              <Image
                src={iconEmail}
                alt="phone"
                width={46}
                height={46}
                className="w-[46px] h-[46px] mr-5"
              />
              <div>
                <p>Email:</p>
                <h5>icecreame-support@icecreame.com</h5>
              </div>
            </div>
          </div>
          <div className="flex items-center ">
            <Image
              src={iconPhone}
              alt="phone"
              width={30}
              height={30}
              className="w-[30px] h-[30px] mr-5"
            />
            <div>
              <span className="font-bold text-2xl mb-1">+19291234567</span>
              <p>Got Questions? Call us 24/7</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
