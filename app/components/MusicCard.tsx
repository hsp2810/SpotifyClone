import Image from "next/image";
import React from "react";
import Thumbnail from "@/../public/images/musicthumbnail/2.webp";

const MusicCard = () => {
  return (
    <main className='w-[14rem] p-5 rounded-lg transition ease-in-out bg-[#2b2a2a] hover:bg-[#3e3d3d] cursor-pointer flex flex-col gap-3'>
      <Image
        src={Thumbnail}
        alt='No image found'
        className='rounded-lg shadow-lg '
      />
      <h1 className='font-bold text-md'>Today's Top Hits</h1>
      <p className='text-gray-300 text-xs'>
        Zach Bryan & kacey Musgraves are on top of...
      </p>
    </main>
  );
};

export default MusicCard;
