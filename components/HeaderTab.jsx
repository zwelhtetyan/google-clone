import { useRouter } from 'next/router';

export default function HeaderTab({ Icon, tabName, isActive }) {
  const router = useRouter();

  function handleTabChange() {
    router.push(
      `/search?q=${router.query.q}${
        tabName === 'Images' ? '&searchType=image' : ''
      }`
    );
  }

  return (
    <div
      onClick={handleTabChange}
      className={`${
        isActive ? 'text-blue-500 border-b-blue-500' : 'border-b-transparent'
      } flex space-x-1 cursor-pointer group pb-1 hover:text-blue-500 border-b-4 hover:border-b-blue-500 duration-100`}
    >
      <Icon isActive={isActive} />
      <p>{tabName}</p>
    </div>
  );
}
