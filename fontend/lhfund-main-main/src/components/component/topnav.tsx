import Image from "next/image";
import { IoLanguage, IoMenuSharp, IoSearchSharp } from "react-icons/io5";

export function TopNav() {
  return (
    <>
      <div className="h-20 flex items-center justify-between ">
        <Image
          src="/logo-h-login.jpg"
          alt="logo"
          width={135}
          height={95}
        ></Image>

        <div className="flex justify-center gap-4 px-6">
          <IoSearchSharp className="text-2xl" />
          <IoLanguage className="text-2xl" />
          <IoMenuSharp className="text-2xl" />
        </div>
      </div>
      <div className="border-b-2"></div>
    </>
  );
}
