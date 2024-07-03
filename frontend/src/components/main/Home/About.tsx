import Link from "next/link";
import Image from "next/image";

export default function About() {
  function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
  }
  return (
    <div className=" pb-14 pt-20 relative project shadow-md">
      <div className="absolute top-0 right-0 bottom-0 left-0 ">
        <Image
          src={`/img/about_${getRandomNumber()}.png`}
          alt="banner"
          width={2000}
          height={500}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/90"></div>
      </div>
      <div className="container mx-auto flex flex-col items-center gap-10 relative">
        <div className="flex flex-col items-center gap-4">
          <h1
            className="text-xl font-semibold text-[#0DA1DB]"
            style={{ textShadow: "white 1px 1px 1px" }}
          >
            บริษัท เร้นท์ (ประเทศไทย) จำกัด บริการ ให้เช่าเครื่องจักร
            งานก่อสร้าง
          </h1>
          <p className="text-slate-700">
            หากคุณต้องการ เช่าเครื่องจักร และเครื่องมือสำหรับใช้ในงานก่อสร้าง
            เราคือ บริษัทให้บริการเช่าเครื่องจักร งานก่อสร้าง
            ที่มีสินค้าให้เช่ากว่า 460 ประเภท เป็นจำนวนกว่า 5,000 ชิ้น
            และสามารถนำเครื่องจักรที่ยังไม่เป็นที่รู้จักในประเทศไทยเข้ามาปล่อยเช่าได้อย่างรวดเร็ว
            ในฐานะผู้บุกเบิกตลาดงานเช่า
          </p>
        </div>
        <Link
          href="/about-us/company-history"
          className=" px-4 py-2 rounded-full text-white bg-[#0DA1DB] "
        >
          เกี่ยวกับเรา
        </Link>
      </div>
      ;
    </div>
  );
}
