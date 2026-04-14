'use client';

import { BounceLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-white">
      <BounceLoader color="#3b82f6" size={20} />
      <p className="mt-4 text-black"> Friend Details Loading...</p>
    </div>
  );
}
