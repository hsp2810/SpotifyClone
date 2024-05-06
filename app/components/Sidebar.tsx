"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { TbCards } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import Logo from "@/../public/images/Logo.png";
import Icon from "./Icon";

const Sidebar = () => {
  return (
    <main className='flex-[24] max-h-[75vh]'>
      <SidebarTop />
      <SidebarBottom />
    </main>
  );
};

const SidebarTop = () => {
  return (
    <main className='pl-4 pt-4 pb-4 mr-2 mb-3 bg-[#141414] rounded-lg'>
      <Link href={"/"} className='flex items-center mb-5'>
        <Image src={Logo} alt='Logo not found' height={100} width={30} />
        <h1 className='font-semibold ml-2 text-lg'>Spotify</h1>
      </Link>
      <div className='flex flex-col gap-6'>
        <SidebarLink icon={<AiFillHome />} title='Home' />
        <SidebarLink icon={<FiSearch />} title='Search' />
      </div>
    </main>
  );
};

const SidebarBottom = () => {
  return (
    <main className='mr-2 mt-3 bg-[#141414] rounded-lg pb-3 h-full'>
      <div className='pl-4 pt-4 pb-4 flex justify-between items-center'>
        <SidebarLink icon={<TbCards />} title='Your Library' />
        <Icon icon={<AiOutlinePlus />} />
      </div>

      <div className='h-[35vh] overflow-scroll'>
        <div className='bg-[#252525] rounded-lg pl-4 pt-4 pb-4 mx-2 mt-3 flex flex-col gap-3'>
          <h1 className='font-bold'>Create your first playlist</h1>
          <p className='text-sm font-bold'>It's easy, we'll help you</p>
          <button className='mt-4 text-sm font-bold w-fit py-2 px-4 rounded-full bg-white text-black hover:scale-105'>
            Create playlist
          </button>
        </div>

        <div className='bg-[#252525] rounded-lg pl-4 pt-4 pb-4 mx-2 mt-3 flex flex-col gap-3'>
          <h1 className='font-bold'>Let's find some podcasts to follow</h1>
          <p className='text-sm font-bold'>
            We'll keep you updated on new episodes
          </p>
          <button className='mt-4 text-sm font-bold w-fit py-2 px-4 rounded-full bg-white text-black hover:scale-105'>
            Browse podcasts
          </button>
        </div>
      </div>

      <span>
        <Link
          href={"/"}
          className='block hover:underline text-xs text-gray-300 font-light ml-5 my-10 '
        >
          Cookies
        </Link>
      </span>

      <button className='ml-5 flex outline outline-1 outline-gray-400 px-3 py-2 rounded-full items-center gap-2 hover:outline-2'>
        <BsGlobe />
        <span className='text-xs font-bold'>English</span>
      </button>
    </main>
  );
};

interface LinkProps {
  icon: any;
  title: string;
}

const SidebarLink = ({ icon, title }: LinkProps) => {
  return (
    <Link
      href={"/"}
      className='flex items-center gap-4 text-gray-300 transition delay-75 hover:text-white '
    >
      <span className='text-2xl'>{icon}</span>
      <span className='font-bold'>{title}</span>
    </Link>
  );
};

export default Sidebar;
