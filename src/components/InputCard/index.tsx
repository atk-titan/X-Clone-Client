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

const InputCard = () => {
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
          content: tweetContent
        });
        setTweetContent("");
    },[tweetContent]);

    const handleSelectMedia = useCallback(() => {
        const input = document.createElement("input");
        input.setAttribute("type","file");
        input.setAttribute("accept","image/*,video/*");
        input.click();
    },[]);
    
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
                        rows={3} 
                        className="w-full text-xl py-2 px-1 border-b border-gray-700 focus:outline-0 overflow-hidden resize-none" 
                        placeholder="What's happening?" 
                        onChange={handleInput}>

              </textarea>
              <div className="pt-3 flex justify-between items-center">
                <div className="flex gap-4 text-xl text-blue-400 items-center">
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