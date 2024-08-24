-- DropForeignKey
ALTER TABLE "Coin" DROP CONSTRAINT "Coin_minterId_fkey";

-- AlterTable
ALTER TABLE "Coin" ADD COLUMN     "associatedTokenAccount" TEXT,
ADD COLUMN     "freezeAuthority" TEXT,
ADD COLUMN     "mintAddress" TEXT,
ADD COLUMN     "ownerId" INTEGER,
ALTER COLUMN "minterId" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "walletAddress" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Coin" ADD CONSTRAINT "Coin_minterId_fkey" FOREIGN KEY ("minterId") REFERENCES "YouTuber"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coin" ADD CONSTRAINT "Coin_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
