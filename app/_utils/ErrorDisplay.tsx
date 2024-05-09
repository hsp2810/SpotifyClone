import { CircleAlert } from "lucide-react";
import React from "react";

export default function ErrorDisplay({ error }: { error: string | undefined }) {
  return (
    <div className='bg-red-300 w-fit m-auto text-red-900 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive'>
      <CircleAlert className='h-4 w-4' />
      <p className='text-bold'>{error}</p>
    </div>
  );
}
