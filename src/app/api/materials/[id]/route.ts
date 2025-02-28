import { NextRequest, NextResponse } from "next/server";
import { ReturnResponse } from "../../../../../libs/response";
import prisma from "../../../../../libs/prisma_global";
import { Params } from "next/dist/server/request/params";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = await params;

    const material = await prisma.material.findUnique({ where: { id: id } });

    if (!material) {
      return ReturnResponse(404, "Data tidak ditemukan", null);
    }

    await prisma.material.delete({ where: { id: id } });

    return ReturnResponse(200, "Berhasil menghapus data", null);
  } catch (e) {
    let result;

    if (typeof e === "string") {
      result = e;
    } else if (e instanceof Error) {
      result = e.message;
    }

    return ReturnResponse(400, "Gagal menghapus data", result);
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id: materialId } = await params;

    // Check if material exists
    const existingMaterial = await prisma.material.findUnique({
      where: { id: materialId },
    });

    if (!existingMaterial) {
      return ReturnResponse(404, "Material tidak ditemukan", null);
    }

    // Parse the incoming FormData
    const formData: any = await request.formData();

    const name = formData.get("name");
    const idDescription = formData.get("idDescription");
    const enDescription = formData.get("enDescription");
    const imageFile = formData.get("image");

    // Prepare data object with provided values or existing values
    const updateData: any = {
      name: name || existingMaterial.name,
      idDescription: idDescription || existingMaterial.idDescription,
      enDescription: enDescription || existingMaterial.enDescription,
      // Image will be updated below if a new one is provided
    };

    // Handle image update if a new image was provided
    if (imageFile && imageFile.size > 0) {
      // Extract public_id from existing cloud URL if it exists
      let oldPublicId = null;
      if (existingMaterial.image && typeof existingMaterial.image === "string") {
        const urlParts = existingMaterial.image.split("/");
        const filenamePart = urlParts[urlParts.length - 1];
        const publicIdPart = filenamePart.split(".")[0];
        if (urlParts.includes("materials")) {
          oldPublicId = `materials/${publicIdPart}`;
        }
      }

      // Upload new image to cloud
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
          (error: any, result: any) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
      });

      // Add new image URL to update data
      updateData.image = uploadResult.secure_url;

      // Delete old image if it exists
      if (oldPublicId) {
        try {
          await new Promise((resolve, reject) => {
            cloudinary.uploader.destroy(oldPublicId, (error: any, result: any) => {
              if (error) reject(error);
              else resolve(result);
            });
          });
        } catch (deleteError) {
          console.error("Error deleting old image:", deleteError);
          // Continue with update even if image deletion fails
        }
      }
    }

    // Update material in database
    const updatedMaterial = await prisma.material.update({
      where: { id: materialId },
      data: updateData,
    });

    return ReturnResponse(200, "Berhasil memperbarui data", updatedMaterial);
  } catch (error) {
    console.error("Error updating material:", error);
    return ReturnResponse(400, "Gagal memperbarui data", null);
  }
}
