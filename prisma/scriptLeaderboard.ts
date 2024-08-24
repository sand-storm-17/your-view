import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {

    const youtuber = await prisma.youTuber.create({
        data: {
            channelName: "any",
            rank:1,
            subscriberCount: 2100000,
        }
    });


    const mintedCoin = await prisma.youtuberCoin.create({
        data: {
            coinName: "any",
            numberOfCoinsMinted: 1000,
            valueOfCoin: 1.0,
            minterId: youtuber.id
        }
    });


    console.log('YouTuber created:', youtuber);
    console.log('Coin minted:', mintedCoin);

    const youtuberWithCoins = await prisma.youTuber.findUnique({
        where: { id: youtuber.id },
        include: { coinsMinted: true }
    });

    console.log('YouTuber with coins:', youtuberWithCoins);
}

main()
.catch(e => { console.error(e.message); })
.finally(async () => { await prisma.$disconnect(); });



