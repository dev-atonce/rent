"use client";

import { Logo } from "@/components/main/Logo/Logo";
import { GoOrganization } from "react-icons/go";
import { BsPersonFill, BsPinMap } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";
import { FaCalendarDays, FaPeopleGroup } from "react-icons/fa6";
import { LuShip } from "react-icons/lu";

export default function CompanyProfile({ lng }: any) {
  const text: any = {
    en: {
      name: "HANKYU HANSHIN EXPRESS (THAILAND) CO.,LTD.",
      "head-office": `TAC House, 5th-7th Floor, No1 Soi Ruamruedee, Ploenchit Road, Lumpinee, Pathumwan, Bangkok 10330, Thailand\n\rTel : 02-126-8500 FAX : 02-650-8023`,
      paid: "THB 20,000,000",
      established: "February 7, 1992",
      representative: "Mr.Hiromichi Funata / Managing Director",
      employee:
        "Total 434 persons (Thai Staff 427 persons ),(Japanese 7 persons ) as of Apr 2024",
      business: "",
    },
    th: {
      name: "บริษัท ฮันคิว ฮันชิน เอ็กซ์เพรส (ประเทศไทย) จำกัด",
      "head-office":
        "TAC House ชั้น 5-7 เลขที่ 1 ซอยร่วมฤดี ถนนเพลินจิต ลุมพินี ถนนสามสาย กรุงเทพฯ 10330 ประเทศไทย\r\nTel : 02-126-8500 FAX : 02-650-8023",
      paid: "20,000,000 บาท",
      established: "7 กุมภาพันธ์ 2535",
      representative: "นาย. ฮิโรมิจิ ฟูนาตะ / กรรมการผู้จัดการ",
      employee:
        "รวม 434 คน (พนักงานไทย 427 คน ),(คนญี่ปุ่น 7 คน) ณ เมษายน 2567",
      business: "",
    },
  };
  return (
    // todo
    <>
      <div className="bg-slate-50/20 from-blue-100 rounded-xl mt-4 p-10 md:p-20 text-[#002B7F]">
        <div className="w-full flex justify-center pb-20">
          <Logo color="#002B7F" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1 border border-slate-400 px-4 py-6 rounded-lg shadow-md">
            <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300">
              <GoOrganization size={20} />
              ชื่อบริษัท
            </div>
            <div className="col-span-5 md:col-span-4">
              <h1 className="font-semibold">บริษัท เร้นท์ (ประเทศไทย) จำกัด</h1>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1   border border-slate-400 px-4 py-6 rounded-lg shadow-md">
            <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300">
              <FaCalendarDays size={20} />
              วันที่ก่อตั้งบริษัท
            </div>
            <div className="col-span-5 md:col-span-4">
              วันที่ 8 กุมภาพันธ์ พ.ศ. 2551
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1   border border-slate-400 px-4 py-6 rounded-lg shadow-md">
            <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300">
              <TbReportMoney size={20} />
              ทุนจดทะเบียนชำระแล้ว
            </div>
            <div className="col-span-5 md:col-span-4">420 ล้านบาท</div>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1   border border-slate-400 px-4 py-6 rounded-lg shadow-md">
            <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300">
              <BsPinMap size={20} />
              ที่อยู่ของบริษัท
            </div>
            <div className="col-span-5 md:col-span-4">22</div>
          </div>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1   border border-slate-400 px-4 py-6 rounded-lg shadow-md">
            <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300">
              <BsPersonFill size={20} />
              จุดมุ่งหมายของบริษัท
            </div>
            <div className="col-span-5 md:col-span-4">
              ประกอบธุรกิจให้บริการเช่ารถ เครื่องจักร
              และอุปกรณ์ทางด้านงานอุตสาหกรรม งานก่อสร้าง
              งานติดตั้งเครื่องจักรประเภทต่างๆ　อาทิ รถขุด รถบด
              รถกระเช้าที่ใช้ในที่สูง, รถยก, เครื่องอัดลม, เครื่องปั่นไฟ,
              อุปกรณ์ช่วยในการยก ตู้แอร์เคลื่อนที่ และอื่นๆอีกมากมาย
              ให้แก่ลูกค้าทั่วไปในประเทศไทย
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1   border border-slate-400 px-4 py-6 rounded-lg shadow-md">
            <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300">
              <FaPeopleGroup size={20} />
              รายชื่อกรรมการบริษัท
            </div>
            <div className="col-span-5 md:col-span-4">
              <ol className="decimal">
                <li>นายชิเกะยูกิ ทามูระ</li>
                <li>นายอากิระ โอกาดะ </li>
                <li>นายคาซึฮิสะ โอกาดะ</li>
                <li>นางมัลลิกา ชารินสา</li>
                <li>นายกิตติพงษ์ เศรษฐเวคิน</li>
                <li>นางสาวรสลิน จรรยาศักดิ์</li>
              </ol>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1   border border-slate-400 px-4 py-6 rounded-lg shadow-md">
            <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300">
              <LuShip size={20} />
              รายชื่อผู้ถือหุ้น
            </div>
            <div className="col-span-5 md:col-span-4">
              <ol className="decimal">
                <li>Air Freight</li>
                <li>Sea Freight </li>
                <li>Cross Border and In-transit Freight</li>
                <li>Customs Clearance and Domestic Transportation</li>
                <li>Warehouse and Distribution </li>
                <li>
                  Value Added Service : Packing, re-pallet, sorting, inspection,
                  on-site. etc.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
