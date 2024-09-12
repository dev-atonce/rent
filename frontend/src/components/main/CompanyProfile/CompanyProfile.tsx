"use client";

import { Logo } from "@/components/main/Logo/Logo";
import { GoOrganization } from "react-icons/go";
import { BsPersonFill, BsPinMap } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";
import { FaCalendarDays, FaPeopleGroup } from "react-icons/fa6";
import { HiMiniWallet } from "react-icons/hi2";
import { LuGoal } from "react-icons/lu";
import DynamicContent from "../DynamicContent/DynamicContent";

export default function CompanyProfile({ lng, data }: any) {
  return (
    <>
      <div className="bg-slate-50/20 from-blue-100 rounded-xl mt-4 p-10 md:p-20 text-slate-500">
        <div className="w-full flex justify-center pb-20">
          <Logo color="#002B7F" />
        </div>
        <DynamicContent content={data.aboutUsTH} />
      </div>
    </>
  );
}
