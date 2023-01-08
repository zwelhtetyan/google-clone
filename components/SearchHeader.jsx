import Image from 'next/image';
import SearchInput from './SearchInput';
import { useRouter } from 'next/router';
import User from './User';
import { useRef, useState } from 'react';
import SearchIcon from '../assets/icons/Search';
import ImageIcon from '../assets/icons/Image';
import HeaderTab from './HeaderTab';

export default function SearchHeader() {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const searchType = router.query.searchType || '';

  function searchInputChangeHandler({ target }) {
    setSearchValue(target.value);
  }

  function searchHandler(e) {
    e.preventDefault();

    const searchTerm = searchValue.trim();

    if (!searchTerm) return;

    router.push(
      `/search?q=${searchTerm}${searchType ? '&searchType=image' : ''}`
    );
  }

  return (
    <header className='p-4 border-b border-b-gray-200 shadow-sm bg-white bg-opacity-20 backdrop-blur-md'>
      <div className='flex items-center justify-between sm:justify-unset'>
        <Image
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png'
          width={120}
          height={40}
          alt='logo'
          priority
          className='w-28 cursor-pointer'
          onClick={() => router.push('/')}
        />

        <form onSubmit={searchHandler} className='flex-1 mx-4 hidden sm:block'>
          <SearchInput
            className='shadow-lg'
            onSearchChange={searchInputChangeHandler}
          />
        </form>

        <User />
      </div>

      <form onSubmit={searchHandler} className='flex-1 mt-3 block sm:hidden'>
        <SearchInput
          className='shadow-lg'
          onSearchChange={searchInputChangeHandler}
        />
      </form>

      <div className='flex gap-5  md:ml-[145px] text-sm text-gray-500 fill-gray-500 mt-5'>
        <HeaderTab
          Icon={SearchIcon}
          tabName='All'
          isActive={searchType === ''}
        />
        <HeaderTab
          Icon={ImageIcon}
          tabName='Images'
          isActive={searchType === 'image'}
        />
      </div>
    </header>
  );
}
