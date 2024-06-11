import DynamicContent from "../DynamicContent/DynamicContent";

export default function ProductContent({ data }: any) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 w-full gap-4 pb-10">
        <div className="col-span-12 lg:col-span-6">
          <div className="h-[300px] w-full bg-slate-500"></div>
        </div>
        <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-yellow-400">
            asdfkj
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-yellow-400">
            asdfkj
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-yellow-400">
            asdfkj
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-yellow-400">
            asdfkj
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-yellow-400">
            asdfkj
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-yellow-400">
            asdfkj
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
