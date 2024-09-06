'use client'
import LoginPage from "@/components/login/LoginPage";
import RegisterPage from "@/components/register/RegisterPage";
import { useSession, signIn, signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import { useRouter } from "next/navigation";
export default function Home() {
  const { data: session } = useSession();
  const router =useRouter();
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
            Signed in as {typedSession?.user.name} <br />
            Email: {typedSession?.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        );
      }
      else{
        router.push('/login')
      }
    
  // return (
  //   <div>
  //     <LoginPage/>
  //   </div>
  // );
}
