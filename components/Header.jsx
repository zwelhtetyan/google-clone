import Link from 'next/link';
import User from './User';

export default function Header() {
  return (
    <header className='flex justify-end p-4 text-sm text-gray-700'>
      <div className='flex items-center space-x-3'>
        <Link href='http://gmail.com'>
          <p className='link'>Gmail</p>
        </Link>

        <Link href='/search?q=google&searchType=image'>
          <p className='link'>Images</p>
        </Link>

        <User />
      </div>
    </header>
  );
}
