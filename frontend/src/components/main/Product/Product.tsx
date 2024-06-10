"use client";
import { useEffect, useState } from "react";
import ProductFilter from "../ProductFilter/ProductFilter";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Product({ type }: any) {
  const [mainCat, setMainCat] = useState([]);
  const [subCat, setSubCat] = useState([]);
  const [initSubCat, setInitSubCat] = useState([]);
  const [filter, setFilter] = useState({ subCategory: "" });

  const fetchCat = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/category-main`
    );
    const data = await res.json();
    const subCat = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/category-sub`
    );
    const subCatData = await subCat.json();

    setMainCat(data.rows);
    setInitSubCat(subCatData.rows);
  };
  // to do sub cat list
  const onChangeFilter = (e: any, prop: any) => {
    setFilter((prev: any) => ({ ...prev, [prop]: e }));

    if (prop == "mainCategory") {
      if (filter?.subCategory) {
        setFilter((prev: any) => ({
          ...prev,
          subCategory: "",
        }));
      }
      const filtered = initSubCat?.filter(
        // @ts-ignore
        (i: any) => i?.mainCategory?.id == e
      );
      console.log(filtered);

      setSubCat(filtered);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  console.log(initSubCat);
  console.log(filter);

  return (
    <div>
      <ProductFilter
        mainCat={mainCat}
        subCat={subCat}
        filter={filter}
        setFilter={onChangeFilter}
      />
      <ProductGrid data={mainCat} type={type} urlPre={"/main-category"} />
    </div>
  );
}
