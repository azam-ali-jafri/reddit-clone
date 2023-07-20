import { FC } from "react";
import Logo from "../assest/logo.svg";
import Image from "next/image";
import Link from "next/link";
import UserAuthForm from "./UserAuthForm";

const SignIn: FC = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Image src={Logo} alt="logo" className="mx-auto h-6 w-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Welcome Back</h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up a reddit clone account and agree to
          our User Agreement and Privacy Policy.
        </p>

        <UserAuthForm />

        {/* <p className="px-8 text-center text-sm text-zinc-700">
          New to Reddit Clone?{" "}
          <Link
            href="/sign-up"
            className="hover:text-zinc-800 text-sm underline underline-offset-4"
          >
            Sign Up
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default SignIn;
