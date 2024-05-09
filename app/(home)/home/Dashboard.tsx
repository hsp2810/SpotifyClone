import Icon from "@/app/components/Icon";
import MusicCard from "@/app/components/MusicCard";
import Navbar from "@/app/components/Header/Navbar";
import Link from "next/link";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { getSerSession } from "@/app/api/_utils/session";
import ScrollWrapper from "./ScrollWrapper";
import TopArtistsContainer from "@/app/_components/artists/TopArtistsContainer";
import MusicContainer from "@/app/_components/music/MusicContainer";

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
        {/* <ScrollWrapper
          title='Top Artists'
          titleHref='/artists/top'
          children={<TopArtistsContainer />}
        />
        <ScrollWrapper
          title='Your Playlists'
          titleHref='/playlists'
          children={<TopArtistsContainer />}
        /> */}
        <ScrollWrapper
          title='Top Songs'
          titleHref='/music'
          children={<MusicContainer />}
        />
      </div>
    </main>
  );
}
