import { Button } from "@/components/ui/button";
import React from "react";

const Banner = () => {
  return (
    <section className="wrapper text-center">
      <h1 className="md:text-4xl text-2xl font-bold text-gray-800 ">
        Friends to keep close in your life
      </h1>
      <p className="text-secondary md:w-130 mx-auto py-3 break-all text-xs md:text-base">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <Button className={'text-white py-3'} size="sm">+ Add a Friend</Button>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 wrapper  justify-items-center gap-x-7 gap-y-5 py-10 border-b border-gray-200">

        <div className=" bg-white text-center py-4 rounded-md w-full">
            <h4 className="text-xl text-primary font-semibold">8</h4>

            <p className="text-secondary ">Total Friends</p>
        </div>
        <div className=" bg-white text-center py-4 ro unded-md w-full">
            <h4 className="text-xl text-primary font-semibold">3</h4>

            <p className="text-secondary ">On Track</p>
        </div>
        <div className=" bg-white text-center py-4 rounded-md w-full">
            <h4 className="text-xl text-primary font-semibold">6</h4>

            <p className="text-secondary ">Need Attention</p>
        </div>
        <div className=" bg-white text-center py-4 rounded-md w-full">
            <h4 className="text-xl text-primary font-semibold">12</h4>

            <p className="text-secondary ">Interactions This Month  </p>
        </div>
      </div>


    </section>
  );
};

export default Banner;
