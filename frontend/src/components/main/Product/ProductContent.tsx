import DynamicContent from "../DynamicContent/DynamicContent";
// import Image from "next/image";
import { Image } from "antd";

export default function ProductContent({ data }: any) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 w-full gap-4 pb-10">
        <div className="col-span-12 lg:col-span-6">
          <div className="w-full rounded-xl overflow-hidden aspect-[3/2] shadow-4">
            <Image
              className="w-full h-full object-cover "
              width={"100%"}
              height={"100%"}
              src="/img/about_1.png"
              alt="IATA 2024"
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded-xl overflow-hidden shadow-4">
            <Image
              className="w-full h-full object-cover"
              width={"100%"}
              height={"100%"}
              src="/img/about_1.png"
              alt="IATA 2024"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded-xl overflow-hidden shadow-4">
            <Image
              className="w-full h-full object-cover"
              width={"100%"}
              height={"100%"}
              src="/img/about_1.png"
              alt="IATA 2024"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded-xl overflow-hidden shadow-4">
            <Image
              className="w-full h-full object-cover"
              width={"100%"}
              height={"100%"}
              src="/img/about_1.png"
              alt="IATA 2024"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded-xl overflow-hidden shadow-4">
            <Image
              className="w-full h-full object-cover"
              width={"100%"}
              height={"100%"}
              src="/img/about_1.png"
              alt="IATA 2024"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded-xl overflow-hidden shadow-4">
            <Image
              className="w-full h-full object-cover"
              width={"100%"}
              height={"100%"}
              src="/img/about_1.png"
              alt="IATA 2024"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded-xl overflow-hidden shadow-4c">
            <Image
              className="w-full h-full object-cover"
              width={"100%"}
              height={"100%"}
              src="/img/about_1.png"
              alt="IATA 2024"
            />
          </div>
        </div>
      </div>
      <div className="py-10 ">
        <h4 className="text-2xl font-semibold text-[#0DA1DB] mb-4">
          รายละเอียด
        </h4>
        <div className=" overflow-x-scroll rounded-xl  bg-slate-100 px-4 py-4">
          <DynamicContent content={data?.productDetailTH} />
        </div>
      </div>
    </div>
  );
}
