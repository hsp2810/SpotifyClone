import Icon from "@/components/Icon";
import MusicCard from "@/components/MusicCard";
import Link from "next/link";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Dashboard = () => {
  return (
    <main className='flex-[76] bg-[#141414] rounded-lg'>
      <nav className='flex items-center justify-between py-3 px-5'>
        <div className='flex gap-2'>
          <Icon icon={<BsChevronLeft />} />
          <Icon icon={<BsChevronRight />} />
        </div>

        <div className='flex gap-6 items-center'>
          <Link
            href={"/signup"}
            className='font-semibold  text-gray-400 hover:font-bold hover:text-white'
          >
            Sign up
          </Link>
          <Link
            href={"/login"}
            className='text-md px-9 py-3 rounded-full font-semibold bg-white hover:font-bold text-black'
          >
            Log in
          </Link>
        </div>
      </nav>

      <section className='bg-[#252525] w-full h-[89%] px-5 py-5 rounded-b-lg'>
        <div className='flex justify-between'>
          <Link
            href={"/playlists"}
            className='font-bold text-2xl hover:underline'
          >
            Spotify Playlists
          </Link>
          <Link
            href={"/playlists/show"}
            className='font-semibold text-gray-300 text-sm hover:underline hover:text-white'
          >
            Show all
          </Link>
        </div>

        <div className='mt-5 flex gap-2'>
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
