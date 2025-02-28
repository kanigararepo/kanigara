import { PrismaClient } from "@prisma/client";
import UserSeeder from "./user.seed";
import MaterialSeeder from "./material.seed";

const prisma = new PrismaClient();

// Hapus dan Buat ulang seeder
async function main() {
  await prisma.user.deleteMany();
  await prisma.material.deleteMany();

  await UserSeeder();
  await MaterialSeeder();
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
