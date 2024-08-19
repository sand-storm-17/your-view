import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {

    const youtuber = await prisma.youTuber.create({
        data: {
            channelName: "pewdiepie",
            rank:1,
            subscriberCount: 110000,
        }
    });


    const coin = await prisma.coin.create({
        data: {
            coinName: "pew",
            numberOfCoinsMinted: 1000,
            valueOfCoin: 1.0,
            minterId: youtuber.id
        }
    });


    console.log('YouTuber created:', youtuber);
    console.log('Coin created:', coin);

    const youtuberWithCoins = await prisma.youTuber.findUnique({
        where: { id: youtuber.id },
        include: { coins: true }
    });

    console.log('YouTuber with coins:', youtuberWithCoins);
}

main()
.catch(e => { console.error(e.message); })
.finally(async () => { await prisma.$disconnect(); });



