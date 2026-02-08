import TitleSection from "../components/ui/TitleSection";
import Container from "../components/Container";
import { getAllProducts } from "../utils/actions";
import Image from "next/image";
import ButtonAddToCart from "../components/ui/ButtonAddToCart";
import Link from "next/link";

//Images
import iconStart from "@/public/icons/start.png";
import SearchItem from "../components/ui/SearchItem";

async function Shop(props: {
  searchParams: Promise<{ page?: string; value?: string }>;
}) {
  const pageSize = 6;

  const searchParams = await props.searchParams;
  const pageFromUrl = Number(searchParams.page ?? "1");
  const searchValueFromUrl = searchParams.value ?? "";

  const safePage =
    Number.isFinite(pageFromUrl) && pageFromUrl > 0 ? pageFromUrl : 1;

  const pageIndex = safePage - 1;
  const productsPlusOne = await getAllProducts(
    pageIndex,
    pageSize + 1,
    searchValueFromUrl,
  );

  const hasNext = productsPlusOne.length > pageSize;

  const products = hasNext
    ? productsPlusOne.slice(0, pageSize)
    : productsPlusOne;

  const hasPrev = safePage > 1;

  return (
    <main>
      <TitleSection titlePage="Shop" />
      <Container>
        <div className="my-20  max-w-[900px] w-full mx-auto">
          <SearchItem />

          <ul className="flex flex-wrap mt-20 gap-10 justify-center  ">
            {products.map((item) => {
              return (
                <li
                  key={item.id}
                  className="max-w-[250px] rounded-2xl bg-white p-4 flex flex-col justify-between min-h-[480px]  h-full shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-out"
                >
                  <div className="flex justify-center">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={240}
                      height={245}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between mt-3 font-bold items-start mb-3 min">
                    <h2 className="max-w-[150px]">{item.title}</h2>
                    <div className="flex items-center gap-1">
                      <Image
                        src={iconStart}
                        alt={"start"}
                        width={13}
                        height={13}
                        className="w-[13px] h-[13px]"
                      />
                      {item.rating}
                    </div>
                  </div>
                  <h3 className=" text-[#646464] mb-3">{item.description}</h3>
                  <div className="flex justify-between items-center">
                    <div className="text-[#F83D8E] font-bold text-2xl ">
                      ${item.price.toFixed(2)}
                    </div>
                    <ButtonAddToCart item={item} />
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mx-auto mt-20  flex gap-x-10 justify-center text-xl">
            {hasPrev ? (
              <Link scroll={false} href={`/shop?page=${safePage - 1}`}>
                {"<"} Prev{" "}
              </Link>
            ) : (
              <span className="text-gray-200">{"<"} Prev</span>
            )}
            {hasNext ? (
              <Link scroll={false} href={`/shop?page=${safePage + 1}`}>
                Next {">"}
              </Link>
            ) : (
              <span className="text-gray-200">Next {">"}</span>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}

export default Shop;
