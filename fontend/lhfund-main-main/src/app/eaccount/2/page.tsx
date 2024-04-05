"use client";
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
            เลือกรูปแบบการยืนยันตัวตน
          </div>
          <div className="pb-4 font-semibold text-center">
            เลือกรูปแบบการยืนยันตัวตนสำหรับการเปิดบัญชี
          </div>
          <Link href="3">
            <div className="border p-4">
              <div className="flex justify-center items-center gap-2 ">
                <Image
                  src="/ndid.png"
                  alt="logo"
                  width={100}
                  height={165}
                ></Image>
                <FaMobileScreenButton className="text-4xl text-gray-600" />
              </div>
              <div className="font-semibold pt-4">
                ยืนยันตัวตนโดย National Digital ID (NDID)
                แบบผ่านแอปพลิเคชั่นของผู้ให้บริการพิสูจน์และยืนยันตัวตน เช่น
                ธนาคาร
              </div>
              <div className="text-gray-600 pt-2">
                เคยสมัคร NDID กับธนาคารหรือผู้ให้บริการ NDID และมีแอป Mobile
                Banking หรือแอปของผู้ให้บริการ
              </div>
            </div>
          </Link>
          <Link href="3">
            <div className="border p-4 mt-4">
              <div className="flex justify-center items-center gap-2 ">
                <Image
                  src="/ndid.png"
                  alt="logo"
                  width={100}
                  height={165}
                ></Image>
                <FaRegCreditCard className="text-4xl text-gray-600" />
              </div>
              <div className="font-semibold pt-4">
                ยืนยันตัวตนโดย National Digital ID (NDID)
                แบบผ่านแอปพลิเคชั่นของผู้ให้บริการพิสูจน์และยืนยันตัวตน เช่น
                ธนาคาร
              </div>
              <div className="text-gray-600 pt-2">
                เคยสมัคร NDID กับธนาคารหรือผู้ให้บริการ NDID และมีแอป Mobile
                Banking หรือแอปของผู้ให้บริการ
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
