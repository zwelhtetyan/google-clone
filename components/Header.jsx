import User from './User';

export default function Header() {
  return (
    <header className='flex justify-end p-4 text-sm text-gray-700'>
      <div className='flex items-center space-x-3'>
        <p className='link'>Gmail</p>
        <p className='link'>Images</p>
        <User />
      </div>
    </header>
  );
}
