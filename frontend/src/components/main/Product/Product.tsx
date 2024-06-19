"use client";
import { useEffect, useState } from "react";
import ProductFilter from "../ProductFilter/ProductFilter";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Product({ type }: any) {
  const [mainCat, setMainCat] = useState([]);
  const [subCat, setSubCat] = useState([]);
  const [initSubCat, setInitSubCat] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState({ subCategory: "" });
  const [notFound, setNotFound] = useState(false);
  const fetchProduct = async () => {
    const subCat = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/product`
      // `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/product/all`
    );
    const products = await subCat.json();

    const filteredProducts = products?.rows?.filter(
      (i: any) => i?.type == type
    );
    // console.log(products);
    setProducts(filteredProducts);
  };
  const fetchCat = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/category-main`
    );
    const data = await res.json();
    const subCat = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/category-sub`
    );
    const subCatData = await subCat.json();

    setMainCat(
      data.rows.filter((i: any) => i?.type == type || i?.type == "both")
    );
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

      setSubCat(filtered);
    }
  };

  const onClear = () => {
    // @ts-ignore
    setFilter({ subCategory: "", mainCategory: "", keyword: "" });
    setFilteredProducts([]);
    setNotFound(false);
  };

  const onSearch = () => {
    const filteredProduct = products.filter((item: any) => {
      let mainCategoryMatch = true;
      let subCategoryMatch = true;
      let keywordMatch = true;
      // @ts-ignore
      if (filter?.mainCategory) {
        mainCategoryMatch =
          // @ts-ignore
          item?.subCategory?.mainCategory?.id == filter?.mainCategory;
      }
      if (filter?.subCategory) {
        subCategoryMatch = item?.subCategory?.id == filter?.subCategory;
      }
      // @ts-ignore
      if (filter?.keyword) {
        keywordMatch =
          // @ts-ignore
          item?.subCategory?.nameTH?.toLowerCase().includes(filter?.keyword) ||
          item?.subCategory?.mainCategory?.nameTH
            ?.toLowerCase()
            // @ts-ignore
            .includes(filter?.keyword) ||
          // @ts-ignore
          item?.productNameTH?.toLowerCase().includes(filter?.keyword);
      }
      return keywordMatch && subCategoryMatch && mainCategoryMatch;
    });

    const nothing =
      // @ts-ignore
      !filter?.mainCategory && !filter?.subCategory && !filter?.keyword;
    if (!nothing) {
      filteredProduct.length > 0 ? setNotFound(false) : setNotFound(true);
      setFilteredProducts(filteredProduct);
    }
  };
  console.log(filteredProducts);
  console.log(filter);

  useEffect(() => {
    fetchCat();
    fetchProduct();
  }, []);

  return (
    <div>
      <ProductFilter
        mainCat={mainCat}
        subCat={subCat}
        filter={filter}
        setFilter={onChangeFilter}
        onClear={onClear}
        onSearch={onSearch}
      />
      {filteredProducts.length > 0 &&
        // @ts-ignore
        (filter?.keyword || filter?.subCategory || filter?.mainCategory) && (
          <div className="w-full pb-4  border-b border-slate-200 ">
            <ProductGrid
              title="สินค้าที่ค้นพบ"
              data={filteredProducts}
              type={type}
              urlPre={"/main-category"}
              product={true}
            />
          </div>
        )}
      {notFound && (
        <div className="w-full text-center text-2xl text-slate-500 py-6  bg-slate-100 shadow-sm rounded-xl">
          ไม่พบสินค้าที่ค้นหา
        </div>
      )}

      <ProductGrid
        title={"หมวดหมู่สินค้า"}
        data={mainCat}
        type={type}
        urlPre={"/main-category"}
        product={false}
      />
    </div>
  );
}
