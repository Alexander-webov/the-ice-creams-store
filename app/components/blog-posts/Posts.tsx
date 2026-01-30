import { getAllPosts } from "@/app/utils/actions";
import Image from "next/image";
import Link from "next/link";

async function Posts() {
  const posts = await getAllPosts();
  console.log(posts);
  return (
    <div className="flex gap-x-6 gap-y-15 flex-wrap justify-center">
      {posts?.map((post) => (
        <div
          key={post.id}
          className="max-w-[540px] w-full h-[517px]  shadow-2xl rounded-3xl"
        >
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={540}
            height={285}
            className="w-full"
          />
          <div className="p-5 flex flex-col h-[220px] justify-between">
            <div className="flex justify-between text-[#F83D8E]">
              <div className="">Posted by {post.whoPostetd}</div>
              <div className=""> {post.createdAt.toLocaleDateString()}</div>
            </div>
            <div>
              <h2 className="text-2xl font-bold ">{post.title}</h2>
              <p className="mt-1 text-gray-400">{post.description}</p>
            </div>
            <Link href={`/blog/${post.id}`} className=" block">
              Read More
              <span className="block bg-[#0F0200] w-5 h-1"></span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
