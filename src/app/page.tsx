'use client'

import { useRouter } from 'next/navigation';

import { useAuth } from "@/hooks";


function Home() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) router.push('/dashboard');
  else router.push('/sign-in');

  return (
    <div></div>
  )

}

export default Home;
