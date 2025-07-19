"use client"

import React, { useCallback } from 'react';
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from 'react-hot-toast';
import { graphqlClient } from '@/clients/api';
import { verifyUserGoogleTokenQuery } from '@/graphql/query/user';
import { useQueryClient } from '@tanstack/react-query';

const GoogleAuthButton = () => {
    const queryClient = useQueryClient();

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

        await queryClient.invalidateQueries({queryKey:['current-user']});

    },[queryClient]);
  return (
    <div>
        <GoogleLogin onSuccess={handleLoginWithGoogle}/>
    </div>
  )
}

export default GoogleAuthButton;