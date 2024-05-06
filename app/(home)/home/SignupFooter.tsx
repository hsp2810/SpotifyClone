import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const SignupFooter = () => {
  return (
    <Link
      href={"/signup"}
      className={`${styles.footerbg} rounded-lg absolute w-[99%] bottom-1 py-3 px-4 flex items-center justify-between mt-2`}
    >
      <div className='flex flex-col'>
        <span className='uppercase text-sm font-light'>preview of spotify</span>
        <span className='text-md font-semibold'>
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </span>
      </div>

      <button className='text-md px-6 py-3 rounded-full font-semibold bg-white hover:font-bold text-black'>
        Sign up for free
      </button>
    </Link>
  );
};

export default SignupFooter;
