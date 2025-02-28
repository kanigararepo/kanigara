import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../libs/prisma_global";
import { RequestHandler, ResponseType, ReturnResponse } from "../../../../../libs/response";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const { JWT_SECRET }: any = process.env;

export async function POST(req: Request) {
  try {
    const store = await cookies();

    const { username, password } = await req.json();

    const user: any = await prisma.user.findUnique({ where: { username } });

    if (!user) {
      return ReturnResponse(401, "Username atau Password salah", null);
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      return ReturnResponse(401, "Username atau Password salah", null);
    }

    delete user.password;

    const token = jwt.sign(user, JWT_SECRET);

    // Set the cookie
    store.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 day
      path: "/",
    });

    return ReturnResponse(200, "Berhasil melakukan login", {
      user,
      token,
    });
  } catch (e) {
    let result;

    if (typeof e === "string") {
      result = e;
    } else if (e instanceof Error) {
      result = e.message;
    }

    return ReturnResponse(400, "Gagal melakukan login", result);
  }
}
