import Link from "next/link";
import React from "react";
import { Icons } from "./Icons";
import Logo from "../assest/logo.svg";
import Image from "next/image";
import { buttonVariants } from "./ui/Button";

const Navbar = () => {
  return (
    <div className="fixed top-0 inset-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/" className="flex gap-2 items-center">
          {/* <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" /> */}
          <Image src={Logo} className="h-8 w-8 sm:h-6 sm:w-6" alt="logo" />
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Reddit
          </p>
        </Link>
        <Link href="/sign-in" className={buttonVariants()}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
