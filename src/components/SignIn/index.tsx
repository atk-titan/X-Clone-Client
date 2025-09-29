"use client"
import { useCurrentUser } from '@/hooks/user';
import SigninContent from "../SigninContent";
import UserAvatar from "../UserAvatar";
import { User } from '@/gql/graphql';

const SignIn = () =>{

  const { isFetched, user } = useCurrentUser();

  return (
    <div>
      {!user ? (<div className='w-full border mx-5 my-3 px-5 py-4 rounded-2xl border-gray-600'>
        <SigninContent/>
      </div>) : null}
      {
        user?.recommendedUsers?.map((el: User) => <div key={el?.id}>
          {el && <UserAvatar isFetched={true} user={{
              id: el.id,
              email: el.email,
              firstname: el.firstname,
              lastname: el.lastname,
              profileImageURL: el.profileImageURL
          }}/>}
        </div>)
      }
    </div>
  );
}

export default SignIn;