import { prisma } from "@/app/lib/prisma";

//Products
export async function getAllProducts() {
  return prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    take: 12,
  });
}

export async function getFavoriteProducts() {
  return prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    where: { category: "Favorite" },
    take: 12,
  });
}

//Posts for blog
export async function getAllPosts() {
  return prisma.posts.findMany({
    orderBy: { createdAt: "desc" },
    take: 10,
  });
}
