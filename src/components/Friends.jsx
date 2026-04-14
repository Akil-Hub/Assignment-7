"use client";

import { useDataContext } from "@/context/dataContext";
import FriendCard from "@/components/ui/FriendCard";
import { PacmanLoader } from "react-spinners";


const Friends = () => {
  const { friends } = useDataContext();
  return (
    <section className="wrapper pb-10">
      <h3 className="text-3xl font-bold text-gray-900 pb-8 text-center md:text-left">
        Your Friends
      </h3>

      <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center place-items-center items-center w-full">
        {friends.length === 0  ? (
          <p>Loading friends...... <PacmanLoader/></p>
        ) : (
          friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))
        )}
      </article>
    </section>
  );
};

export default Friends;
