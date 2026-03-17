"use client"
import { FaGoogle, FaMicrosoft } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

import {motion} from "framer-motion";

import Button from "./Button";

const Auth = () => {
  return (
    <motion.div 
    initial={{opacity:0, scale:0}}
    animate={{opacity:1, scale:1}}
    transition={{
                duration: 0.6,
            }}
    className="flex w-full flex-col items-center gap-4 px-4 sm:px-6">
      <div className="flex w-full max-w-[459px] flex-col items-center gap-6 rounded-3xl bg-black/20 p-6 backdrop-blur-lg sm:p-8 md:p-10">
        <Image src="/logo.gif" alt="Logo" width={50} height={50} />

        <p className="font-jakarta text-center text-lg font-semibold text-white sm:text-xl md:text-2xl">
          Welcome to Forescribe
        </p>

        <div className="font-poppins flex w-full flex-col gap-4">
          <Button variant="primary">
            <FaGoogle className="size-5" />
            Continue with Google
          </Button>

          <Button variant="secondary">
            <FaMicrosoft className="size-5" />
            Continue with Microsoft
          </Button>
        </div>
      </div>

      <p className="font-poppins w-full max-w-[459px] text-left text-xs text-white/90 sm:text-[0.8125rem]">
        By clicking “Continue with Google/Microsoft” above, you acknowledge that
        you have read and understood, and agree to Forescribe's{" "}
        <Link href="#" className="text-[#8B3DFF] underline">
          Terms & Conditions
        </Link>{" "}
        and{" "}
        <Link href="#" className="text-[#8B3DFF] underline">
          Privacy Policy.
        </Link>
      </p>
    </motion.div>
  );
};

export default Auth;
