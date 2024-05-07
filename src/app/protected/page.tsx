'use client'
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
export default function Component() {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return <p>Signed in as {session?.user?.email}</p>
  }

  return redirect("/api/auth/signin");
}