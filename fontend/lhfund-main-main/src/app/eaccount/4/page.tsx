"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import * as React from "react";
import { FaMobileScreenButton, FaRegCreditCard } from "react-icons/fa6";

export default function Page() {
  const [state, setState] = React.useState(1);

  return (
    <>
      <div className="max-w-md mx-auto text-slate-700">
        <div className="h-20 flex items-center justify-center ">
          <Image
            src="/logo-h-login.jpg"
            alt="logo"
            width={135}
            height={95}
          ></Image>
        </div>
        <div className="border-b-2"></div>
        <div className="px-4 flex flex-col gap-2 pt-4">
          <div className="pt-4 text-2xl text-center font-bold text-teal-500">
            ท่านทำการยืนยันตัวตนผ่าน NDID สำเร็จแล้ว
          </div>
          <div className="flex flex-col px-4 pb-4 justify-center items-center gap-1">
            <div className=" font-semibold"> Application ID : 118925</div>
            <div className="font-semibold text-center pt-4">
              กรุณาทำการสมัครเปิดบัญชีต่อไป
            </div>
          </div>

          <Link href="/login">
            <Button className="w-full mt-4 bg-teal-500">ดำเนินการต่อ</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
