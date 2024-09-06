'use client'
import LoginPage from "@/components/login/LoginPage";
import { useSession, signIn, signOut } from 'next-auth/react';
import { Session } from 'next-auth';

export default function Home() {
  const { data: session } = useSession();
  type SessionType = Session & {
        user: {
          name: string | null;
          email: string | null;
        };
      };
    
      // Ensure session is typed correctly
      const typedSession = session as SessionType;
    
      if (typedSession) {
        return (
          <div className="mt-[20vh]">
            Signed in as {typedSession.user.name} <br />
            Email: {typedSession.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        );
      }
    
  return (
    <div>
      <LoginPage/>
    </div>
  );
}
