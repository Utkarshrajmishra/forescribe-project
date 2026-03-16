import { FaGoogle } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

import Button from "./Button";

const Auth = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex h-fit w-[460px] flex-col items-center gap-6 rounded-3xl bg-black/20 p-10 backdrop-blur-lg">
        <Image src="/logo.gif" alt="Logo" width={60} height={60} />
        <p className="font-jakarta text-center text-[1.375rem] font-semibold text-white">
          Welcome to Forescribe
        </p>
        <div className="font-poppins flex w-full flex-col gap-4">
          <Button variant="primary">
            <FaGoogle className="h-5 w-5" />
            Continue with Google
          </Button>
          <Button variant="secondary">
            <FaGoogle className="h-5 w-5" />
            Continue with Microsoft
          </Button>
        </div>
      </div>
      <p className="font-poppins w-[460px] text-[0.8125rem] text-white">
        By clicking “Continue with Google/Microsoft” above, you acknowledge that
        you have read and understood, and agree to Forescribe's{" "}
        <Link href="#" className="cursor-pointer text-[#8B3DFF] underline">
          Terms & Conditions{" "}
        </Link>{" "}
        and{" "}
        <Link href="#" className="cursor-pointer text-[#8B3DFF] underline">
          Privacy Policy.
        </Link>
      </p>
    </div>
  );
};

export default Auth;
