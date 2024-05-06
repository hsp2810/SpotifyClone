"use client";

import { RegisterUser } from "@/types";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const defUser: RegisterUser = {
  email: "firstuser@gmail.com",
  password: "password",
  name: "Harshit Patel",
  dob: "",
  gender: "",
};

const RegisterForm = () => {
  const [user, setUser] = useState<RegisterUser>(defUser);
  const router = useRouter();

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (e: any) => {
    console.log(e.target.value);
    setUser({ ...user, gender: e.target.value });
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-type": "application/jsons",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        await signIn("credentials", {
          email: user.email,
          password: user.password,
          callbackUrl: "/",
        });
      }
    } catch (error) {
      console.log(error);
    }
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
        title='Create a password'
        htmlFor={"password"}
        id='password'
        name='password'
        placeholder='Create a password.'
        value={user?.password}
      />
      <Field
        handleChange={handleChange}
        type='name'
        title='What should we call you?'
        htmlFor={"name"}
        id='name'
        name='name'
        placeholder='Enter a profile name.'
        value={user?.name}
      />
      <div className='flex flex-col gap-2 mb-7'>
        <label htmlFor={"dob"} className='font-semibold text-sm'>
          What’s your date of birth?
        </label>
        <input
          type={"date"}
          id={"dob"}
          name={"dob"}
          className='bg-white rounded-md border border-gray-500 px-4 py-3 shadow-xs shadow-[#878787] transition hover:border-black focus:outline-none focus:border-black'
          value={user.dob}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col gap-2 mb-7'>
        <label htmlFor={"dob"} className='font-semibold text-sm'>
          What’s your gender?
        </label>

        <div className='flex gap-5'>
          <Radio
            handleRadioChange={handleRadioChange}
            title='Male'
            htmlFor={"male"}
            value='Male'
            id='male'
            name='gender'
          />
          <Radio
            handleRadioChange={handleRadioChange}
            title='Female'
            htmlFor={"female"}
            value='Female'
            id='female'
            name='gender'
          />
          <Radio
            handleRadioChange={handleRadioChange}
            title='Other'
            htmlFor={"other"}
            value='Other'
            id='other'
            name='gender'
          />
        </div>
      </div>

      <p className='mb-5'>
        We may send you emails with news or promotions occasionally. Go to your
        Email notifications page to control the messages we send.
      </p>

      <div className='flex items-start gap-2 mb-7'>
        <input
          type='checkbox'
          name='advertisements'
          id='advertisements'
          className='mt-1 bg-white'
        />
        <label htmlFor='advertisements' className='text-sm font-light'>
          Share my registration data with Spotify’s content providers for
          marketing purposes..
        </label>
      </div>

      <div className='flex items-start gap-2 mb-7'>
        <input
          type='checkbox'
          name='terms'
          id='terms'
          className='mt-1 bg-white'
        />
        <label htmlFor='terms' className='text-sm font-light'>
          I agree to the{" "}
          <Link href={"/"} className='underline text-[#1DB954]'>
            Spotify Terms and Conditions of Use
          </Link>{" "}
          and
          <Link href={"/"} className='underline text-[#1DB954]'>
            &nbsp; Privacy Policy.
          </Link>{" "}
        </label>
      </div>

      <button
        className='text-black font-bold rounded-full py-3 px-8 bg-[#1ed760] text-lg hover:scale-105 block m-auto'
        onClick={handleSubmit}
      >
        Sign up
      </button>

      <p className='text-center mt-5'>
        Have an account?{" "}
        <Link href={"/login"} className='text-[#1DB954]'>
          Log in
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
