import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function ProtectedRoute() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  return (
    <div>
      <p>This is a protected route.</p>
      <br />
      <p>You will only see this if you are authenticated.</p>
    </div>
  );
}