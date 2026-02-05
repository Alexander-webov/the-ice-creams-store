"use client";
import Image from "next/image";
import Container from "../components/Container";
import TitleSection from "../components/ui/TitleSection";
import { useCart } from "../store/cart";

//images
import iconDelete from "@/public/icons/icon-delete.png";
import ButtonLink from "../components/ui/ButtonLink";

function Cart() {
  const items = useCart((s) => s.items);
  const totalItems = items.reduce((acc, item) => acc + item.qty, 0);
  const subTotalPrice = items.reduce(
    (acc, item) => item.price * item.qty + acc,
    0,
  );
  const shippingPrice = 9.99;

  return (
    <main>
      <TitleSection titlePage="Shopping Cart" />
      <Container>
        <div className="flex justify-center gap-x-20 my-40 ">
          <div className="flex-1 max-w-[730px] w-full shadow-2xl p-5 rounded-2xl">
            <div className="flex justify-between font-bold mb-5 ">
              <div className="">Shopping Cart</div>
              <div className="">({totalItems} Items)</div>
            </div>
            <div className="border-t border-b py-5 flex text-gray-500">
              <div className="max-w-[300px] w-full">Product Details</div>
              <div className="max-w-[120px] w-full">Price</div>
              <div className="max-w-[120px] w-full">Quantity</div>
              <div className="max-w-[100px] w-full">Total</div>
            </div>
            {items.length > 0 ? (
              items.map((item) => (
                <div
                  key={item.id}
                  className=" flex font-bold items-center border-b border-gray-200 py-5 "
                >
                  <div className="max-w-[300px] w-full flex">
                    <div className="flex flex-col  items-center">
                      <h3 className="text-gray-600">{item.title}</h3>
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={150}
                        height={100}
                        className="rounded-full mt-3"
                      />
                    </div>
                  </div>
                  <div className="max-w-[120px] w-full text-[#F83D8E]">
                    ${item.price}
                  </div>
                  <div className="max-w-[120px] w-full text-gray-600">
                    {item.qty}
                  </div>
                  <div className="max-w-[100px] w-full text-gray-600">
                    ${item.price * item.qty}
                  </div>
                  <div className="max-w-[37px] w-full">
                    <Image
                      src={iconDelete}
                      alt="delete"
                      width={37}
                      height={37}
                      className="w-[37px] h-[37px]"
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="max-w-[300px] w-full text-4xl mt-10">
                Cart is empty
              </div>
            )}
          </div>
          {items.length > 0 && (
            <div className="w-[320px] h-full shadow-2xl p-5 rounded-2xl">
              <div className="font-bold border-b border-gray-200 py-5 text-center text-xl">
                Order Summary
              </div>
              <div className="border-b border-gray-200 py-5">
                <div className="font-bold my-5">Product Details:</div>
                <div className="mt-3 flex justify-between">
                  <div className="">Sub Total</div>
                  <div className="">${subTotalPrice}</div>
                </div>
                <div className="mt-3 flex justify-between">
                  <div className="">Shipping</div>
                  <div className="">$9.99</div>
                </div>
              </div>
              <div className="border-b border-gray-200 py-5">
                <div className="mt-3 flex justify-between">
                  <div className="">Grand Total</div>
                  <div className="text-[#F83D8E]">
                    ${(Number(subTotalPrice) + shippingPrice).toFixed(2)}
                  </div>
                </div>
                <div className="my-5 text-center">
                  <ButtonLink text="Proceed to checkout" link="/" />
                </div>
              </div>
              <div className="text-gray-400 py-5 text-sm">
                <p>
                  Safe and Secure Payments, Easy Returns. 100% Authentic
                  Products
                </p>
              </div>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}

export default Cart;
