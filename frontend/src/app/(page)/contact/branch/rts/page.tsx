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

export default async function RtsPage() {
  const images = [
    { src: "Rectangle 139.png", title: "Rectangle 139" },
    { src: "Rectangle 138.png", title: "Rectangle 138" },
    { src: "Rectangle 137.png", title: "Rectangle 137" },
  ];
  return (
    <>
      <Loading />
      <Cover
        pageName={"ติดต่อเรา"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl  font-semibold text-[#0DA1DB]">
            บริษัท เร้นท์ เทรด แอนด์ เซอร์วิส
          </h2>
          <p className=" mt-4">
            บริษัทในเครือ Rent Group ที่เชี่ยวชาญด้านการกระจายสินค้า และการขนส่ง
            เราสามารถให้บริการได้อย่างมีประสิทธิภาพมากขึ้นโดยการแบ่งการบริหารจัดการ
          </p>
<<<<<<< Updated upstream
          <p className="text-orange-500">
            สนใจเช่า หรือต้องการสอบถามเกี่ยวกับสินค้า
            กรุณาส่งอีเมล์ระบุชื่อเรื่อง &quot;สนใจเช่า/สอบถามราคา&quot; มาที่ contact
            @rent.co.th
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
=======
          <>
            <div className="bg-slate-50/20 from-blue-100 rounded-xl mt-4 px-10 md:px-10 text-slate-500">
              <div className="flex flex-col gap-4">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1   border border-slate-400 px-4 py-6 rounded-lg shadow-md">
                  <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300">
                    <FaCalendarDays size={20} />
                    History
                  </div>
                  <div className="col-span-5 md:col-span-4">
                    <ul>
                      <li>
                        1995 – Asian Trade & Leasing Co., Ltd Established in
                        June
                      </li>
                      <li>2006 – Become a subsidiary of Rent Corporation</li>
                      <li>
                        2008 – Start supplying machines to Rent (Thailand)
                      </li>
                      <li>
                        2012 – Appointed as the Official Distributor of SUIDEN
                      </li>
                      <li>
                        2016 – Become the exclusive supplier of Rent (Thailand)
                      </li>
                      <li>
                        2017 – Start selling SUIDEN Products through Rent
                        (Thailand) Start Providing Transportation, Operator and
                        Training Services to Rent (Thailand) in November
                      </li>
                      <li>
                        2018 – Company name changed to Rent Trade & Service Co.,
                        Ltd. in January
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1   border border-slate-400 px-4 py-6 rounded-lg shadow-md">
                  <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300">
                    <TbReportMoney size={20} />
                    Capital
                  </div>
                  <div className="col-span-5 md:col-span-4">
                    150,000,000 Baht
                  </div>
                </div>

                <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1   border border-slate-400 px-4 py-6 rounded-lg shadow-md">
                  <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300">
                    <BsPersonFill size={20} />
                    Employee
                  </div>
                  <div className="col-span-5 md:col-span-4">
                    54 person (as of Jun 2024)
                  </div>
                </div>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1   border border-slate-400 px-4 py-6 rounded-lg shadow-md">
                  <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300">
                    <PiFilesDuotone size={20} />
                    Type of Business
                  </div>
                  <div className="col-span-5 md:col-span-4">
                    <ol>
                      <li>1. Distributor and Trading</li>
                      <li>2. Transportation Service</li>
                      <li>3. Operator Providing Service</li>
                      <li>4. Operator Training Service</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
>>>>>>> Stashed changes
            {images.map((image, index) => (
              <div key={index} className="aspect-[4/2] object-cover w-full">
                <Image
                  src={`/${image.src}`}
                  alt={image.title}
                  width={834}
                  height={436}
                  quality={100}
                  loading="lazy"
                />
              </div>
            ))}
          </div> */}
          <div className="flex justify-center">
            <Image
              src={`/img/rts_people.png`}
              alt={"rts people"}
              width={834}
              height={436}
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="py-6">
            <h4 className="font-bold text-xl text-slate-700 py-2">
              บริการจัดหาพนักงานควบคุมเครื่องจักร (Operator)
            </h4>
            <p>
              เราส่งมอบพนักงานควบคุมเครื่องจักรที่ถูกอบรมและให้ความรู้มาอย่างดีในการบังคับควบคุมเครื่องจักร
            </p>
            <p>
              ด้วยการดูแลจากบริษัทผู้เชี่ยวชาญ
              ทำให้พนักงานควบคุมเครื่องจักรของเรามีประสิทธิภาพสูง
            </p>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4 my-4">
              <div className="col-span-6">
                <Image
                  src={`/img/rts_operator1.png`}
                  alt={`Rectangle 147`}
                  width={834}
                  height={436}
                  quality={100}
                  loading="lazy"
                />
              </div>
              <div className="col-span-6 flex items-center flex-col justify-center">
                <Image
                  src={`/img/rts_operator2.png`}
                  alt={`Rectangle 147`}
                  width={834}
                  height={436}
                  quality={100}
                  loading="lazy"
                />
                <div>
                  เราจัดหาพนักงานควบคุมเครื่องจักรสำหรับรถขุด รถตัก รถยก
                  สกายมาสเตอร์
                  รถมินิเครนแมงมุมเพื่อทำงานให้กับไซต์งานของลูกค้าได้
                </div>
              </div>
            </div>
          </div>
          <div className="py-6">
            <h4 className="font-bold text-xl text-slate-700 py-2">
              การควบคุมคุณภาพของพนักงานควบคุมเครื่องจักร (Operator)
            </h4>
            <p>
              เราใช้โปรแกรมการอบรมที่จัดทำขึ้นโดยได้รับความร่วมมือจากผู้ผลิตในการอบรมพนักงานควบคุมเครื่องจักร
              เฉพาะผู้ที่สอบผ่านโปรแกรมอบรมเท่านั้นที่จะถูกส่งไปยังไซต์งาน
              อีกทั้งเรายังใช้ระบบเส้นทางความก้าวหน้าในสายอาชีพ (Career path)
              และพยายามยกระดับความสามารถของพนักงานด้วย
            </p>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4 my-4">
              <div className="col-span-8">
                <Image
                  src={`/img/rts_career.png`}
                  alt={`Rectangle 147`}
                  width={834}
                  height={436}
                  quality={100}
                  loading="lazy"
                />
              </div>
              <div className="col-span-4 flex items-center flex-col justify-center">
                <Image
                  src={`/img/rts_quality1.png`}
                  alt={`Rectangle 147`}
                  width={834}
                  height={436}
                  quality={100}
                  loading="lazy"
                />
                <Image
                  src={`/img/rts_quality2.png`}
                  alt={`Rectangle 147`}
                  width={834}
                  height={436}
                  quality={100}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="py-6">
            <h4 className="font-bold text-xl text-slate-700 py-2">
              ระบบขนส่งเครื่องจักรสำหรับเช่า
            </h4>
            <p>
              เรามีจุดมุ่งหมายด้านการจัดส่งที่รวดเร็วและปลอดภัยโดยควบคุมการจัดคิวขนส่งจากส่วนกลาง
              การจัดคิวขนส่งจากส่วนกลางทำให้สามารถใช้งานรถขนส่งได้อย่างมีประสิทธิภาพสูงสุด
            </p>
            <p>
              นอกจากนี้เรายังสร้างความตระหนักด้านความปลอดภัยผ่านการฝึกอบรมคนขับเป็นประจำ
            </p>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4 my-4">
              <div className="col-span-4">
                <Image
                  src={`/img/rts_rent1.png`}
                  alt={`Rectangle 147`}
                  width={834}
                  height={436}
                  quality={100}
                  loading="lazy"
                />
              </div>
              <div className="col-span-8">
                <Image
                  src={`/img/rts_rent2.png`}
                  alt={`Rectangle 147`}
                  width={834}
                  height={436}
                  quality={100}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="py-6">
            <h4 className="font-bold text-xl text-slate-700 py-2">
              ตัวแทนจำหน่ายเครื่องจักรแบรนด์ชั้นนำ
              และจำหน่ายเครื่องจักรมือสองสภาพดี
            </h4>
            <p>
              เราเป็นตัวแทนจำน่ายเครื่องจักรจากแบรนด์ชั้นนำ
              โดยมีสต็อกสินค้ามากมายพร้อมส่งมอบให้ลูกค้าได้ทันที
              มีบริการหลังการขายที่รวดเร็วและใส่ใจลูกค้า
            </p>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4 my-4">
              <div className="col-span-6">
                <Image
                  src={`/img/rts_sale1.jpg`}
                  alt={`Rectangle 147`}
                  width={834}
                  height={436}
                  quality={100}
                  loading="lazy"
                />
              </div>
              <div className="col-span-6 ">
                <Image
                  src={`/img/rts_sale2.jpg`}
                  alt={`Rectangle 147`}
                  width={834}
                  height={436}
                  quality={100}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:justify-between mt-10">
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
                กรุณาส่งอีเมล์ระบุชื่อเรื่อง &quot;สนใจเช่า/สอบถามราคา&quot; มาที่ contact
                @rent.co.th
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
        </div>
        <div className="border-t-[.06rem] border-slate-300 mb-10" />
        <div className="py-2 grid grid-cols-2 gap-4 border-b border-slate-100 mb-12 w-full">
          <Image
            className="aspect-[4/2] object-cover w-full col-span-2 lg:col-span-1 rounded-lg"
            alt={`บริษัท เร้นท์ (ประเทศไทย) จำกัด`}
            src={`/img/contact_rent.jpg`}
            width={834}
            height={436}
            quality={100}
            loading="lazy"
          />
          <div className="col-span-2 lg:col-span-1 ">
            <h6 className="text-xl font-semibold text-slate-600">
              ฟอร์มติดต่อ{" "}
              <span className="text-[#0DA1DB]">
                บริษัท เร้นท์ เทรด แอนด์ เซอร์วิส
              </span>
            </h6>
            <Contactform branch="บริษัท เร้นท์ เทรด แอนด์ เซอร์วิส" />
          </div>
        </div>
        {/* <div className="py-6">
          <h6 className="text-xl font-semibold text-slate-600">
            พื้นที่บริการเช่าเครื่องจักรก่อสร้างและอุปกรณ์ต่าง ๆ
          </h6>
          <div className="text-sm">
            เราพร้อมให้บริการท่านครอบคลุม
            โดยเน้นบริเวณภาคตะวันออกและภาคกลางเป็นหลักไม่ว่าจะเป็น
            <ul>
              <li className="flex items-center gap-2">
                <TbPointFilled />
                ภาคกลาง ให้เช่าเครื่องจักรสมุทรปราการ กรุงเทพ
                และปริมณฑลทุกพื้นที่ ให้เช่าเครื่องจักรปทุมธานี
                ให้เช่าเครื่องจักรอยุธยา ฯลฯ
              </li>
              <li className="flex items-center gap-2">
                <TbPointFilled />
                ภาคตะวันออก ให้เช่าเครื่องจักร ชลบุรี ให้เช่าเครื่องจักร ระยอง
                ให้เช่าเครื่องจักร มาบตาพุด ฯลฯ
              </li>
              <li className="flex items-center gap-2">
                <TbPointFilled />
                ภาคตะวันออกเฉียงเหนือ ให้เช่าเครื่องจักร ขอนแก่น นครราชสีมา ฯลฯ
              </li>
              <li className="flex items-center gap-2">
                <TbPointFilled />
                ภาคตะวันตก ให้เช่าเครื่องจักร ประจวบคีรีขันธ์ กาญจนบุรี ฯลฯ
              </li>
              <li className="flex items-center gap-2">
                <TbPointFilled />
                ภาคเหนือและภาคใต้จะอยู่ห่างไกลจากสาขาของเรา
                แต่สามารถพิจารณาให้บริการเช่าได้เป็นกรณีไป
                โดยจะให้เช่าในลักษณะที่ไม่มีบริการซ่อมบำรุง
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </>
  );
}
