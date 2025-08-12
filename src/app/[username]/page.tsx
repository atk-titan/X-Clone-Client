"use client"
import SupportingText from '@/components/SupportingText';
import { Grok } from '@lobehub/icons';
import Image from 'next/image';
import React from 'react'
import { BsArrowLeftShort, BsSearch } from 'react-icons/bs';
import FeedCard from '@/components/FeedCard';
import { getHoursSinceUpdate } from '@/components/Feed';
import { Tweet } from '@/gql/graphql';

const UserProfile = ({params}:{ params:{ username: string }}) => {
  const { username } = params;
  // const { isFetched , user } = useCurrentUser();

  return (
    isFetched ? (<div className='p-3 w-full'>
      <nav className='flex gap-4 items-center hover:cursor-pointer'>
        <BsArrowLeftShort className='text-3xl '/>
        <div className='w-full flex items-center justify-between'>
          <div>
            <h1 className='text-2xl font-bold'>{username}</h1>
            <SupportingText text='10.2k posts' />
          </div>
          <div className='flex gap-4'>
            <div className='hover:bg-gray-700 p-2 rounded-full transition-colors duration-200'>
              <Grok size={22}/>
            </div>
            <div className='hover:bg-gray-700 p-2 sm:mr-2 rounded-full transition-colors duration-200'>
              <BsSearch className='text-xl'/>
            </div>
          </div>
        </div>
      </nav>
      <div className='p-4 border-b border-slate-900'>
        {!!user?.profileImageURL && 
              <Image src={user.profileImageURL}
                     height={100}
                     width={100} 
                     alt='user image' 
                     className='rounded-full'
              />
        }
        <h1 className='text-2xl font-bold mt-5'>{user?.firstname+" "+user?.lastname}</h1>
      </div>
      <div>
        {user?.tweets && user?.tweets?.map(tweet => 
              <FeedCard key={tweet?.id}
                        tweet={{
                        ...tweet,
                         author:{
                          firstname:user.firstname,
                          lastname:user.lastname,
                          email:user.email,
                          profileImageURL:user.profileImageURL
                        }} as Tweet }
                        time={getHoursSinceUpdate( tweet?.updatedAt as string )}
                />)}
      </div>
    </div>) : null 
  );
}

export default UserProfile;