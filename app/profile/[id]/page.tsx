import React from "react";
import Feed from "../../../components/Feed";
import LeftMenu from "../../../components/LeftMenu";
import RightMenu from "../../../components/RightMenu";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-6">
      {/* LEFT */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      {/* CENTER */}
      <div className="w-full lg:w-[50%] xl:[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src={
                  "https://images.pexels.com/photos/6000789/pexels-photo-6000789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt=""
                fill
                className="object-cover rounded-md "
              />
              <Image
                src={
                  "https://images.pexels.com/photos/26424655/pexels-photo-26424655/free-photo-of-karanlik-koyu-bardaklar-kadehler.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto object-cover -bottom-16 ring-4 ring-white"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">Berke G</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">444</span>
                <span className="text-sm">Posts</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-medium">777</span>
                <span className="text-sm">Followers</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-medium">555</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      {/* RIGHT */}
      <div className="hidden lg:block w-[30%] xl:w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  );
};

export default ProfilePage;
