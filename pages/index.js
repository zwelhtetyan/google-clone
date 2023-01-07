import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import SearchInput from '../components/SearchInput';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function searchHandler(e) {
    e.preventDefault();

    const searchTerm = searchInputRef.current.value.trim();

    if (!searchTerm) return;

    router.push(`/search?q=${searchTerm}`);
  }

  return (
    <>
      <Head>
        <title>Google Clone</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='min-h-screen flex flex-col'>
        {/* header */}
        <Header />

        {/* body */}
        <form className='flex flex-1 flex-col items-center mt-32 p-4'>
          <Image
            src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png'
            alt='google_img'
            width={500}
            height={100}
            className='h-16 w-auto object-contain xs:h-20'
            priority
          />

          <SearchInput searchInputRef={searchInputRef} className='my-5' />

          <div className='flex flex-wrap justify-center gap-2'>
            <button onClick={searchHandler} className='btn'>
              Google Search
            </button>
            <button className='btn'>I'm Feeling Lucky</button>
          </div>
        </form>

        {/* footer */}
        <Footer />
      </main>
    </>
  );
}
