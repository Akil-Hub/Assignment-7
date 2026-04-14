"use client";
import { useDataContext } from "@/context/dataContext";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
const FriendDetails = () => {
  const { friends } = useDataContext();

  const { friendId } = useParams();
  const currentFriend = friends.find(
    (friend) => friend.id === Number(friendId),
  );

  if(!currentFriend) return <p>Loading...</p>
  console.log(currentFriend)
  const { picture, id, name, days_since_contact, tags } = currentFriend;
  return (
    <section>
      <section
        key={id}
        className="w-64 flex flex-col justify-center items-center space-y-3 card rounded-md shadow-lg hover:scale-105 duration-300 transition-all py-4 px-5"
      >
        <Image
          src={picture}
          height={100}
          width={100}
          alt="image"
          className="rounded-full object-cover mx-auto"
        />

        <h4 className="text-2xl font-semibold text-gray-900">{name}</h4>
        <p className="text-secondary py-1">{days_since_contact}d ago</p>

        <div className="flex gap-2 items-center">
          {tags?.map((tag, idx) => (
            <span
              key={idx}
              className="bg-green-200 text-green-800 px-3 py-1 rounded-2xl"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          className={`text-white ${status === "overdue" ? "bg-red-500" : status === "almost due" ? "bg-amber-400" : "bg-primary"} rounded-full w-25  h-8`}
        >
          {status}
        </button>
      </section>
    </section>
  );
};

export default FriendDetails;
