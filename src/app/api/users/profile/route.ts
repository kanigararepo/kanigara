import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../libs/prisma_global";
import { RequestHandler, ResponseType, ReturnResponse } from "../../../../../libs/response";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { User } from "@prisma/client";

const { JWT_SECRET }: any = process.env;

export async function GET() {
  const store = await cookies();
  const token = store.get("token");

  if (!token) {
    return ReturnResponse(403, "Mohon login terlebih dahulu", null);
  }

  try {
    const decoded = jwt.verify(token.value, JWT_SECRET) as User;

    const userData: any = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!userData) {
      return ReturnResponse(403, "Token tidak valid", null);
    }

    delete userData.password;

    return ReturnResponse(200, "Berhasil mendapatkan data profile", {
      user: userData,
      token,
    });
  } catch (e) {
    console.log(e);
    return ReturnResponse(403, "Token tidak valid", null);
  }
}
