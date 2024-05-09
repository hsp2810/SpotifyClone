import MusicCard from "@/app/components/MusicCard";
import React from "react";

export default function TopArtistsContainer() {
  return (
    <div className='mt-5 flex gap-2'>
      <MusicCard />
      <MusicCard />
      <MusicCard />
      <MusicCard />
      <MusicCard />
    </div>
  );
}
