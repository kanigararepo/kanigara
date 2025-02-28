import { cookies } from "next/headers";
import { ReturnResponse } from "../../../../../libs/response";

export async function POST() {
  try {
    const store = await cookies();

    store.delete("token");

    return ReturnResponse(200, "Berhasil melakukan logout", null);
  } catch (e) {
    return ReturnResponse(400, "Berhasil melakukan logout", e);
  }
}
