"use client";
import React from "react";
import Image from "next/image";
import { BiMessage, BiUpload } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { Tweet } from "@/gql/graphql";
import Link from "next/link";

function getHoursSinceUpdate(updatedAt: string): string {
  const updatedDate = new Date(Number(updatedAt));
  const now = new Date();
  const diffInMs = now.getTime() - updatedDate.getTime();
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInMins = Math.floor(diffInMs / (1000 * 60));

  if (diffInHours > 0 && diffInHours < 25) return `${diffInHours}h`;
  else if (diffInHours > 24) return `${Math.floor(diffInHours / 24)}d`;
  else return `${diffInMins}m`;
}

const FeedCard = ({ tweet }: { tweet: Tweet | null }) => {
  const time = getHoursSinceUpdate(tweet?.updatedAt as string);
  return (
    <div>
      <div className="grid w-full cursor-pointer grid-cols-12 border-t border-gray-700 p-4">
        <div className="col-span-1 flex h-12 w-fit items-center justify-center">
          <div className="h-fit w-fit overflow-hidden rounded-full">
            {tweet?.author?.profileImageURL && (
              <Image
                src={tweet.author.profileImageURL}
                height={45}
                width={45}
                alt="profile picture"
              />
            )}
          </div>
        </div>
        <div className="col-span-11 pl-2">
          <div className="flex flex-col items-start justify-between gap-0 sm:flex-row sm:items-center sm:gap-1">
            <h5 className="pr-2 font-bold text-gray-50 underline-offset-2 hover:underline">
              <Link href={`${tweet?.author?.id}`}>
                {tweet?.author?.firstname + " " + tweet?.author?.lastname}
              </Link>
            </h5>
            <div className="flex items-center gap-2 text-gray-600">
              {!!tweet?.author?.email && (
                <h6 className="font-light">
                  {tweet.author.email.length > 6
                    ? tweet.author.email.substring(0, 11) + "..."
                    : tweet.author.email}
                </h6>
              )}
              <div className="h-1 w-1 rounded-full bg-gray-600" />
              {tweet?.updatedAt && <div>{time}</div>}
            </div>
          </div>

          <div className="mt-2">
            <p className="break-words whitespace-pre-wrap">{tweet?.content}</p>
            {tweet?.imageURL && tweet.imageURL[0] && (
              <Image
                src={tweet.imageURL[0] as string}
                height={300}
                width={300}
                alt="tweet-image"
                className="mt-3"
              />
            )}
          </div>
          <div className="mt-5 flex items-center justify-between text-lg text-gray-600">
            <div className="hover:text-blue-500">
              <BiMessage />
            </div>
            <div className="hover:text-green-500">
              <FaRetweet />
            </div>
            <div className="hover:text-pink-500">
              <AiOutlineHeart />
            </div>
            <div className="hover:text-blue-500">
              <TbBrandGoogleAnalytics />
            </div>
            <div className="flex items-center gap-2">
              <div className="hover:text-blue-500">
                <BsBookmark />
              </div>
              <div className="hover:text-blue-500">
                <BiUpload />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
