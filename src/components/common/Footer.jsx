import Image from "next/image";
import React from "react";
import footerLogo from "@/assets/logo-xl.png";
import facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import twitter from "@/assets/twitter.png";
const Footer = () => {
  return (
    <footer className=" bg-primary">
      <section className="wrapper py-5 ">
        <Image
          src={footerLogo}
          alt={"logo"}
          width={350}
          height={60}
          className="mx-auto pt-10"
        />
        <p className="text-gray-300 py-4 text-center text-lg">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <h5 className="text-center text-gray-300 text-xl">Social Links</h5>
        <div className="flex gap-3 justify-center py-4">
          <Image src={facebook} alt={"facebook"} width={50} height={50} />
          <Image src={instagram} alt={"instagram"} width={50} height={50} />
          <Image src={twitter} alt={"twitter"} width={50} height={50} />
        </div>

        <div className="flex justify-between py-4 items-center text-gray-300 text-sm">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="text-gray-300 flex items-center gap-10">
            <p>Privacy Policy</p>
            <p>Terms of Services</p>
            <p>Cookies</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
