import React from "react";

const Icon = ({ icon }: { icon: any }) => {
  return (
    <span className='mr-1 cursor-pointer transition delay-50 hover:bg-black rounded-full p-3 text-gray-300 hover:text-white'>
      {icon}
    </span>
  );
};

export default Icon;
