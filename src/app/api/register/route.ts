import { prisma } from '@/lib/db';
import * as bcrypt from "bcrypt";
import StatusCode from 'status-code-enum';
interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  // can also do check on useSession
  const userExists = await prisma.user.findFirst({
    where: {
      email: body.email.toLowerCase(),
    },
  });
  // if the user already exists, return an error
  if (userExists) {
    return new Response(
      JSON.stringify({
        error: "user already exists",
      }),
      {
        status: StatusCode.ClientErrorBadRequest,
      }
    );
  }
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email.toLowerCase(),
      password: await bcrypt.hash(body.password, 10),
    },
  });

  const { password, ...result } = user;
  return new Response(
    JSON.stringify(result), {
    status: StatusCode.SuccessCreated});
}
