"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import ProfilePicture from "@/../public/images/profilePicture.webp";
import Image from "next/image";
import NavbarPopup from "./NavbarPopup";
import UnprotectedHeader from "./UnprotectedHeader";

const Navbar = () => {
  const { status, data } = useSession();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleNavPopup = () => setIsOpen(!isOpen);

  return (
    <div className=''>
      {status === "loading" ? (
        ""
      ) : status === "unauthenticated" ? (
        <UnprotectedHeader />
      ) : (
        <div className='flex gap-6 items-center' ref={navbarRef}>
          <Link
            href={"/getpremium"}
            className='text-sm font-bold w-fit py-2 px-4 rounded-full bg-white text-black hover:scale-105'
          >
            Explore Premium
          </Link>
          <button
            className='w-[2rem] rounded-full hover:scale-105'
            onClick={toggleNavPopup}
          >
            <Image
              src={ProfilePicture}
              alt='Profile Image not found'
              className='w-fit rounded-full'
            />
          </button>

          {/* Navbar Popup */}
          <NavbarPopup isOpen={isOpen} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
