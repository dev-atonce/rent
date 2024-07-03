import Cover from "@/components/main/Cover/Cover";
import ForeignBranch from "@/components/main/ForeignBranch/ForeignBranch";
import Loading from "@/components/main/Loading/Loading";
import Contact from "@/components/main/Contact/page";
import Image from "next/image";
import { MdFax } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Contactform from "@/components/main/Contact/ContactForm";
import { TbPointFilled } from "react-icons/tb";

export default async function RtsPage() {
  return (
    <>
      <Loading />
      <Cover
        pageName={"ติดต่อเรา"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col lg:justify-between">
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl  font-semibold text-[#0DA1DB]">
              บริษัท เร้นท์ เทรด แอนด์ เซอร์วิส
            </h4>
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
        </div>
        <div className="py-2 grid grid-cols-2 gap-4 border-b border-slate-100  pb-4 w-full">
          <Image
            className="aspect-[4/2] object-cover w-full col-span-2 lg:col-span-1 "
            alt={`บริษัท เร้นท์ (ประเทศไทย) จำกัด`}
            src={`/Rectangle 136.png`}
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
        <div className="py-6">
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
        </div>
      </div>
    </>
  );
}
