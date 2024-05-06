import Icon from "@/app/components/Icon";
import MusicCard from "@/app/components/MusicCard";
import Navbar from "@/app/components/Header/Navbar";
import Link from "next/link";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { getSerSession } from "@/app/api/utils/session";

export default async function Dashboard() {
  const user = await getSerSession();

  return (
    <main className='flex-[76] bg-[#141414] rounded-lg'>
      <nav className='flex items-center justify-between py-3 px-5'>
        <div className='flex gap-2'>
          <Icon icon={<BsChevronLeft />} />
          <Icon icon={<BsChevronRight />} />
        </div>

        <Navbar />
      </nav>

      <div className={`${user ? "h-[89vh]" : "h-[88vh]"} overflow-y-scroll`}>
        <section className='bg-[#252525] w-full  px-5 py-5 rounded-b-lg'>
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
        <section className='bg-[#252525] w-full  px-5 py-5 rounded-b-lg'>
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
      </div>
    </main>
  );
}
