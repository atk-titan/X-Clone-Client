import SupportingText from '@/components/SupportingText';
import { Grok } from '@lobehub/icons';
import Image from 'next/image';
import React from 'react'
import { BsArrowLeftShort, BsSearch } from 'react-icons/bs';
import FeedCard from '@/components/FeedCard';
import { Tweet, User } from '@/gql/graphql';
import { graphqlClient } from '@/clients/api';
import { getUserByIdQuery } from '@/graphql/query/user';
import { useCurrentUser } from '@/hooks/user';
import FollowButton from '@/components/FollowButton';

const UserProfile = async  ({params}:{ params:{ id: string }}) => {
  const { id } = await params;

  if(!!!id) return "User Not Found";

  const res = await graphqlClient.request(getUserByIdQuery,{id: id});
  const user = res.getUserById || null;

  if(!!!user) return "User Not Found"
  console.log();

  return (
    <div className='p-3 w-full'>
      <nav className='flex gap-4 items-center hover:cursor-pointer'>
        <BsArrowLeftShort className='text-3xl '/>
        <div className='w-full flex items-center justify-between'>
          <div>
            <h1 className='text-2xl font-bold'>{user.email}</h1>
            <SupportingText text={user.tweets ? `${user.tweets?.length} posts`: "0 posts"} />
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
        <div className='mt-2 flex items-center justify-between'>
          <div className='flex gap-4 text-md'>
            <SupportingText text={`${user.follower?.length} followers`} />
            <SupportingText text={`${user.following?.length} following`} />
          </div>
          {id && <FollowButton
                    id={id} 
                    followers={user.follower?.filter((f): f is User => Boolean(f)) || []}
          />}
        </div>
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