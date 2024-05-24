"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function AboutUs({ lng }: any) {
  const { t } = useTranslation(lng);
  const text = {
    en: {
      first: `Hankyu Hanshin Express is one of leading logistics service providers in Thailand. With international branches spanning strategically in many countries, we are able to grant access to efficient multimodal transportation, whether by air, land, or sea freight. Our Company  offers an impressive range of services to offer the optimum route and mode of transport for each client’s businesses.`,
      second: `Services also cover customs formalities both for importing and exporting goods. We have experienced and knowledgeable teams who complete those stages for clients professionally. By helping clients design solutions for their businesses, we help manage supply chains effectively.`,
      third: `Cliental satisfaction from these services are the reason why we maintain our status as leader in the industry. Trust Hankyu Hanshin Express (Thailand) Co., Ltd. to transport your goods. We will deliver every package to its destination safely, correctly, and punctually within your budget.`,
    },
    th: {
      first: `Hankyu Hanshin Express เป็นหนึ่งในผู้ให้บริการด้านโลจิสติกส์ชั้นนำของประเทศไทย ด้วยสาขาระหว่างประเทศที่กระจายอยู่ในหลายประเทศอย่างมีกลยุทธ์ เราจึงสามารถให้การเข้าถึงการขนส่งต่อเนื่องหลายรูปแบบที่มีประสิทธิภาพ ไม่ว่าจะเป็นการขนส่งทางอากาศ ทางบก หรือทางทะเล บริษัทของเรานำเสนอบริการที่น่าประทับใจมากมายเพื่อเสนอเส้นทางและรูปแบบการขนส่งที่เหมาะสมที่สุดสำหรับธุรกิจของลูกค้าแต่ละราย`,
      second: `บริการยังครอบคลุมถึงพิธีการศุลกากรทั้งการนำเข้าและ การส่งออกสินค้า เรามีทีมงานที่มีประสบการณ์และมีความรู้ซึ่ง ดำเนินการขั้นตอนเหล่านั้นให้กับลูกค้าอย่างมืออาชีพ โดยการช่วยเหลือ ลูกค้าออกแบบโซลูชั่นสำหรับธุรกิจของพวกเขา เราช่วยจัดการ  ห่วงโซ่อุปทานได้อย่างมีประสิทธิภาพ`,
      third: `ความพึงพอใจของลูกค้าจากบริการเหล่านี้เป็นเหตุผลว่าทำไมเราจึงรักษาสถานะของเราในฐานะผู้นำในอุตสาหกรรม วางใจให้ Hankyu Hanshin Express (Thailand) Co., Ltd. ในการขนส่งสินค้าของคุณ เราจะจัดส่งทุกพัสดุถึงที่หมายอย่างปลอดภัย ถูกต้อง และตรงเวลา ภายในงบประมาณของคุณ`,
    },
  };

  const title = {
    th: "เชื่อมต่อทุกเส้นทางการขนส่งสินค้าเชิงพาณิชย์สำหรับธุรกิจของคุณ",
    en: "Connecting all commercial freight routes for your business.",
  };

  return (
    <>
      <div className=" flex flex-col gap-4">
        <div className="">
          {/* @ts-ignore */}
          <h2 className="text-lg font-semibold">{title[lng]}</h2>
        </div>
        <div className="w-full grid grid-cols-2 gap-2 ">
          <Image
            src={"/image/contact/warehouse.jpg"}
            alt={"warehouse"}
            width="1000"
            height="1000"
            className="aspect-[5.5/3] object-cover rounded-xl col-span-2 sm:col-span-1"
          />
          <Image
            src={"/image/about/dmk.png"}
            alt={"airport"}
            width="1000"
            height="1000"
            className="aspect-[5.5/3] object-cover rounded-xl col-span-2 sm:col-span-1"
          />
        </div>
        <div className="flex flex-col gap-4">
          {/* @ts-ignore */}
          <strong>{title[lng]}</strong>
          {/* @ts-ignore */}
          <p style={{ textIndent: 40 }}>{text[lng].first}</p>
          {/* @ts-ignore */}
          <p>{text[lng].second}</p>
          {/* @ts-ignore */}
          <p>{text[lng].third}</p>
        </div>
      </div>
    </>
  );
}
