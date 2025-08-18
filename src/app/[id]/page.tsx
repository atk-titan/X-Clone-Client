import SupportingText from '@/components/SupportingText';
import { Grok } from '@lobehub/icons';
import Image from 'next/image';
import React from 'react'
import { BsArrowLeftShort, BsSearch } from 'react-icons/bs';
import FeedCard from '@/components/FeedCard';
import { Tweet, User } from '@/gql/graphql';
import { graphqlClient } from '@/clients/api';
import { getUserByIdQuery } from '@/graphql/query/user';

const UserProfile = async  ({params}:{ params:{ id: string }}) => {
  const { id } = await params;

  if(!!!id) return "User Not Found";

  const res = await graphqlClient.request(getUserByIdQuery,{id: id});
  const user: User|null = res.getUserById || null;

  if(!!!user) return "User Not Found"
  console.log(user);

  return (
    <div className='p-3 w-full'>
      <nav className='flex gap-4 items-center hover:cursor-pointer'>
        <BsArrowLeftShort className='text-3xl '/>
        <div className='w-full flex items-center justify-between'>
          <div>
            <h1 className='text-2xl font-bold'>{user.email}</h1>
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
        <h1 className='text-xl font-bold mt-5'>{user?.firstname+" "+user?.lastname}</h1>
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
                />)}
      </div>
    </div>
  );
}

export default UserProfile;