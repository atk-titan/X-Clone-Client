"use client"
import { useCurrentUser } from "@/hooks/user";
import { Grok } from "@lobehub/icons";
import Image from "next/image";
import { BiImage, BiPoll } from "react-icons/bi";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";
import { MdOutlineGifBox } from "react-icons/md";
import { GrSchedulePlay } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { useCallback, useRef, useState } from "react";
import { useCreateTweet } from "@/hooks/tweet";
import { graphqlClient } from "@/clients/api";
import { GetSignedUrlForTweetsDocument } from "@/gql/graphql";
import { getSignedUrlForTweetsQuery } from "@/graphql/query/tweet";
import axios from 'axios';
import toast from "react-hot-toast";

const InputCard = () => {
    const [ imageURL, setImageURL ] = useState("");
    const { mutation } = useCreateTweet();
    const { isFetched, user } = useCurrentUser();
    const [ tweetContent, setTweetContent ] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = textareaRef.current;
        if (textarea) {
        textarea.style.height = "auto"; 
        textarea.style.height = `${textarea.scrollHeight}px`; 
        }
        setTweetContent(e.target.value);
    };

    const postHandler = useCallback(() => {
        mutation.mutate({
          content: tweetContent,
          imageURL: [imageURL]
        });
        setTweetContent("");
        setImageURL("")
    },[tweetContent , imageURL]);

    const handleInputChange = useCallback((input:HTMLInputElement) => {
      return async ( event: Event ) => {
        event.preventDefault();
        console.log(input.files);

        const file: File | null | undefined = input.files?.item(0);
        if(!file) return

        const { getSignedUrlForTweet } = await graphqlClient.request(getSignedUrlForTweetsQuery,{
          imageType: file.type.split("/")[1]
        });

        if(getSignedUrlForTweet){
          toast.loading("loading...", { id: "media-upload" });
          await axios.put(getSignedUrlForTweet,file,{
            headers:{
              "Content-Type": file.type
            }
          });
          toast.success("upload completed", { id: "media-upload" });

          const url = new URL(getSignedUrlForTweet);
          const myFilePath = `${url.origin}${url.pathname}`;

          setImageURL(myFilePath);
        }
      }
    },[]);

    const handleSelectMedia = useCallback(() => {
        const input = document.createElement("input");
        input.setAttribute("type","file");
        input.setAttribute("accept","image/*,video/*");

        const handlerFn = handleInputChange(input);
        input.addEventListener("change", handlerFn);

        input.click();
    },[handleInputChange]);
    
    return (
        <div>
          <div className="grid grid-cols-12 w-full border-t border-gray-700 p-4 cursor-pointer">
            <div className='col-span-1 flex items-center justify-center h-12 w-fit'>
              <div className='rounded-full overflow-hidden w-fit h-fit'>
                {isFetched && user?.profileImageURL && <Image src={user?.profileImageURL} height={45} width={45} alt='profile picture'/>}
              </div>
            </div>
            <div className="col-span-11 pl-2">
              <textarea ref={textareaRef} 
                        value={tweetContent} 
                        rows={2} 
                        className="w-full text-xl py-2 px-1 border-b border-gray-700 focus:outline-0 overflow-hidden resize-none" 
                        placeholder="What's happening?" 
                        onChange={handleInput}>

              </textarea>
              {
                imageURL && <Image src={imageURL} alt="tweet-image" height={300} width={300}/>
              }
              <div className="pt-3 flex justify-between items-center">
                <div className="flex gap-2 sm:gap-3 md:gap-4 text-xl text-blue-400 items-center">
                    <BiImage onClick={handleSelectMedia}/>
                    <MdOutlineGifBox />
                    <Grok size={20}/>
                    <BiPoll />
                    <BsEmojiSmileUpsideDown />
                    <GrSchedulePlay />
                    <IoLocationOutline />
                </div>
                <div>
                    <button className="py-1.5 px-4 text-sm text-black font-semibold bg-gray-50 rounded-full hover:cursor-pointer hover:bg-gray-300 transition-all w-full h-full"
                      onClick={postHandler}
                    >
                      Post
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default InputCard;