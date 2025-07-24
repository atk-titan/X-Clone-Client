"use client"
import { useCurrentUser } from '@/hooks/user';
import SigninContent from "../SigninContent";

const SignIn = () =>{

  const { isFetched, user } = useCurrentUser();

  return (
    <div className='w-full border mx-5 my-3 px-5 py-4 rounded-2xl border-gray-600'>
      { isFetched ? <h1>No new User</h1> : <SigninContent/> }
    </div>
  );
}

export default SignIn;