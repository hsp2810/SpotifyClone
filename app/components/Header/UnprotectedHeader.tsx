"use client";

import Link from "next/link";

export default function UnprotectedHeader() {
  return (
    <div className='flex gap-6 items-center'>
      <Link
        href={"/signup"}
        className='font-semibold text-gray-400 hover:font-bold hover:text-white'
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
  );
}
