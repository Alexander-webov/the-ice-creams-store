import Image from "next/image";
import arrowBtn from "@/public/icons/arrow-btn.svg";
import Link from "next/link";

function ButtonLink({ text, link }: { text: string; link: string }) {
  return (
    <Link
      href={link}
      className="inline-block bg-[#F83D8E] shadow-xl  text-white py-3 px-8 font-bold rounded-4xl hover:shadow-2xl"
    >
      <div className="flex items-center">
        {text}
        <span className="ml-4">
          <Image src={arrowBtn} alt="-" width={10} />
        </span>
      </div>
    </Link>
  );
}

export default ButtonLink;
