"use client";
import AudioCall from "@/components/ui/AudioCall";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Text from "@/components/ui/Text";
import VideoCall from "@/components/ui/VideoCall";
import { useDataContext } from "@/context/dataContext";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Timeline = () => {
  const [filter, setFilter] = useState("All");
  const { timeline } = useDataContext();

  const filteredData = filter === 'All' ? timeline : timeline.filter((o) => o.status === filter);

  return (
    <>
      <section className="flex items-center gap-5">
        <h3 className="text-3xl font-semibold text-primary ml-20 py-5">
          Timeline
        </h3>
        <DropdownMenu >
          <DropdownMenuTrigger className="flex items-center gap-2 border px-4 py-2 rounded-md text-sm text-primary">
            {filter} <ChevronDown size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className={'bg-white'}>
            <DropdownMenuItem onClick={() => setFilter("All")}>
              All
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilter("audioCall")}>
              Audio Call
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilter("message")}>
              Message
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilter("videoCall")}>
              Video Call
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
      <section className=" wrapper ">
        <div className="flex flex-col gap-4 pb-10">
        {!timeline && <p>Loading.......</p>}

          {filteredData.length < 1 ? (
            <span className="text-5xl text-primary flex justify-center items-center h-[30vh]">
              Timeline is Empty!!
            </span>
          ) : (
            filteredData?.map((occurrence, index) =>
              occurrence.status === "audioCall" ? (
                <AudioCall key={index} name={occurrence.name} />
              ) : occurrence.status === "message" ? (
                <Text key={index} name={occurrence.name} />
              ) : occurrence.status === "videoCall" ? (
                <VideoCall name={occurrence.name} key={index} />
              ) : null,
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Timeline;
