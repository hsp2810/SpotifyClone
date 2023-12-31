"use client";

import { LoginUser, RegisterUser } from "@/types";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const defUser: LoginUser = {
  email: "First User",
  password: "password",
};

const RegisterForm = () => {
  const [user, setUser] = useState<LoginUser>(defUser);
  const router = useRouter();

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <form className='w-[40%] m-auto mt-7'>
      <Field
        handleChange={handleChange}
        type='email'
        title='What’s your email address?'
        htmlFor={"email"}
        id='email'
        name='email'
        placeholder='Enter your email.'
        value={user?.email}
      />
      <Field
        handleChange={handleChange}
        type='password'
        title='What’s your password'
        htmlFor={"password"}
        id='password'
        name='password'
        placeholder='Create a password.'
        value={user?.password}
      />

      <button
        className='text-black font-bold rounded-full py-3 px-8 bg-[#1ed760] text-lg hover:scale-105 block m-auto'
        onClick={() => {
          signIn();
        }}
      >
        Login
      </button>

      <p className='text-center mt-5'>
        Don't have an account?{" "}
        <Link href={"/signup"} className='text-[#1DB954]'>
          Sign up
        </Link>
        .
      </p>
    </form>
  );
};

interface FieldProps {
  title: string;
  htmlFor: string;
  id: string;
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  handleChange: (e: any) => void;
}

const Field = ({
  id,
  placeholder,
  value,
  name,
  title,
  htmlFor,
  type,
  handleChange,
}: FieldProps) => {
  return (
    <div className='flex flex-col gap-2 mb-7'>
      <label htmlFor={htmlFor} className='font-semibold text-sm'>
        {title}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className='bg-white rounded-md border border-gray-500 px-4 py-3 shadow-xs shadow-[#878787] transition hover:border-black focus:outline-none focus:border-black'
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

interface RadioProps {
  title: string;
  htmlFor: string;
  id: string;
  name: string;
  value: string;
  handleRadioChange: (e: any) => void;
}

const Radio = ({
  title,
  htmlFor,
  id,
  name,
  value,
  handleRadioChange,
}: RadioProps) => {
  return (
    <div>
      <input
        type='radio'
        id={id}
        name={name}
        className='bg-white rounded-md border border-gray-500 px-4 py-3 shadow-xs shadow-[#878787] transition hover:border-black focus:outline-none focus:border-black'
        onChange={handleRadioChange}
        value={value}
      />
      <label htmlFor={htmlFor} className='ml-2'>
        {title}
      </label>
    </div>
  );
};

export default RegisterForm;
