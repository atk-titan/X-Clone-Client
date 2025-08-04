"use client"
import { useCurrentUser } from '@/hooks/user';
import React from 'react';
import Image from 'next/image';

const UserAvatar = () => {

    const { isFetched, user } = useCurrentUser();

  return (
    isFetched ? (<div className='absolute bottom-4 right-3 p-2 sm:py-3 sm:px-4 hover:bg-gray-800 border border-gray-600 rounded-full hover:cursor-pointer'>
        { isFetched && <div className='flex gap-2'>
            { user?.profileImageURL && (<Image src={user.profileImageURL} height={45} width={45} alt='profile picture' className='rounded-full'/>)}
            <div className='flex flex-col justify-center'>
                <div className='text-sm font-semibold text-gray-100 hidden sm:block'>{ user?.firstname + " " + user?.lastname }</div>
                <h5 className='text-sm text-gray-500 hidden sm:block '>{user?.email}</h5>
            </div>
        </div> }
    </div>) : null
  );
}

export default UserAvatar;