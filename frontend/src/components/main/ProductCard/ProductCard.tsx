import Image from "next/image";
import Link from "next/link";
export default function ProductCard({ item, type, urlPre, product }: any) {
  return (
    <Link
      href={
        type === "rent" && !product
          ? `/rental-product${urlPre}/${item?.id}`
          : type === "sale" && !product
            ? `/sale-product${urlPre}/${item?.id}`
            : type === "rent" && product
              ? `/rental-product/product/${item?.id}`
              : type === "sale" && product
                ? `/sale-product/product/${item?.id}`
                : ""
      }
      className="group shadow-md  border border-slate-100 pb-4 transition-all duration-500 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 rounded-lg overflow-hidden"
    >
      <Image
        src={`/img/about_1.png`}
        alt={item.nameTH}
        width={400}
        height={400}
        className="w-full object-cover aspect-4/3"
      />
      <div className="text-center group-hover:text-[#0DA1DB]">
        {product ? item?.productNameTH : item?.nameTH}
      </div>
    </Link>
  );
}
