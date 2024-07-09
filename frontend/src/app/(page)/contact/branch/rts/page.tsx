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
          <p className="indent-10 mt-4">
            หากคุณต้องการ เช่าเครื่องจักร และเครื่องมือสำหรับใช้ในงานก่อสร้าง
            เราคือ บริษัทให้บริการเช่าเครื่องจักร งานก่อสร้าง
            ที่มีสินค้าให้เช่ากว่า 460 ประเภท เป็นจำนวนกว่า 5,000 ชิ้น
            และสามารถนำเครื่องจักรที่ยังไม่เป็นที่รู้จักในประเทศไทยเข้ามาปล่อยเช่าได้อย่างรวดเร็ว
            ในฐานะผู้บุกเบิกตลาดงานเช่า
            และยังเป็นบริษัทเพียงเจ้าเดียวในประเทศไทยที่มีเครื่องทดสอบอุปกรณ์ยก
            ปฏิบัติงานด้วยความปลอดภัย รวดเร็ว และใส่ใจสิ่งแวดล้อม
          </p>
          <p className="text-orange-500">
            สนใจเช่า หรือต้องการสอบถามเกี่ยวกับสินค้า
            กรุณาส่งอีเมล์ระบุชื่อเรื่อง &quot;สนใจเช่า/สอบถามราคา&quot; มาที่ contact
            @rent.co.th
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
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
          </div>
          <p className="font-bold text-md">
            มีบริการให้เช่าเครื่องจักรที่หลากหลาย
            สามารถเลือกได้เหมาะกับการใช้งาน
          </p>
          <p>
            บริษัท ของเรามีบริการ ให้เช่าเครื่องจักร งานก่อสร้าง หลายประเภท
            เราเชื่อว่าการเลือกเครื่องจักรให้เหมาะสมกับการใช้งานนั้นจะทำให้การทำงานรวดเร็วและมีประสิทธิภาพอย่างสูงที่สุด
            ไม่ว่าจะเป็น
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4 my-4">
            <div className="col-span-5">
              <Image
                src={`/Rectangle 147.png`}
                alt={`Rectangle 147`}
                width={834}
                height={436}
                quality={100}
                loading="lazy"
              />
            </div>
            <div className="col-span-7">
              <ul className="list-disc ml-6 text-[#0DA1DB]">
                <li>ให้เช่าเครื่องจักรกลหนัก</li>
                <li>ให้เช่าเครื่องจักรงานก่อสร้าง</li>
                <li>ให้เช่าเครื่องจักรอุตสาหกรรม</li>
                <li>ให้เช่าเครื่องจักรหนักรื้อถอน</li>
                <li>ให้เช่าเครื่องจักรหนัก ขนาดใหญ่</li>
                <li>ให้เช่าเครื่องจักรที่ใช้ในงานโยธา</li>
                <li>ให้เช่าอุปกรณ์ที่ใช้ในการติดตั้งเครื่องจักร</li>
                <li>ให้เช่าเครื่องจักรงานซ่อมบำรุงโรงงาน</li>
                <li>รถเช่า</li>
              </ul>
            </div>
          </div>
          <p>
            เราให้เช่าเครื่องจักรคุณภาพดีครอบคลุมทุกงานก่อสร้าง งานอุตสาหกรรม
            และงานอื่น ๆ ที่ต้องอาศัยเครื่องจักรและอุปกรณ์ที่หลากหลาย
            โดยที่ท่านไม่จำเป็นต้องซื้อเพื่อบริหารค่าใช้จ่ายไม่ให้เกินความจำเป็น
            แต่ท่านสามารถใช้ บริการให้เช่าเครื่องจักร กับเราได้ด้วย
            ราคาเช่าเครื่องจักร ที่เป็นมิตร
            เน้นการใช้ประโยชน์และตอบโจทย์ทุกการใช้งาน
          </p>

          <h3 className="font-bold mt-6">
            พื้นที่บริการเช่าเครื่องจักรก่อสร้างและอุปกรณ์ต่าง ๆ
          </h3>
          <p className="mt-4">
            เราพร้อมให้บริการท่านครอบคลุม
            โดยเน้นบริเวณภาคตะวันออกและภาคกลางเป็นหลักไม่ว่าจะเป็น
          </p>
          <ul className="list-disc ml-6">
            <li>
              ภาคกลาง ให้เช่าเครื่องจักรสมุทรปราการ กรุงเทพ และปริมณฑลทุกพื้นที่
              ให้เช่าเครื่องจักรปทุมธานี ให้เช่าเครื่องจักรอยุธยา ฯลฯ
            </li>
            <li>
              ภาคตะวันออก ให้เช่าเครื่องจักร ชลบุรี ให้เช่าเครื่องจักร ระยอง
              ให้เช่าเครื่องจักร มาบตาพุด ฯลฯ
            </li>
            <li>
              ภาคตะวันออกเฉียงเหนือ ให้เช่าเครื่องจักร ขอนแก่น นครราชสีมา ฯลฯ
            </li>
            <li>ภาคตะวันตก ให้เช่าเครื่องจักร ประจวบคีรีขันธ์ กาญจนบุรี ฯลฯ</li>
            <li>
              ภาคเหนือและภาคใต้จะอยู่ห่างไกลจากสาขาของเรา
              แต่สามารถพิจารณาให้บริการเช่าได้เป็นกรณีไป
              โดยจะให้เช่าในลักษณะที่ไม่มีบริการซ่อมบำรุง
            </li>
          </ul>
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
