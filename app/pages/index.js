import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Surf Shop</title>
        <meta name='Surf Shop Online' content='Developed by Duane McDonald' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Navbar />
      </main>

      <footer>Created By Duane McDonald</footer>
    </div>
  );
}
