import { NextRequest, NextResponse } from "next/server";

export type ResponseType = {
  status: boolean;
  message: string;
  data: any;
};

export type RequestHandler = {
  req: NextRequest;
  res: NextResponse<ResponseType>;
};

export async function ReturnResponse(statusCode: number, message: string, data: any) {
  return NextResponse.json(
    {
      status: statusCode >= 400 ? false : true,
      message,
      data,
    },
    { status: statusCode }
  );
}
