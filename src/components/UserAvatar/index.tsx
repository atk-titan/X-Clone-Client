import React from "react";
import Image from "next/image";

type PartialUser = {
  id: string;
  email?: string;
  firstname?: string;
  lastname?: string | null;
  profileImageURL?: string;
};

const UserAvatar = ({
  isFetched,
  user,
}: {
  isFetched: boolean;
  user: PartialUser;
}) => {
  // const { isFetched, user } = useCurrentUser();

  return isFetched ? (
    <div className="absolute right-3 bottom-4 rounded-full border border-gray-600 p-2 hover:cursor-pointer hover:bg-gray-800 sm:px-4 sm:py-3">
      {isFetched && (
        <div className="flex gap-2">
          {user?.profileImageURL && (
            <Image
              src={user.profileImageURL}
              height={45}
              width={45}
              alt="profile picture"
              className="rounded-full"
            />
          )}
          <div className="flex flex-col justify-center">
            <div className="hidden text-sm font-semibold text-gray-100 sm:block">
              {user?.firstname + " " + user?.lastname}
            </div>
            <h5 className="hidden text-sm text-gray-500 sm:block">
              {user?.email}
            </h5>
          </div>
        </div>
      )}
    </div>
  ) : null;
};

export default UserAvatar;
