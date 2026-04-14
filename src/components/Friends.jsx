"use client";
import React from "react";
import Image from "next/image";
import { useDataContext } from "@/context/dataContext";
import FriendCard from "@/components/ui/FriendCard";
import { Field } from "@base-ui/react";

const Friends = () => {
  const { friends } = useDataContext();
  return (
    <section className="wrapper">
      <h3 className="text-3xl font-bold text-gray-900 pb-8">Your Friends</h3>

      <article className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {friends.map((friend) => (
         <FriendCard key={friend.id} friend={friend}/>
        ))}
      </article>
    </section>
  );
};

export default Friends;
