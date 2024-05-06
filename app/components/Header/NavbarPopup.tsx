"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

interface PageProps {
  isOpen: boolean;
}

const NavbarPopup = ({ isOpen }: PageProps) => {
  return (
    <>
      {isOpen && (
        <main className='bg-[#282828] flex flex-col absolute rounded-md top-[4em] px-3 py-2 right-[2em] z-[999] shadow-lg'>
          <Link
            href={"/profile"}
            className='font-bold text-sm hover:bg-black p-3 my-1 rounded-md'
          >
            Account
          </Link>
          <button
            onClick={() => signOut()}
            className='font-bold text-sm hover:bg-red-500 text-center p-3 my-1 rounded-md'
          >
            Logout
          </button>
        </main>
      )}
    </>
  );
};

export default NavbarPopup;
