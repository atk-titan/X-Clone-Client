import React from 'react';
import Image from 'next/image';
import { BiMessage, BiUpload } from 'react-icons/bi';
import { BsBookmark } from 'react-icons/bs';
import { FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';

const FeedCard:React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-12 w-full border-t border-gray-700 p-4 cursor-pointer">
        <div className='col-span-1 flex items-center justify-center h-12 w-fit'>
          <div className='rounded-full overflow-hidden w-fit h-fit'>
            <Image src={"/9440461.jpg"} height={45} width={45} alt='profile picture'/>
          </div>
        </div>
        <div className="col-span-11 pl-2">
          <div className='flex items-center gap-1.5'>
            <h5 className='font-bold pr-2 text-gray-50'>Striver | Building takeUforward</h5>
            <h6 className='font-light text-gray-600'>@striver69</h6>
            <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
            <div className="text-gray-600">24h</div>
          </div>
          <div className='mt-1'>
            <p className='font-light text-gray-200'>
              Thinking of a killer personalisation feature at TUF! Gonna go bonkers, if we can execute it right. AI AI AI yes!
            </p>
          </div>
          <div className='flex items-center justify-between mt-5 text-lg text-gray-600'>
            <div className='hover:text-blue-500'>
              <BiMessage/>
            </div>
            <div className='hover:text-green-500'>
              <FaRetweet/>
            </div>
            <div className='hover:text-pink-500'>
              <AiOutlineHeart/>
            </div>
            <div className='hover:text-blue-500'>
              <TbBrandGoogleAnalytics/>
            </div>
            <div className='flex items-center gap-2'>
              <div className='hover:text-blue-500'>
                <BsBookmark/>
              </div>
              <div className='hover:text-blue-500'>
                <BiUpload/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;