import Banner from "@/components/Banner";
import Friends from "@/components/Friends";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <article className="bg-body min-h-screen">
        <Banner />
        <Friends />
      </article>
    </>
  );
}
