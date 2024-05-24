import { GoOrganization } from "react-icons/go";
import { Logo } from "../Logo/Logo";
import { BsPersonFill, BsPinMap } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";
import { FaCalendarDays, FaPeopleGroup } from "react-icons/fa6";
import { LuShip } from "react-icons/lu";
import { MdOutlineHighQuality } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { useTranslation } from "react-i18next";

export default function Quality({ lng }: any) {
  const { t } = useTranslation(lng);
  const text: any = {
    en: {
      title: "Quality Policy",
      safety: "S-Safety",
      quality: "Q-Quality",
      professional: "P-Professional",
      safetyDescription: `Reduction of risk of cargo damage to a level as is reasonably practicable. Provide and differentiate a service offering and to professionalize qualities of trust and safety.`,
      qualityDescription: `Providing high valuable service quality to promote customer
            satisfaction. To reduce risk perceptions, signal quality and to
            institutionalize internal management for non-conformity service.`,
      professionalDescription: ` Driving the service on the level of care, diligence and skills in
            accordance with the professional standards of system.`,
    },
    th: {
      title: "นโยบายคุณภาพ",
      safety: "ด้านความปลอดภัยของสินค้า",
      quality: "ด้านคุณภาพการให้บริการ",
      professional: "การให้บริการอย่างมืออาชีพ",
      safetyDescription: `ลดและควบคุมความเสี่ยงที่ก่อให้เกิดความเสียหายต่อสินค้าใน
ระหว่างการปฏิบัติ งานของบริษัทฯ รวมถึงการนำเสนอบริการที่
แตกต่างอย่างเป็นมืออาชีพ ด้วยการสร้างความไว้วางใจ และ
ความปลอดภัยในการให้บริการ`,
      qualityDescription: `การให้บริการที่มีคุณภาพ เพื่อยกระดับความพึงพอใจของลูกค้า
โดยมีการกำหนดมาตรการรับมือกับความเสี่ยง รวมถึงการบริหาร
จัดการภายในองค์กรเพื่อให้การบริการเป็นไปตามข้อกำหนดของ
ลูกค้า`,
      professionalDescription: `การให้บริการด้วยความเอาใจใส่ พากเพียรพยายามในการตอบ
สนองต่อข้อกำหนดของลูกค้าเป็นสำคัญอย่างมืออาชีพ`,
    },
  };
  return (
    <div className="bg-slate-50 from-blue-100 rounded-xl mt-4 p-10 md:p-20">
      <div className="w-full flex justify-center pb-20">
        <Logo color="#002B7F" />
      </div>
      <h2 className="font-bold text-xl mb-4 underline underline-offset-4 text-blue-900">
        {text[lng]["title"]}
      </h2>
      <div className="flex flex-col gap-4">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1 border border-slate-400 px-4 py-6 rounded-lg shadow-md">
          <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300 text-blue-900">
            <AiOutlineSafety size={20} />
            {text[lng]["safety"]}
          </div>
          <div className="col-span-5 md:col-span-4">
            {text[lng]["safetyDescription"]}
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1   border border-slate-400 px-4 py-6 rounded-lg shadow-md">
          <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300 text-blue-900">
            <MdOutlineHighQuality size={20} />
            {text[lng]["quality"]}
          </div>
          <div className="col-span-5 md:col-span-4">
            {text[lng]["qualityDescription"]}
          </div>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1   border border-slate-400 px-4 py-6 rounded-lg shadow-md">
          <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300 text-blue-900">
            <LuShip size={20} />
            {text[lng]["professional"]}
          </div>
          <div className="col-span-5 md:col-span-4">
            {text[lng]["professionalDescription"]}
          </div>
        </div>
      </div>
    </div>
  );
}
