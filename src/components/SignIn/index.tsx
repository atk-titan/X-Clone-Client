"use client"
import { useCurrentUser } from '@/hooks/user';
import SigninContent from "../SigninContent";
import UserAvatar from "../UserAvatar";
import Image from 'next/image';
import FollowButton from '../FollowButton';
import Link from 'next/link';

type PartialUser = {
  id: string;
  email?: string;
  firstname?: string;
  lastname?: string | null;
  profileImageURL?: string;
};

const SignIn = () =>{

  const { isFetched, user } = useCurrentUser();

  return (
    <div>
      {!user ? (<div className='w-full border mx-5 my-3 px-5 py-4 rounded-2xl border-gray-600'>
        <SigninContent/>
      </div>) : null}
      {
        user && <div className='border border-gray-700 ml-5 mt-3 px-3 pt-3 pb-4 relative rounded-xl'>
          {user.recommendedUsers && <h1 className='mb-2 text-2xl font-semibold'>Users you may know:</h1>}
          {user.recommendedUsers?.map((el) => <div key={el?.id}>
            {el && <UserComponent user={{
                id: el.id,
                email: el.email,
                firstname: el.firstname,
                lastname: el.lastname,
                profileImageURL: el.profileImageURL
            }}/>}
          </div>)}
        </div>
      }
    </div>
  );
}

export default SignIn;

const UserComponent = ( {user}: { user: PartialUser } ) => {

  return (
      <div className='flex items-center justify-between rounded-full hover:cursor-pointer'>
        <Link href={`${user.id}`}>
          <div className='flex gap-2'>
              { user?.profileImageURL && (<Image src={user.profileImageURL} height={45} width={45} alt='profile picture' className='rounded-full'/>)}
              <div className='flex flex-col justify-center'>
                <div className='text-sm font-semibold text-gray-100 hidden sm:block hover:underline'>{ user?.firstname + " " + user?.lastname }</div>
                <h5 className='text-sm text-gray-500 hidden sm:block '>{user?.email}</h5>
              </div>
          </div>
        </Link>
        <FollowButton id={user.id}/>
      </div>
  )
}