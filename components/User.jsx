import { Fragment } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';

export default function User() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button>
              <Image
                src={session.user.image}
                width={100}
                height={100}
                alt='user_img'
                priority
                className='w-11 h-11 rounded-full p-[4px] duration-200 hover:bg-gray-200'
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <div className='px-1 py-1'>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active && 'bg-gray-200'
                      } text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={signOut}
                    >
                      Log out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className='bg-blue-500 text-white rounded-lg p-2 px-3 hover:brightness-105 hover:shadow duration-150'
        >
          Sign in
        </button>
      )}
    </>
  );
}
