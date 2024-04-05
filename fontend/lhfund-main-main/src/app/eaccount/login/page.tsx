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
        <div className="flex flex-col px-4 pt-8 pb-8 w-full items-center justify-center ">
          <div className="font-semibold text-2xl text-teal-600">
            LHFund E-Open Account
          </div>
        </div>
      </div>
      <form className="flex flex-col  w-full space-x-2" action={addTweet}>
        <div className="px-4 flex flex-col gap-2">
          <div className="text-gray-500 text-sm"> หมายเลขบัตรประชาชน</div>
          <Input required name="idcard" />
          <div className="text-gray-500 text-sm pt-4 ">
            ระบบจะทำการส่ง OTP ไปยังหมายเลขโทรศัพท์ที่คุณลงทะเบียนไว้
          </div>
          <SubmitButton />
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
