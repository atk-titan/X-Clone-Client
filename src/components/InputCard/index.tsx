"use client";
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
import axios from "axios";
import toast from "react-hot-toast";

const InputCard = () => {
  const [imageURL, setImageURL] = useState("");
  const { mutation } = useCreateTweet();
  const { isFetched, user } = useCurrentUser();
  const [tweetContent, setTweetContent] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweetContent(e.target.value);
  };

  const postHandler = useCallback(() => {
    mutation.mutate({
      content: tweetContent,
      imageURL: [imageURL],
    });
    setTweetContent("");
    setImageURL("");
  }, [tweetContent, imageURL]);

  const handleInputChange = useCallback((input: HTMLInputElement) => {
    return async (event: Event) => {
      event.preventDefault();
      console.log(input.files);

      const file: File | null | undefined = input.files?.item(0);
      if (!file) return;

      const { getSignedUrlForTweet } = await graphqlClient.request(
        getSignedUrlForTweetsQuery,
        {
          imageType: file.type.split("/")[1],
        },
      );

      if (getSignedUrlForTweet) {
        toast.loading("loading...", { id: "media-upload" });
        await axios.put(getSignedUrlForTweet, file, {
          headers: {
            "Content-Type": file.type,
          },
        });
        toast.success("upload completed", { id: "media-upload" });

        const url = new URL(getSignedUrlForTweet);
        const myFilePath = `${url.origin}${url.pathname}`;

        setImageURL(myFilePath);
      }
    };
  }, []);

  const handleSelectMedia = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*,video/*");

    const handlerFn = handleInputChange(input);
    input.addEventListener("change", handlerFn);

    input.click();
  }, [handleInputChange]);

  return (
    <div>
      <div className="grid w-full cursor-pointer grid-cols-12 border-t border-gray-700 p-4">
        <div className="col-span-1 flex h-12 w-fit items-center justify-center">
          <div className="h-fit w-fit overflow-hidden rounded-full">
            {isFetched && user?.profileImageURL && (
              <Image
                src={user?.profileImageURL}
                height={45}
                width={45}
                alt="profile picture"
              />
            )}
          </div>
        </div>
        <div className="col-span-11 pl-2">
          <textarea
            value={tweetContent}
            className="field-sizing-content h-auto min-h-[100px] w-full resize-none overflow-hidden border-b border-gray-700 px-1 py-2 text-xl focus:outline-0"
            placeholder="What's happening?"
            onChange={handleInput}
          ></textarea>
          {imageURL && (
            <Image src={imageURL} alt="tweet-image" height={300} width={300} />
          )}
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center gap-2 text-xl text-blue-400 sm:gap-3 md:gap-4">
              <BiImage onClick={handleSelectMedia} />
              <MdOutlineGifBox />
              <Grok size={20} />
              <BiPoll />
              <BsEmojiSmileUpsideDown />
              <GrSchedulePlay />
              <IoLocationOutline />
            </div>
            <div>
              <button
                className="h-full w-full rounded-full bg-gray-50 px-4 py-1.5 text-sm font-semibold text-black transition-all hover:cursor-pointer hover:bg-gray-300"
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
};

export default InputCard;
