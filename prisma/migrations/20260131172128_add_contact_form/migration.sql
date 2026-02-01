/*
  Warnings:

  - You are about to drop the `Contact_Form` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Contact_Form";

-- CreateTable
CREATE TABLE "contactForm" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contactForm_pkey" PRIMARY KEY ("id")
);
