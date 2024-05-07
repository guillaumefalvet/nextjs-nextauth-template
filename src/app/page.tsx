import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <>
      {session?.user?.name ? (
        <div>Welcome logged-in user</div>
      ) : (
        <div>Not logged in</div>
      )}
    </>
  );
}