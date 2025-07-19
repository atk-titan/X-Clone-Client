"use client"
import { useCurrentUser } from '@/hooks/user';
import GoogleAuthButton from '../GoogleAuthButton';
import { useQueryClient } from '@tanstack/react-query';

const SignIn = ( ) =>{
    const queryClient = useQueryClient();
    const { isFetched, user } = useCurrentUser();
  return (
    <div className='w-full border mx-5 my-3 px-5 py-4 rounded-2xl border-gray-600'>
      <h4 className='text-xl font-bold mb-2'>New to X?</h4>
      <p className='text-gray-400 font-extralight text-sm mb-3'>Sign up now to get your own personalized timeline!</p>
      <div className='w-full flex justify-center'>
        {(!isFetched) && <GoogleAuthButton/>}
      </div>
      <p className='mt-3 text-sm text-gray-400 font-extralight'>By signing up, you agree to the 
        <span className='mx-1 text-blue-400 hover:underline hover:cursor-pointer'>Terms of Service</span>
        and 
        <span className='mx-1 text-blue-400 hover:underline hover:cursor-pointer'>Privacy Policy</span>, including 
        <span className='mx-1 text-blue-400 hover:underline hover:cursor-pointer'>Cookie Use</span>.</p>
    </div>
  )
}

export default SignIn;