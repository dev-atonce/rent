import Cover from "@/components/main/Cover/Cover";
import ForeignBranch from "@/components/main/ForeignBranch/ForeignBranch";
import Loading from "@/components/main/Loading/Loading";
import Contact from "@/components/main/Contact/page";
import Image from "next/image";
import { MdFax } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Contactform from "@/components/main/Contact/ContactForm";
import { TbReportMoney } from "react-icons/tb";

import { FaCalendarDays } from "react-icons/fa6";
import { BsPersonFill } from "react-icons/bs";
import { PiFilesDuotone } from "react-icons/pi";
import DynamicContent from "@/components/main/DynamicContent/DynamicContent";

const fetchData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/about-us/rts`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return data;
};

export default async function RtsPage() {
  const data = await fetchData();
  return (
    <>
      <Loading />
      <Cover
        pageName={"ติดต่อเรา"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto">
        <DynamicContent content={data?.aboutUsTH} />

        {/* <div className="flex lg:flex-row flex-col lg:justify-between mt-10">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 text-sm">
              <p>
                บริษัท เร้นท์ เทรด แอนด์ เซอร์วิส จำกัด สาขาสมุทรปราการ 42/9
                หมู่ที่ 3 ถนนกิ่งแก้ว ตำบลราชาเทวะ อำเภอบางพลี
                จังหวัดสมุทรปราการ 10540
              </p>
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <span>โทร: 02-017-7217</span>
              </div>

              <div className="flex items-center gap-2">
                <MdFax />
                <span>แฟกส์: 02-017-7218</span>
              </div>
              <p>
                สนใจเช่า หรือต้องการสอบถามเกี่ยวกับสินค้า
                กรุณาส่งอีเมล์ระบุชื่อเรื่อง &quot;สนใจเช่า/สอบถามราคา&quot;
                มาที่ contact @rent.co.th
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden h-[300px] py-4">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1938.463571696798!2d100.719806!3d13.662194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d5df82fcf500f%3A0x5e2e8166d84c51fd!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4ouC4ueC4meC4tOC5geC4n-C5ieC4miDguK3guLXguITguKfguLTguJvguYDguKHguJnguJXguYwg4LiI4Liz4LiB4Lix4LiU!5e0!3m2!1sth!2sth!4v1717662497999!5m2!1sth!2sth"
                width="100%"
                height="100%"
                // style="border:0;"
                // allowfullscreen=""
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div> */}
        <div className="border-t-[.06rem] border-slate-300 mb-10" />
        <div className="py-2 grid grid-cols-2 gap-4 border-b border-slate-100 mb-12 w-full">
          <Image
            className="aspect-[4/2] object-cover w-full col-span-2 lg:col-span-1 rounded-lg"
            alt={`บริษัท เร้นท์ (ประเทศไทย) จำกัด`}
            src={`/img/contact_rent1.jpg`}
            width={834}
            height={436}
            quality={100}
            loading="lazy"
          />
          <div className="col-span-2 lg:col-span-1 ">
            <h2 className="text-xl font-semibold text-slate-600">
              ฟอร์มติดต่อ{" "}
              <span className="text-[#0DA1DB]">
                บริษัท เร้นท์ เทรด แอนด์ เซอร์วิส
              </span>
            </h2>
            <Contactform branch="บริษัท เร้นท์ เทรด แอนด์ เซอร์วิส" />
          </div>
        </div>
      </div>
    </>
  );
}
