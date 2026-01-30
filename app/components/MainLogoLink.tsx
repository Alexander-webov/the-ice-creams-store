import Link from "next/link";
import logo from "@/public/main-logo.png";
import Image from "next/image";

function MainLogoLink() {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="icecreame"
        className="w-[172px] h-[70px]"
        width={172}
      />
    </Link>
  );
}

export default MainLogoLink;
