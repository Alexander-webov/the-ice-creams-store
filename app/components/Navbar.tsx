import Link from "next/link";
import logo from "@/public/main-logo.png";
import iconCart from "@/public/icons/icon-cart.png";
import iconSearch from "@/public/icons/icon-search.png";
import Image from "next/image";
import Container from "./Container";
import ButtonLink from "./ui/ButtonLink";

function Navbar() {
  return (
    <Container>
      <nav className="flex justify-between items-center pt-5">
        <Link href="/">
          <Image
            src={logo}
            alt="icecreame"
            width={172}
            className="w-[172px] h-[70px]"
          />
        </Link>
        <ul className="flex justify-between items-center gap-x-14">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Faq</Link>
          </li>
          <ul className="flex gap-x-7">
            <li>
              <Image src={iconSearch} alt="-" width={20} />
            </li>
            <li className="relative">
              <Image src={iconCart} alt="-" width={20} />
              <span className="absolute -bottom-1.5 -right-2 w-5 h-5 bg-[#683292] rounded-full flex items-center justify-center text-xs text-white">
                0
              </span>
            </li>
          </ul>
          <li>
            <ButtonLink link="contact" text="Contact Us" />
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Navbar;
