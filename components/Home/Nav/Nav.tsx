/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  BellIcon,
  VideoCameraIcon,
  UserIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Nav = () => {
  const [search, setSearch] = useState("");
  const { data: session } = useSession();
  const userImage = session?.user?.image || "";

  const router = useRouter();

  return (
    <div className="bg-black sticky top-0 z-50 text-white h-[10vh]  flex items-center justify-between ">
      <div
        onClick={() => {
          router.push("/");
        }}
        className="flex space-x-1 cursor-pointer items-center"
      >
        <Image
          width={50}
          className="ml-10"
          height={50}
          src="/images/logoA.png"
          alt="logo"
        />
        <p className="font-bold uppercase text-lg">Animex</p>
      </div>

      <div className="flex rounded-md overflow-hidden items-center h-[2rem] space-x-2 bg-white w-[30%] md:w-[43%]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push(`/${search}`);
          }}
          className="flex rounded-md overflow-hidden items-center h-[2rem] space-x-2 bg-white w-[100%]"
        >
          <input
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search..."
            className="w-[100%] h-[100%] border-none outline-none text-black ml-2  "
          />
          <button type="submit">
            <MagnifyingGlassIcon className="h-10 w-10 text-black pr-4" />
          </button>
        </form>
      </div>

      <div className="flex items-center space-x-3 mr-10">
        <div className="w-7 h-7 cursor-pointer rounded-full hidden  bg-red-600 md:flex flex-col items-center justify-center">
          <VideoCameraIcon className="h-5 w-5 text-white" />
        </div>
        <div className="w-7 h-7 cursor-pointer hidden rounded-full  bg-red-600 md:flex flex-col items-center justify-center">
          <BellIcon className="h-5 w-5 text-white" />
        </div>

        {session?.user?.image && (
          <img
            src={userImage}
            alt="user"
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-7 h-7 cursor-pointer rounded-full"
            onClick={() => {
              signOut();
            }}
          />
        )}
        {!session?.user?.image && (
          <div className="w-7 h-7 cursor-pointer rounded-full">
            <UserIcon className="h-5 w-5 text-white" />
          </div>
        )}
      </div>
      {/* <div className="md:hidden mr-[3rem]">
        <Bars3Icon className="w-7 h-7 cursor-pointer rounded-full" />
      </div> */}
    </div>
  );
};

export default Nav;
