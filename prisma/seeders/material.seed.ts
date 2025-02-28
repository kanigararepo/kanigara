import prisma from "../../libs/prisma_global";
import bcrypt from "bcrypt";

export default function MaterialSeeder() {
  return new Promise(async (resolve, reject) => {
    try {
      await prisma.material.createMany({
        data: [
          {
            name: "Material",
            idDescription: "Kanigara Nurseries menyediakan produk penunjang dalam satu paket belanja, dengan berbagai kualitas dan ukuran sesuai kebutuhan klien.",
            enDescription: "Kanigara Nurseries provides supporting products in one shopping package, with various qualities and sizes according to client needs.",
            image: "https://res.cloudinary.com/dczhkegti/image/upload/v1740472491/materials/n4hhaolaxe0xfxzpqfm6.png",
          },
          {
            name: "Aneka Tanaman",
            idDescription: "Kanigara Nurseries mengklasifikasikan tanaman berdasarkan kualitas, bentuk, dan karakter, sehingga setiap jenis memiliki spesifikasi beragam sesuai kebutuhan klien.",
            enDescription: "Kanigara Nurseries classifies plants based on quality, shape and character, so that each type has various specifications according to client needs.",
            image: "https://res.cloudinary.com/dczhkegti/image/upload/v1740763735/materials/r0ullv2hxl6su9b5nwkn.png",
          },
          {
            name: "Media Tanam",
            idDescription: "Penggunaan media tanam membutuhkan komposisi yang ideal agar mendapatkan hasil yang dinginkan. Kanigara Nurseries menyesuaikan setiap kebutuhan berdasarkan kondisi di lapangan.",
            enDescription: "The use of planting media requires an ideal composition to get the desired results. Kanigara Nurseries adapts to every need based on conditions in the field.",
            image: "https://res.cloudinary.com/dczhkegti/image/upload/v1740763699/materials/gcp5o99ytylfoskp7lju.png",
          },
        ],
      });

      console.log("Berhasil membuat seeder user");
      resolve(true);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
}
