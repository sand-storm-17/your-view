-- CreateTable
CREATE TABLE "Coin" (
    "id" SERIAL NOT NULL,
    "coinName" TEXT NOT NULL,
    "numberOfCoinsMinted" INTEGER NOT NULL,
    "valueOfCoin" DOUBLE PRECISION NOT NULL,
    "minterId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Coin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YouTuber" (
    "id" SERIAL NOT NULL,
    "rank" INTEGER NOT NULL,
    "channelName" TEXT NOT NULL,
    "subscriberCount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YouTuber_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Coin" ADD CONSTRAINT "Coin_minterId_fkey" FOREIGN KEY ("minterId") REFERENCES "YouTuber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
