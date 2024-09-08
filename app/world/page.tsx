'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
const WorldPage = () => {
    const router =useRouter();
    router.push('localhost:3001');

  return null;
};

export default WorldPage;
