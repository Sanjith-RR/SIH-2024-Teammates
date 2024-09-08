// page.js
'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

// Dynamically import MapComponent with SSR disabled
const MapComponent = dynamic(() => import('../../components/Map/MapComponent'), {
  ssr: false,
});

const Page = () => {
  const navigate = useRouter();

  return (
    <main>
      <header className="flex gap-4 p-4 text-center text-white" style={{ backgroundColor: '#054569' }}>
        <img src="logo.svg" alt="Logo" className="ml-[0.5vw]" />
        <h1 className="text-3xl tracking-wider text-center mt-1 cursor-pointer" onClick={() => navigate.push('/')}>
          <span className="text-blue-500">S</span>hinka <span className="text-blue-500">J</span>inzai
        </h1>
      </header>
      <div className="h-[89vh] w-screen">
        <MapComponent />
      </div>
    </main>
  );
};

export default Page;
