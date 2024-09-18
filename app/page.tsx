'use client';
import LoginPage from "@/components/login/LoginPage";
import RegisterPage from "@/components/register/RegisterPage";
import { useSession, signIn, signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import { useRouter } from "next/navigation";
import LandingPage from '@/components/HomePage/Home'
export default function Home() {
  const { data: session, status } = useSession(); // Add status
  const router = useRouter();

  type SessionType = Session & {
    user: {
      name: string | null;
      email: string | null;
    };
  };

  // Ensure session is typed correctly
  const typedSession = session as SessionType;

  // Handle the loading state
  if (status === 'loading') {
    return <div>Loading...</div>; // Show a loading message or spinner while session is being fetched
  }

  if (typedSession) {
    return (
      <LandingPage/>
    );
  } else {
    router.push('/login'); // Redirect to login if no session
    return null; // Ensure you return null to avoid rendering the rest of the page
  }
}
