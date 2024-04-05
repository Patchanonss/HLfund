"use client";
import Image from "next/image";
import { IoLogInOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { IoLanguage } from "react-icons/io5";

import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { TopNav } from "@/components/component/topnav";
import { FaUserPlus } from "react-icons/fa6";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentArrowUp,
} from "react-icons/hi2";

export default function Page() {
  return (
    <div className="flex flex-col  max-w-md  mx-auto">
      <TopNav />
      <div className="mt-12 flex flex-col gap-2 mx-4">
        <Link href="/login">
          <Button className="  w-full  flex items-center justify-center text-white bg-teal-500 gap-1">
            <IoLogInOutline className=" text-2xl" />
            <div className="text-base font-semibold"> เข้าสู่ระบบ </div>
          </Button>
        </Link>
        <Link href="/register">
          <Button className="  w-full  flex items-center justify-center text-white bg-teal-500 gap-1">
            <FaUserPlus className=" text-xl" />
            <div className="text-base font-semibold"> ลงทะเบียน </div>
          </Button>
        </Link>
        <Link href="/eaccount">
          <Button className=" mt-8 w-full  flex items-center justify-center text-white bg-teal-500 gap-1">
            <HiOutlineClipboardDocumentList className=" text-xl" />
            <div className="text-base font-semibold"> เปิดบัญชี E-Account </div>
          </Button>
        </Link>
        <Link href="/eaccount/login">
          <Button className="w-full  flex items-center justify-center text-white bg-teal-500 gap-1">
            <HiOutlineDocumentArrowUp className=" text-xl" />
            <div className="text-base font-semibold">
              {" "}
              เข้าสู่ระบบ E-Account{" "}
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
}
