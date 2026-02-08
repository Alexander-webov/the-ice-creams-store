import { prisma } from "@/app/lib/prisma";
import { redirect } from "next/navigation";

//Products
export async function getAllProducts(page: number, pageSize: number) {
  return prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    skip: page * pageSize,
    take: pageSize,
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

// CONTACT FORM
export async function createContactFormData(formData: FormData) {
  "use server";
  const firstName = formData.get("firstName") as string | null;
  const lastName = formData.get("lastName") as string | null;
  const email = formData.get("email") as string | null;
  const phone = formData.get("phone") as string | null;
  const message = formData.get("message") as string | null;
  if (!firstName || !lastName || !phone || !email || !message) {
    redirect("/contact?error=missing-fields");
  }
  await prisma.contactForm.create({
    data: { firstName, lastName, email, phone, message },
  });
  redirect("/contact?success=1");
}
