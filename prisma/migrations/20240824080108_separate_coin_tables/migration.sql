/*
  Warnings:

  - You are about to drop the `Coin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Coin" DROP CONSTRAINT "Coin_minterId_fkey";

-- DropForeignKey
ALTER TABLE "Coin" DROP CONSTRAINT "Coin_ownerId_fkey";

-- DropTable
DROP TABLE "Coin";

-- CreateTable
CREATE TABLE "UserCoin" (
    "id" SERIAL NOT NULL,
    "coinName" TEXT NOT NULL,
    "valueOfCoin" DOUBLE PRECISION NOT NULL,
    "ownerId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "UserCoin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutuberCoin" (
    "id" SERIAL NOT NULL,
    "coinName" TEXT NOT NULL,
    "numberOfCoinsMinted" INTEGER NOT NULL,
    "valueOfCoin" DOUBLE PRECISION NOT NULL,
    "mintAddress" TEXT,
    "freezeAuthority" TEXT,
    "associatedTokenAccount" TEXT,
    "minterId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "YoutuberCoin_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserCoin" ADD CONSTRAINT "UserCoin_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutuberCoin" ADD CONSTRAINT "YoutuberCoin_minterId_fkey" FOREIGN KEY ("minterId") REFERENCES "YouTuber"("id") ON DELETE SET NULL ON UPDATE CASCADE;
