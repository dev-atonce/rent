import Image from "next/image";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
export default function Cover({ pageName, prevPage }: any) {
  return (
    <div className="w-full  ">
      <Image
        className="w-full shadow-sm"
        src="/img/banner.png"
        width={2000}
        height={500}
        quality={80}
        alt="cover"
        priority={true}
      />
      <div className="container mx-auto ">
        <div className="border-b-2 border-slate-200 py-4 hidden md:block">
          <Breadcrumb pageName={pageName} prevPage={prevPage} />
        </div>
        <h1 className="py-6 text-2xl font-semibold text-slate-700">
          {pageName}
        </h1>
      </div>
    </div>
  );
}
