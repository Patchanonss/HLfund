"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
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
        <div className="flex px-4 pt-8 pb-4 w-full items-center justify-center font-semibold text-2xl text-teal-600">
          LHFund E-Open Account
        </div>
        <div className="px-4">
          <div className="text-lg font-semibold">
            ข้อมูลที่ลูกค้าต้องเตรียมพร้อมก่อนการเปิดบัญชี
          </div>
          <ul className="list-disc pl-4">
            <li>บัตรประจำตัวประชาชน</li>
            <li>
              สมุดบัญชีเงินฝากธนาคารชื่อบัญชีตรงตามชื่อผู้ขอเปิดบัญชี
              (ประเภทบัญชีออมทรัพย์/เดินสะพัด){" "}
            </li>
            <li>
              เพื่อให้สามารถเปิดบัญชีออนไลน์ได้อย่างสมบูรณ์ ลูกค้าต้องมี mobile
              application ของธนาคารที่ใช้ยืนยันตัวตนดังต่อไปนี้
              ธนาคารกรุงศรีอยุธยา (BAY), ธนาคารกรุงเทพ (BBL), ธนาคารกรุงไทย
              (KTB), ธนาคารกสิกรไทย (KBANK), ธนาคารทหารไทย (TMB)
            </li>
          </ul>
          <div className="pt-4 text-lg font-semibold">เงื่อนไขการเปิดบัญชี</div>
          <ul className="pb-4 list-disc pl-4">
            <li>ไม่รองรับการเปิดบัญชีประเภทนิติบุคคล</li>
            <li>
              ไม่รองรับการเปิดบัญชีผู้เยาว์ หรือบุคคลธรรมดาที่มีอายุน้อยกว่า 20
              ปีบริบูรณ์
            </li>
          </ul>
          <Link href="eaccount/1">
            {" "}
            <Button className="w-full bg-teal-500">เปิดบัญชี</Button>
          </Link>
          <div className="text-center pt-4">
            หากกรอกข้อมูลไว้อยู่แล้ว{" "}
            <Link href="login">
              <span className=" text-teal-500">เข้าสู่ระบบ</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
