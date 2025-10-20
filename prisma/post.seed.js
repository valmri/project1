"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../src/generated/prisma");
const faker_1 = require("@faker-js/faker");
const prisma = new prisma_1.PrismaClient();
const NB_POSTS = 10;
async function main() {
    for (let i = 0; i < NB_POSTS; i++) {
        await prisma.post.create({
            data: {
                title: faker_1.faker.lorem.sentence(),
                content: faker_1.faker.lorem.paragraph(),
            },
        });
    }
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
