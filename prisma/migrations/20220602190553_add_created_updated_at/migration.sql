/*
  Warnings:

  - You are about to drop the `CardListing` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CardListing";

-- CreateTable
CREATE TABLE "cardlistings" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "edition" TEXT NOT NULL,
    "language" "Language" NOT NULL,
    "foil" BOOLEAN NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cardlistings_pkey" PRIMARY KEY ("id")
);
