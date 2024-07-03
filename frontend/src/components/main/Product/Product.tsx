"use client";
import { useEffect, useState } from "react";
import ProductFilter from "../ProductFilter/ProductFilter";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Product({ type }: any) {
  const [mainCat, setMainCat] = useState([]);
  const [subCat, setSubCat] = useState([]);
  const [initSubCat, setInitSubCat] = useState([]);
  const [filter, setFilter] = useState({});

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
    prop === "mainCat" &&
      setSubCat(
        // @ts-ignore
        initSubCat?.filter((i: any) => i?.mainCategory?.id == filter?.mainCat)
      );
    setFilter((prev: any) => ({ ...prev, [prop]: e }));
  };

  useEffect(() => {
    fetchCat();
  }, []);
  useEffect(() => {
    // @ts-ignore
  }, [filter?.mainCat]);

  return (
    <div>
      <ProductFilter
        mainCat={mainCat}
        subCat={subCat}
        filter={filter}
        setFilter={onChangeFilter}
      />
      <ProductGrid data={mainCat} />
    </div>
  );
}
