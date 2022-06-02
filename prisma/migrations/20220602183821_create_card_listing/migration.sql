-- CreateEnum
CREATE TYPE "Language" AS ENUM ('ENGLISH', 'PORTUGUESE', 'JAPANESE');

-- CreateTable
CREATE TABLE "CardListing" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "edition" TEXT NOT NULL,
    "language" "Language" NOT NULL,
    "foil" BOOLEAN NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "CardListing_pkey" PRIMARY KEY ("id")
);
