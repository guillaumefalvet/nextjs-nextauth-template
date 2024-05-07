"use client";
import Link from "next/link";
import Image from 'next/image'
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700";
const INACTIVE_ROUTE = "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div className="flex items-center">
          <span className=" mr-2">{session?.user?.name}</span>
        {session?.user?.image && <Image  className="rounded-full" src={session?.user?.image} alt={`image of ${session?.user?.name}`} width={60} height={60}/>}</div>
        <button className=" my-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <button
      onClick={() => signIn()}
      className=" my-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      Sign in
    </button>
  );


}

export default function NavMenu() {
  const pathname = usePathname();
  return (
    <div>
      <AuthButton />
      <hr className="my-4" />
      <ul>
        <Link href="/">
          <li className={pathname === "/" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
            Home
          </li>
        </Link>
        <Link href="/protected">
          <li
            className={
              pathname === "/protected" ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            Protected Route
          </li>
        </Link>
      </ul>
    </div>
  );
}