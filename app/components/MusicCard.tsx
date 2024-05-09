import Image from "next/image";
import React from "react";
import Thumbnail from "@/../public/images/musicthumbnail/2.webp";
import { Music } from "@prisma/client";
import { Play } from "lucide-react";
import Link from "next/link";

interface PageProps {
  music: any;
}

const MusicCard = ({ music }: PageProps) => {
  return (
    <main className='relative w-[14rem] p-5 rounded-lg transition ease-in-out bg-[#2b2a2a] hover:bg-[#3e3d3d] cursor-pointer flex flex-col gap-3'>
      <Image
        src={music.thumbnail_secure_url as string}
        alt='No image found'
        className='rounded-lg shadow-lg w-full'
        width={100}
        height={100}
      />
      <h1 className='font-bold text-lg'>{music.title}</h1>
      <div className='flex flex-wrap gap-1'>
        <h1 className='text-gray-300 text-xs font-bold'>Artists: </h1>
        {music.artists.map((artist: any) => (
          <p className='text-gray-300 text-xs' key={artist.id}>
            <Link href={"/"} className='hover:underline'>
              {artist.name}
            </Link>
          </p>
        ))}
      </div>
    </main>
  );
};

export default MusicCard;
