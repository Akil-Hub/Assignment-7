'use client'

import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 text-white px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        
        <p className="mt-4 text-2xl text-primary">
          Page not found
        </p>

        <Link
          href="/"
          className="flex items-center gap-3 mt-6 px-6 py-3 bg-primary  hover:bg-green-900 rounded-lg transition"
        >
            <FaHome/>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
