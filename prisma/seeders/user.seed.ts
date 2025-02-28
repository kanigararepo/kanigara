import prisma from "../../libs/prisma_global";
import bcrypt from "bcrypt";

export default function UserSeeder() {
  return new Promise(async (resolve, reject) => {
    try {
      await prisma.user.create({
        data: {
          username: "admin",
          password: bcrypt.hashSync(`${process.env.ADMIN_PASS}`, 10),
        },
      });

      console.log("Berhasil membuat seeder user");
      resolve(true);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
}
