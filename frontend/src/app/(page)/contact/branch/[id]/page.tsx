import Cover from "@/components/main/Cover/Cover";
import ForeignBranch from "@/components/main/ForeignBranch/ForeignBranch";
import Loading from "@/components/main/Loading/Loading";
import Contact from "@/components/main/Contact/page";
import Image from "next/image";
import { MdFax } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Contactform from "@/components/main/Contact/ContactForm";
import { TbPointFilled } from "react-icons/tb";

import { Metadata, ResolvingMetadata } from "next";

const pageName = "contact";
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lng = "TH";

  const seoRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/seo/page-name/${pageName}`;

  // fetch data
  const response = await fetch(seoRoute, { cache: "no-store" }).then((res) =>
    res.json()
  );

  return {
    title: response[`seoTitle${lng}`],
    description: response[`seoDescription${lng}`],
    keywords: response[`seoKeyword${lng}`],
  };
}

const fetchData = async (id: any) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/contact/${id}`
  );
  const json = await data.json();
  return json;
};

export default async function BranchPage({ params: { id } }: any) {
  const data = await fetchData(id);

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
              {data?.nameTH}
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <p>{data?.addressTH}</p>
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <span>โทร: {data?.tel}</span>
              </div>

              <div className="flex items-center gap-2">
                <MdFax />
                <span>แฟกส์: {data?.fax}</span>
              </div>
              <p>
                สนใจเช่า หรือต้องการสอบถามเกี่ยวกับสินค้า
                กรุณาส่งอีเมล์ระบุชื่อเรื่อง &quot;สนใจเช่า/สอบถามราคา&quot; มาที่ contact
                @rent.co.th
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden h-[300px] py-4">
            <div dangerouslySetInnerHTML={{ __html: data?.googleMap }}></div>
          </div>
        </div>
        <div className="py-2 grid grid-cols-2 gap-4 border-b border-slate-100  pb-4 w-full">
          <Image
            className="aspect-[4/2] object-cover w-full col-span-2 lg:col-span-1 rounded-lg "
            alt={`บริษัท เร้นท์ (ประเทศไทย) จำกัด`}
            src={`/img/contact_rent.jpg`}
            width={834}
            height={436}
            quality={100}
            loading="lazy"
          />
          <div className="col-span-2 lg:col-span-1 ">
            <h6 className="text-xl font-semibold text-slate-600">
              ฟอร์มติดต่อ <span className="text-[#0DA1DB]">{data?.nameTH}</span>
            </h6>
            <Contactform branch={data?.nameTH} />
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
