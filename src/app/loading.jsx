'use client';

import { PacmanLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 text-white">
      <PacmanLoader color="#3b82f6" size={20} />
      <p className="mt-4 text-black"> Global Loading...</p>
    </div>
  );
}
