import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FriendCard = ({friend}) => {
  return (
   <Link href={`/${friend.id}`}>
     <section
            key={friend.id}
            className="w-64 flex flex-col justify-center items-center space-y-3 card rounded-md shadow-lg hover:scale-105 duration-300 transition-all py-4 px-5"
          >
            <Image
              src={friend.picture}
              height={100}
              width={100}
              alt='friend'
              className="rounded-full object-cover mx-auto"
            />

            <h4 className="text-2xl font-semibold text-gray-900">
              {friend.name}
            </h4>
            <p className="text-secondary py-1">
              {friend.days_since_contact}d ago
            </p>

            <div className="flex gap-2 items-center">
              {friend.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-green-200 text-green-800 px-3 py-1 rounded-2xl"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              className={`text-white ${friend.status === "overdue" ? "bg-red-500" : friend.status === "almost due" ? "bg-amber-400" : "bg-primary"} rounded-full w-25  h-8`}
            >
              {friend.status}
            </button>
          </section>
   </Link>
  )
}

export default FriendCard