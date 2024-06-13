import DynamicContent from "../DynamicContent/DynamicContent";
import { Image } from "antd";
export default function ProjectContent({ data }: any) {
  console.log(data?.projectDetailTH);
  console.log(data);
  return (
    <div className="w-full">
      {data?.gallery && (
        <div className="grid grid-cols-12 w-full gap-4 pb-4">
          {data?.gallery?.map((v: any, i: number) => {
            return (
              <div
                key={i}
                className="bg-slate-100 rounded-lg  col-span-6 md:col-span-4 xl:col-span-3"
              >
                <Image
                  className="rounded-xl aspect-[3/2] object-cover w-full h-full"
                  width={"auto"}
                  height={"auto"}
                  src="/img/about_1.png"
                  alt="IATA 2024"
                />
              </div>
            );
          })}
        </div>
      )}
      {data?.projectDetailTH && (
        <div className="py-10 ">
          <h4 className="text-2xl font-semibold text-[#0DA1DB] mb-4">
            รายละเอียด
          </h4>
          <div className=" overflow-x-scroll rounded-xl  bg-slate-100/40 px-4 py-4">
            <DynamicContent content={data?.projectDetailTH} />
          </div>
        </div>
      )}
    </div>
  );
}
