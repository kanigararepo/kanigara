import { NextRequest, NextResponse } from "next/server";
import { ReturnResponse } from "../../../../libs/response";
import prisma from "../../../../libs/prisma_global";
import { v2 as cloudinary } from "cloudinary";

const items = [{ id: 1, name: "Item 1" }];
// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(req: NextRequest) {
  try {
    const params = req.nextUrl.searchParams;

    const page: any = params.get("page") ? (params.get("page") == "all" ? "all" : Number(params.get("page"))) : 1;
    const size = 10;

    if (page == "all") {
      const materials = await prisma.material.findMany({
        orderBy: {
          createdAt: "asc",
        },
      });

      return ReturnResponse(200, "Berhasil mendapatkan data", materials);
    }

    const [datas, totalItems] = await Promise.all([
      prisma.material.findMany({
        orderBy: {
          createdAt: "asc",
        },
        skip: (page - 1) * size,
        take: size,
      }),
      prisma.material.count({}),
    ]);

    const totalPages = Math.ceil(totalItems / size);

    return ReturnResponse(200, "Berhasil mendapatkan data", {
      materials: datas,
      page: page,
      total_page: totalPages,
    });
  } catch (e) {
    let result;

    if (typeof e === "string") {
      result = e;
    } else if (e instanceof Error) {
      result = e.message;
    }

    return ReturnResponse(400, "Gagal mendapatkan data", result);
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming FormData
    const formData: any = await request.formData();

    const name = formData.get("name");
    const idDescription = formData.get("idDescription");
    const enDescription = formData.get("enDescription");
    const imageFile = formData.get("image");

    // Validate required fields
    if (!name || !idDescription || !enDescription || !imageFile) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Upload image to Cloudinary
    const imageBuffer = await imageFile.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString("base64");
    const dataURI = `data:${imageFile.type};base64,${base64Image}`;

    const uploadResult: any = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        dataURI,
        {
          folder: "materials",
          resource_type: "image",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
    });

    // Create material in database
    const material = await prisma.material.create({
      data: {
        name,
        idDescription,
        enDescription,
        image: uploadResult.secure_url, // Store Cloudinary URL
      },
    });

    return ReturnResponse(201, "Berhasil membuat data", material);
  } catch (error) {
    console.error("Error creating material:", error);
    return ReturnResponse(400, "Gagal membuat data", null);
  }
}
