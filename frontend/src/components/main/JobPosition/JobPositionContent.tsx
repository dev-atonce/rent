import DynamicContent from "../DynamicContent/DynamicContent";
import { Image } from "antd";
export default function JobPositionContent({ data }: any) {
  console.log(process.env.NEXT_PUBLIC_BASE_URL , data.image);
  return (
     <div className="w-full">
        {data?.image && (
        <div className="flex justify-center items-center w-full gap-4 pb-4">
                <Image
                  className="rounded-xl object-cover w-full h-full"
                  width={"auto"}
                  height={"auto"}
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.image}`}
                  alt="Position"
                />
        </div>
      )}
      {data?.positionDetailTH?.length > 30 && (
        <div className="py-10 ">
          <h4 className="text-2xl font-semibold text-[#0DA1DB] mb-4">
            รายละเอียด
          </h4>
          <div className=" overflow-x-scroll rounded-xl  bg-slate-100/40 px-4 py-4">
            <DynamicContent content={data?.positionDetailTH} />
          </div>
        </div>
      )}
    </div>
  );
}
