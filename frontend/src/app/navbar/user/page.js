import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/auth'; // Ensure this path is correct
import User from '@/Components/Header/Navbar/User/User';
import Image from 'next/image';
import { redirect } from 'next/navigation';

const UserPage = async () => {
  // Fetch session using getServerSession
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/navbar/signup");
  }

  return (
    <div>
      <h1 className="text-3xl">User: {session.user.name}</h1>
      <Image src={session.user.image} alt="user" width={100} height={100} className="rounded-full" />
      <User />
    </div>
  );
};

export default UserPage;
