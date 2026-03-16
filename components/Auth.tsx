import { FaGoogle, FaMicrosoft } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

import Button from "./Button";

const Auth = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4 px-4 sm:px-6">
      
      <div className="flex w-full max-w-[459px] flex-col items-center gap-6 rounded-3xl bg-black/20 p-6 sm:p-8 md:p-10 backdrop-blur-lg">
        
        <Image src="/logo.gif" alt="Logo" width={50} height={50} />

        <p className="font-jakarta text-center text-lg sm:text-xl md:text-2xl font-semibold text-white">
          Welcome to Forescribe
        </p>

        <div className="font-poppins  flex w-full flex-col gap-4">
          
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

      <p className="font-poppins w-full max-w-[459px] text-left text-xs sm:text-[0.8125rem] text-white/90">
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

    </div>
  );
};

export default Auth;