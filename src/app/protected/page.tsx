'use client'
import { useSession } from "next-auth/react";
export default function Component() {
  const { data: session } = useSession()
  return <p>Signed in as {session?.user?.email}</p>
}