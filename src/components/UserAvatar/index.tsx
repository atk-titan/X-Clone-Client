"use client"
import { useCurrentUser } from '@/hooks/user';
import React from 'react';
import Image from 'next/image';

const UserAvatar = () => {

    const { isFetched, user } = useCurrentUser();

  return (
    <div className='absolute bottom-4 right-3 py-3 px-4 hover:bg-gray-800 border border-gray-600 rounded-full hover:cursor-pointer'>
        { isFetched && <div className='flex gap-2'>
            {/* { isFetched && <img src={user?.profileImageURL} alt="no image found"/> } */}
            { user?.profileImageURL && (<Image src={user.profileImageURL} height={45} width={45} alt='profile picture' className='rounded-full'/>)}
            <div className='flex flex-col justify-center'>
                <div className='text-sm font-semibold text-gray-100'>{ user?.firstname + " " + user?.lastname }</div>
                <h5 className='text-sm text-gray-500'>{user?.email}</h5>
            </div>
        </div> }
    </div>
  );
}

export default UserAvatar;