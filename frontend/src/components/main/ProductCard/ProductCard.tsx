import Link from "next/link";

import dynamic from "next/dynamic";
import Image from "next/image";

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
      <img
        src={
          item?.image
            ? `${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`
            : `${process.env.NEXT_PUBLIC_BASE_URL}public\\image\\no_image.webp`
        }
        alt={item.nameTH}
        width="280"
        height="280"
        className="w-full object-cover aspect-4/3"
      />

      <div className="text-center group-hover:text-[#0DA1DB]">
        {product ? item?.productNameTH : item?.nameTH}
      </div>
    </Link>
  );
}
