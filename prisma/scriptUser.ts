import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data:{
            walletAddress: "ABvenDDVUjZAspNsMrQvgU8xnBQgMaLJTeR4TQ2FuJYn",
            email:"xyz@gmail.com",
        }
    });

    const ownedCoin = await prisma.userCoin.create({
        data:{
            coinName: "mrb",
            valueOfCoin: 1.0,
            ownerId: user.id,
        }
    });

    console.log('User created:', user);
    console.log('Coin owned:', ownedCoin);

    const coinsBoughtByUser = await prisma.user.findUnique({
        where: { id: user.id },
        include: { coinsOwned: true }
    });

    console.log('User with coins:', coinsBoughtByUser);
}

main()
.catch(e => { console.error(e.message); })
.finally(async () => { await prisma.$disconnect(); });