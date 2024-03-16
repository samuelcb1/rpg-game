import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Index() {
  const router = useRouter()
  useEffect(()=>{
    router.push('/home')
  },[router])

  return (
    <div>
    <Head>
      <title>RPG</title>
      <meta name="description" content="Site para guardar informações do RPG" />
      <link rel="icon" type="image/x-icon" href="public/images/my_logo.png" />
    </Head>

    <h2>Site para guardar informações do RPG...</h2>
  </div>
  );
}
