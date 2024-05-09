import { getLatestMusic } from "@/app/api/_database/music";
import MusicCard from "@/app/components/MusicCard";
import React from "react";

export default async function MusicContainer() {
  const musicData = await getLatestMusic();
  //   console.log(musicData);

  return (
    <div className='mt-5 flex gap-2'>
      {musicData?.map((music) => {
        return <MusicCard music={music} key={music.id} />;
      })}
    </div>
  );
}
