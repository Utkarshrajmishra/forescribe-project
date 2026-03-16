import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full">
      <Link
        href="#"
        className="mx-auto flex items-center px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 lg:px-12 lg:py-8"
      >
        <Image
          src="/logo.svg"
          alt="Logo"
          width={163}
          height={38}
          priority
          className="h-auto w-28 sm:w-32 md:w-36 lg:w-40"
        />
      </Link>
    </header>
  );
};

export default Header;
