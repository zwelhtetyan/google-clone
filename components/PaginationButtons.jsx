import Link from 'next/link';
import { useRouter } from 'next/router';

function setColor(char) {
  return char.toLocaleLowerCase() === 'g'
    ? 'text-blue-500'
    : char === 'o'
    ? 'text-yellow-500'
    : char === 'l'
    ? 'text-green-600'
    : 'text-red-500';
}

function Prev({ searchQuery, startIndex }) {
  return (
    <Link
      href={`/search?q=${searchQuery}&start=${startIndex}`}
      className='text-sm text-blue-500 hover:text-blue-400'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={2.3}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15.75 19.5L8.25 12l7.5-7.5'
        />
      </svg>

      <p>Prev</p>
    </Link>
  );
}

function Next({ searchQuery, startIndex }) {
  return (
    <Link
      href={`/search?q=${searchQuery}&start=${startIndex}`}
      className='text-sm text-blue-500 hover:text-blue-400'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={2.3}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8.25 4.5l7.5 7.5-7.5 7.5'
        />
      </svg>

      <p>Next</p>
    </Link>
  );
}

const str = 'Goooogle';

export default function PaginationButtons({ previousPage, nextPage }) {
  const { query } = useRouter();

  return (
    <div className='flex justify-center mt-10 mb-4 gap-5'>
      {previousPage && (
        <Prev searchQuery={query.q} startIndex={previousPage[0].startIndex} />
      )}

      <p className='text-3xl font-medium'>
        {str.split('').map((char, idx) => (
          <span className={setColor(char)} key={idx}>
            {char}
          </span>
        ))}
      </p>

      {nextPage && +query.start < 90 && (
        <Next searchQuery={query.q} startIndex={nextPage[0].startIndex} />
      )}
    </div>
  );
}
