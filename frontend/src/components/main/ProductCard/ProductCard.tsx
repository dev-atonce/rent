import Image from "next/image";
import Link from "next/link";
export default function ProductCard({ item }: any) {
  return (
    <Link
      href={`/product/main-category/${item?.id}`}
      className="group  border border-slate-100 pb-4 transition-all duration-500 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 rounded-lg overflow-hidden"
    >
      <Image
        src={`/img/about_1.png`}
        alt={item.nameTH}
        width={400}
        height={400}
        className="w-full object-cover aspect-4/3"
      />
      <div className="text-center group-hover:text-[#0DA1DB]">
        {item?.nameTH}
      </div>
    </Link>
  );
}
