-- CreateTable
CREATE TABLE "Posts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "whoPostetd" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);
