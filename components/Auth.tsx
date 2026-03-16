import { FaGoogle } from "react-icons/fa";

import Image from "next/image";

import Button from "./Button";

const Auth = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex w-115 flex-col items-center gap-6 rounded-3xl bg-black/20 p-10 backdrop-blur-lg">
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

      <p className="font-poppins w-115 text-left text-[0.8125rem] text-white">
        By clicking “Continue with Google/Microsoft” above, you acknowledge that
        you have read and understood, and agree to Forescribe's{" "}
        <span className="text-[#8B3DFF] underline">Terms & Conditions</span> and{" "}
        <span className="text-[#8B3DFF] underline">Privacy Policy</span>.
      </p>
    </div>
  );
};

export default Auth;
