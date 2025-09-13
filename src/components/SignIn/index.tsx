"use client"
import { useCurrentUser } from '@/hooks/user';
import SigninContent from "../SigninContent";

const SignIn = () =>{

  const { isFetched, user } = useCurrentUser();

  return (
    !user ? (<div className='w-full border mx-5 my-3 px-5 py-4 rounded-2xl border-gray-600'>
      <SigninContent/>
    </div>) : null
  );
}

export default SignIn;