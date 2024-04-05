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
            ขั้นตอนการยืนยันตัวตน
          </div>
          <div className="flex flex-col px-4 pb-4 justify-center items-center gap-1">
            <div className=" font-semibold"> Application ID : 118925</div>
            <div className="font-semibold text-center pt-4">
              ท่านกำลังยืนยันตัวตนเพื่อใช้ตามวัตถุประสงค์ของ
              บริษัทหลักทรัพย์จัดการกองทุน แลนด์ แอนด์ เฮ้าส์ จำกัด
              โปรดดำเนินการยืนยันตัวตนภายใน 1 ชม.
            </div>
          </div>
          <ol className="list-decimal px-4 pl-8">
            <li>
              กรุณาดำเนินการยืนยันตัวตนผ่าน Mobile Application หรือ Website
              ตามขั้นตอนของผู้พิสูจน์และยืนยันตัวตน (identity provider หรือ IdP)
              ที่ท่านเลือก
              โดยหมายเลขอ้างอิงการทำรายการเปิดบัญชีโดยยืนยันตัวตนผ่าน NDID (NDID
              Reference no.) ของท่านคือ 831645295
            </li>
            <li>
              เมื่อดำเนินการตามขั้นตอนที่ 1 เรียบร้อยแล้ว
              กรุณากลับเข้าสู่ระบบเปิดบัญชีที่นี้อีกครั้ง
              เพื่อทำการสมัครเปิดบัญชีต่อไป
            </li>
            <li>
              โดยท่านสามารถ Login เข้าระบบเปิดบัญชีเพื่อตรวจสอบสถานะใบสมัครได้
            </li>
          </ol>
          <Link href="4">
            <Button className="w-full mt-4 bg-teal-500">
              เช็คสถานะล่าสุดของ APPLICATION
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
