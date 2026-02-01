import Container from "@/app/components/Container";
import ButtonAddToCart from "@/app/components/ui/ButtonAddToCart";
import { prisma } from "@/app/lib/prisma";
import { getFavoriteProducts } from "@/app/utils/actions";
import Image from "next/image";
import iconStart from "@/public/icons/start.png";
import NotFoundPage from "./NotFoundPage";

async function Post({ params }: { params: Promise<{ id: string }> }) {
  //Products for AD
  const items = await getFavoriteProducts();
  console.log(items);
  //Get SINGLE post
  const { id } = await params;
  const post = await prisma.posts.findUnique({ where: { id: id } });

  if (!post) return <NotFoundPage />;
  return (
    <main className="mb-20">
      <Container>
        <div className="flex justify-between mt-20 ">
          <div className="flex-1 mr-16 shadow-2xl  rounded-2xl h-full pb-10">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={540}
              height={285}
              className="w-full "
            />
            <div className="flex justify-between text-[#F83D8E] px-5 mt-5 font-bold text-lg ">
              <div className="">Posted by {post.whoPostetd}</div>
              <div className=""> {post.createdAt.toLocaleDateString()}</div>
            </div>
            <p className="p-5 mt-5 text-xl">{post.content}</p>
          </div>
          <aside className="w-1/3 ">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl  p-5 flex flex-col mb-5 justify-between shadow-2xl"
              >
                <div className="flex justify-center">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={200}
                    height={215}
                    className="w-50"
                  />
                </div>
                <div className="flex justify-between mt-3 font-bold items-start mb-3 ">
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
              </div>
            ))}
          </aside>
        </div>
      </Container>
    </main>
  );
}

export default Post;
