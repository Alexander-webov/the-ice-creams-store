"use client";
import { useCart } from "@/app/store/cart";

import Image from "next/image";

import iconAddToCart from "@/public/icons/add-cart.png";
function ButtonAddToCart({
  item,
}: {
  item: { id: string; title: string; price: number; imageUrl: string };
}) {
  const addToCart = useCart((state) => state.add);
  return (
    <button
      onClick={() => addToCart(item)}
      className="w-[46px] h-[46px] rounded-full border-0 bg-[#683292] flex justify-center items-center cursor-pointer"
    >
      <Image
        src={iconAddToCart}
        alt={"start"}
        width={24}
        height={22}
        className="w-6 h-[22px]"
      />
    </button>
  );
}

export default ButtonAddToCart;
