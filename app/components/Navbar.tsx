"use client";
import Link from "next/link";
import iconCart from "@/public/icons/icon-cart.png";
import iconSearch from "@/public/icons/icon-search.png";
import Image from "next/image";
import Container from "./Container";
import ButtonLink from "./ui/ButtonLink";
import { useCart } from "../store/cart";
import MainLogoLink from "./MainLogoLink";

function Navbar() {
  const totalQtyCart = useCart((state) => state.totalQty());
  const hydrated = useCart((state) => state.hydrated);

  return (
    <div className="">
      <Container>
        <nav className="flex justify-between items-center pb-5">
          <MainLogoLink />
          <ul className="flex justify-between items-center gap-x-14 ">
            <li>
              <Link className="hover:text-[#F83D8E]" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#F83D8E]" href="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#F83D8E]" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#F83D8E]" href="/faq">
                Faq
              </Link>
            </li>
            <ul className="flex gap-x-7 ">
              {/*               <li>
                <Image
                  src={iconSearch}
                  alt="-"
                  width={20}
                  className="cursor-pointer"
                />
              </li> */}
              <li className="relative">
                <Link href="/cart">
                  <Image src={iconCart} alt="-" width={20} />
                  <span className="absolute -bottom-1.5 -right-2 w-5 h-5 bg-[#683292] rounded-full flex items-center justify-center text-xs text-white">
                    {hydrated ? totalQtyCart : 0}
                  </span>
                </Link>
              </li>
            </ul>
            <li>
              <ButtonLink link="contact" text="Contact Us" />
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}

export default Navbar;
