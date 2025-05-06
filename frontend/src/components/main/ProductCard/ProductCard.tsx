"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

export default function ProductCard({ item, type, urlPre, product }: any) {
  const [productInSub, setProductInSub] = useState([]);
  const fetchProduct = async (id: any) => {
    const subCat = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/product/sub-category/${type}/${id}`,
      { cache: "no-store" }
    );
    const res = await subCat.json();
    setProductInSub(res.filter((i: any) => i.status === true));
  };
  useEffect(() => {
    fetchProduct(item.id);
  }, []);

  const isComingZoon = (productInSub.length === 0 && urlPre === "/sub-category") || (item.status === false && urlPre === "");
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
      className={`group shadow-md  border border-slate-100 pb-4 transition-all duration-500 col-span-12 md:col-span-6 lg:col-span-4 
        xl:col-span-3 rounded-lg overflow-hidden relative ${isComingZoon ? "pointer-events-none" : ""}`}
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
      {isComingZoon && (
        <div className="bg-zinc-600/80 absolute flex items-center justify-center w-full h-full 
          top-0 text-nowrap">
          <p className="-rotate-45 text-center pb-2 px-20 text-2xl text-white">
            Coming soon
          </p>
        </div>
      )}
    </Link>
  );
}
