
import { NextResponse } from 'next/server';
import StatusCode from 'status-code-enum';
import { getServerSession } from "next-auth";
export async function GET(){
  const session = await getServerSession()
  if (!session || !session.user) {
    return NextResponse.json(
      {
        message: `unauthorized access!`,
      },
      {
        status: StatusCode.ClientErrorUnauthorized
      }
    );
  }
  return NextResponse.json(
    {
      message: `Welcome ${session.user.email}!`,
    },
    {
      status: StatusCode.SuccessOK
    }
  );
}