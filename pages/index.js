import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function Home() {
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

          <div className='my-5 h-12 flex rounded-3xl border border-gray-200 max-w-2xl w-full overflow-hidden hover:shadow-lg focus-within:shadow-lg'>
            <svg
              focusable='false'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='w-6 fill-gray-500 ml-3 mr-2'
            >
              <path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'></path>
            </svg>
            <input
              type='text'
              className='w-full bg-transparent flex-1 focus:outline-none'
            />
          </div>

          <div className='flex flex-wrap justify-center gap-2'>
            <button className='btn'>Google Search</button>
            <button className='btn'>I'm Feeling Lucky</button>
          </div>
        </form>

        {/* footer */}
        <Footer />
      </main>
    </>
  );
}
