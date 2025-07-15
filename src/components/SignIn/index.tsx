"use client"
import React, { useCallback } from 'react'
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from 'react-hot-toast';
import { graphqlClient } from '@/clients/api';
import { verifyUserGoogleTokenQuery } from '@/graphql/query/user';

const SignIn = () => {

  const handleLoginWithGoogle = useCallback( async (cred: CredentialResponse)=>{
    const googleToken = cred.credential;

    if(!googleToken) return toast.error("Google token not found");

    const { verifyGoogleToken } = await graphqlClient.request(
      verifyUserGoogleTokenQuery,
      {
        token: googleToken
      }
    );
    
    toast.success("Verified Success");
    
    if(verifyGoogleToken) 
      window.localStorage.setItem("__twitter_token",verifyGoogleToken); 

  },[]);

  return (
    <div className='w-full border mx-5 my-3 px-5 py-4 rounded-2xl border-gray-600'>
      <h4 className='text-xl font-bold mb-2'>New to X?</h4>
      <p className='text-gray-400 font-extralight text-sm mb-3'>Sign up now to get your own personalized timeline!</p>
      <div className='w-full flex justify-center'>
        <GoogleLogin onSuccess={handleLoginWithGoogle}/>
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