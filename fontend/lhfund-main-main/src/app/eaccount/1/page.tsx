"use client";
import { TopNav } from "@/components/component/topnav";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { addTweet } from "@/lib/actionLogin";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

import * as React from "react";

function Section1() {
  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <Button className=" w-full bg-teal-500" type="submit" disabled={pending}>
        {pending ? (
          <div className="flex">
            {" "}
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <div>กำลังโหลด</div>
          </div>
        ) : (
          "ถัดไป"
        )}
      </Button>
    );
  }
  return (
    <>
      <div className="flex justify-between">
        <div className="flex px-4 pt-8 pb-8 w-full items-center justify-center font-semibold text-2xl text-teal-600">
          LHFund E-Open Account
        </div>
      </div>
      <form className="flex flex-col  w-full space-x-2" action={addTweet}>
        <div className="px-4 flex flex-col gap-2">
          <div className="text-gray-500 text-sm">ชื่อจริง</div>
          <Input required name="firstname" />
          <div className="text-gray-500 text-sm">นามสกุล</div>
          <Input required name="lastname" />
          <div className="text-gray-500 text-sm"> หมายเลขบัตรประชาชน</div>
          <Input required name="idcard" />
          <div className="text-gray-500 text-sm">
            วันเดือนปีเกิดที่ปรากฎในบัตรประชาชน
          </div>
          <div className="flex gap-2">
            <Input required name="day" placeholder="วัน" />
            <Input required name="phonenumber" placeholder="เดือน" />
            <Input required name="phonenumber" placeholder="ปี" />
          </div>
          <div className="text-gray-500 text-sm">อีเมล</div>
          <Input required name="email" />
          <div className="text-gray-500 text-sm">เลขหลังบัตรประชาชน</div>
          <Input required name="email" />
          <div className="text-gray-500 text-sm">โทรศัพท์มือถือ</div>
          <Input className="mb-8" required name="email" placeholder="+66 |" />
          <SubmitButton />
          <Button className="bg-slate-500">เข้าสู่ระบบ</Button>
        </div>
      </form>
    </>
  );
}

export default function Page() {
  const [state, setState] = React.useState(1);

  return (
    <>
      <div className="max-w-md mx-auto">
        <div className="h-20 flex items-center justify-center ">
          <Image
            src="/logo-h-login.jpg"
            alt="logo"
            width={135}
            height={95}
          ></Image>
        </div>
        <div className="border-b-2"></div>
        <Section1 />
      </div>
    </>
  );
}
