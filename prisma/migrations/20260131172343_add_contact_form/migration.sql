/*
  Warnings:

  - You are about to drop the `contactForm` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "contactForm";

-- CreateTable
CREATE TABLE "ContactForm" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactForm_pkey" PRIMARY KEY ("id")
);
