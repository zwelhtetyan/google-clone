import { useRouter } from 'next/router';

export default function SearchInput({
  className,
  searchInputRef,
  onSearchChange,
}) {
  const {
    query: { q: searchTerm },
  } = useRouter();

  return (
    <div
      className={`${className} h-12 flex rounded-3xl border border-gray-200 max-w-2xl w-full overflow-hidden hover:shadow-lg focus-within:shadow-lg`}
    >
      <svg
        focusable='false'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        className='w-6 fill-gray-500 ml-3 mr-2'
      >
        <path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'></path>
      </svg>

      <input
        ref={searchInputRef}
        defaultValue={searchTerm}
        onChange={onSearchChange || null}
        type='text'
        aria-labelledby='search-input'
        className='w-full bg-transparent flex-1 focus:outline-none'
      />
    </div>
  );
}
