"use client";
import { Button } from "@/components/ui/button";
import { useDataContext } from "@/context/dataContext";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { CiBellOff } from "react-icons/ci";
import { FaArchive, FaPhone, FaVideo } from "react-icons/fa";
import { FaMessage, FaTextHeight } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { HashLoader } from "react-spinners";
import { toast } from "react-toastify";
const FriendDetails = () => {
  const { friends, timeline, setTimeline } = useDataContext();

  const { friendId } = useParams();
  const currentFriend = friends.find(
    (friend) => friend.id === Number(friendId),
  );

  if (!currentFriend) return <div className="flex justify-center items-center h-80 text-5xl"> <HashLoader className=" text-primary"/>Loading...</div>

  const {
    picture,
    id,
    name,
    days_since_contact,
    tags,
    email,
    status,
    bio,
    goal,
    next_due_date,
  } = currentFriend;

  // Function are here

  const handleAudioCall = (name) => {
    const audioCall = {
      name: name,
      status: "audioCall",
    };

    setTimeline([...timeline, audioCall]);
    toast.success(`Audio Calling to ${name}`);
  };
  const handleMessage = (name) => {
    const message = {
      name: name,
      status: "message",
      messageCount: 1,
    };
    setTimeline([...timeline, message]);
    toast.success(`Send Message to ${name}`);
  };
  const handleVideoCall = (name) => {
    const videoCall = {
      name: name,
      status: "videoCall",
      videoCallCount: 1,
    };
    setTimeline([...timeline, videoCall]);
    toast.success(`Video Calling to ${name}`);
  };
  return (
    <article className="wrapper flex flex-col md:flex-row gap-5 justify-between w-full ">
      <section className="w-full md:w-[36%]">
        <section
          key={id}
          className=" flex flex-col justify-center items-center space-y-3 card rounded-md shadow-lg hover:scale-105 duration-300 transition-all py-4 px-5"
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

          <button
            className={`text-white ${status === "overdue" ? "bg-red-500" : status === "almost due" ? "bg-amber-400" : "bg-primary"} rounded-full w-25  h-8`}
          >
            {status}
          </button>

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
          <p className="text-secondary font-semibold text-xs mx-auto w-full px-4 lg:text-md text-center break-all leading-relaxed">{bio}</p>
          <p className="text-secondary  font-semibold lg:text-md text-xs">Preferred: {email}</p>
        </section>
        <div className="flex flex-col gap-5 mt-5 items-center w-full">
          <Button variant="ghost" className={"shadow-md w-full "} size="lg">
            <CiBellOff /> Snooze 2 Weeks
          </Button>
          <Button variant="ghost" className={"shadow-md w-full "} size="lg">
            <FaArchive /> Archive
          </Button>
          <Button
            variant="ghost"
            className={"shadow-md w-full text-red-500 "}
            size="lg"
          >
            <MdDelete /> Delete
          </Button>
        </div>
      </section>
      <section className="w-full md:w-[64%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 content-start">

        <div className="bg-white text-center py-4 rounded-md border border-gray-200 shadow-xl h-30 col-span-3 md:col-span-1">
          <h4 className="text-xl text-primary font-semibold">
            {days_since_contact}
          </h4>
          <p className="text-secondary">Days Since Contact</p>
        </div>

        <div className="bg-white text-center py-4 rounded-md border border-gray-200 shadow-xl h-30  col-span-3 md:col-span-1">
          <h4 className="text-xl text-primary font-semibold">{goal}</h4>
          <p className="text-secondary">Goal (Days)</p>
        </div>

        <div className="bg-white text-center py-4 rounded-md border border-gray-200 shadow-xl h-30  col-span-3 md:col-span-1">
          <h4 className="text-xl text-primary font-semibold">
            {next_due_date}
          </h4>
          <p className="text-secondary">Next Due</p>
        </div>

        <div className="bg-white py-4 rounded-md col-span-3 flex justify-between border border-gray-200 shadow-xl px-4 h-25 items-center">
          <div>
            <h4 className="text-xl text-primary font-semibold">
              Relationship Goal
            </h4>
            <p className="text-secondary">
              Connect every <span className="text-primary">30 Days</span>
            </p>
          </div>
          <Button variant="ghost" className="border">
            Edit
          </Button>
        </div>

        <footer className="bg-white shadow-xl col-span-3 w-full rounded-md p-4">
          <h2 className="text-primary py-2 text-xl font-semibold">
            Quick Check-in
          </h2>
          <div className="flex flex-col lg:flex-row gap-3 items-center justify-between">
            <Button
              onClick={() => {
                handleAudioCall(name);
              }}
              variant="ghost"
              className="flex flex-col gap-1 bg-gray-50 border border-gray-200 w-full lg:w-50 h-30 text-2xl"
            >
              <FaPhone size={40} /> Call
            </Button>
            <Button
              onClick={() => {
                handleMessage(name);
              }}
              variant="ghost"
              className="flex flex-col gap-1 bg-gray-50 border border-gray-200 w-full lg:w-50 h-30 text-2xl"
            >
              <FaMessage size={40} /> Text
            </Button>
            <Button
              onClick={() => {
                handleVideoCall(name);
              }}
              variant="ghost"
              className="flex flex-col gap-1 bg-gray-50 border border-gray-200 w-full lg:w-50 h-30 text-2xl"
            >
              <FaVideo size={40} /> Video
            </Button>
          </div>
        </footer>
      </section>
    </article>
  );
};

export default FriendDetails;
