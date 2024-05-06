import Link from "next/link";
import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";
import RegisterForm from "./RegisterForm";

export default function Signup() {
  return (
    <main className='my-10 bg-white text-black flex flex-col justify-center'>
      <Link href={"/"} className='flex items-center justify-center'>
        <BsSpotify className={"text-2xl"} />
        <h1 className='font-bold ml-1 text-lg'>Spotify</h1>
      </Link>

      <h1 className='text-center text-3xl font-bold tracking-tighter my-10'>
        Sign up for free to start listening.
      </h1>

      <div>
        <button className='border rounded-full py-4 px-[4rem] flex items-center justify-center w-[22rem] bg-[#405A93] text-white m-auto hover:scale-105'>
          <BiLogoFacebookCircle className={"text-2xl"} />
          <span className='ml-1 font-bold'>Sign up with Facebook</span>
        </button>

        <button className='border rounded-full py-4 px-10 flex items-center justify-center w-[22rem] m-auto hover:scale-105 mt-5'>
          <AiOutlineGoogle className={"text-2xl"} />
          <span className='ml-1 font-bold'>Sign up with Google</span>
        </button>

        <div className='flex items-center justify-center my-5'>
          <div className='w-1/3 border-t border-gray-300 mr-2'></div>
          <div className='text-gray-500 text-sm tracking-[0.2em] font-semibold'>
            or
          </div>
          <div className='w-1/3 border-t border-gray-300 ml-2'></div>
        </div>
      </div>

      <h1 className='text-lg font-bold text-center'>
        Sign up with your email address
      </h1>
      <RegisterForm />
    </main>
  );
}
