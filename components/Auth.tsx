import Image from "next/image";
import Button from "./Button";
import { FaGoogle } from "react-icons/fa";

const Auth = () => {
  return (
    <div className="w-[460px] bg-black/20 p-10 rounded-3xl h-fit backdrop-blur-lg flex flex-col items-center gap-6">
      <Image src="/logo.gif" alt="Logo" width={60} height={60} />
      <p className="text-white font-jakarta text-[1.375rem] font-semibold text-center">
        Welcome to Forescribe
      </p>
      <div className="flex flex-col font-poppins w-full gap-4">
        <Button variant="primary" >
          <FaGoogle className="w-5 h-5" />
          Continue with Google
        </Button>
        <Button variant="secondary">
          <FaGoogle className="w-5 h-5" />
          Continue with Microsoft
        </Button>
      </div>
    </div>
  );
};

export default Auth;