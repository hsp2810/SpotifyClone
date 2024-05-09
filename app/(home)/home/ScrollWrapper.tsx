import MusicCard from "@/app/components/MusicCard";
import Link from "next/link";
import React from "react";

interface PageProps {
  title: string;
  titleHref: string;
  children: React.ReactNode;
}

export default function ScrollWrapper({ children }: PageProps) {
  return (
    <section className='bg-[#252525] w-full px-5 py-5 rounded-b-lg'>
      <div className='flex justify-between'>
        <Link
          href={"/playlists"}
          className='font-bold text-2xl hover:underline'
        >
          Top Artists
        </Link>
        <Link
          href={"/playlists/show"}
          className='font-semibold text-gray-300 text-sm hover:underline hover:text-white'
        >
          Show all
        </Link>
      </div>

      {children}
      {/* <div className='mt-5 flex gap-2'>
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div> */}
    </section>
  );
}
