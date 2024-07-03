"use client";

import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useContext, useEffect, useState } from "react";
import TableThree from "@/components/webpanel/Tables/TableThree";
import Link from "next/link";
import Input from "@/components/webpanel/Input/Input";
import SelectGroupOne from "@/components/webpanel/SelectGroup/SelectGroupOne";
import { FetchContext } from "@/contexts/FetchContext";
import { set } from "react-hook-form";

// export const metadata: Metadata = {
//   title: "Next.js Form Layout | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Form Layout page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };

export default function ProductPage() {
  const { onFetchOne, onDelete }: any = useContext(FetchContext);
  const [data, setData] = useState([]);
  const [mainCatData, setMainCatData] = useState([]);
  const [subCatData, setSubCatData] = useState([]);
  const [initData, setInitData] = useState([]);
  const [dragState, setDragState] = useState(false);
  const [mainCatDragState, setMainCatDragState] = useState(false);
  const [subCatDragState, setSubCatDragState] = useState(false);
  const [filterState, setFilterState] = useState({
    keyword: "",
    status: "0",
    category: "",
  });
  const envLangs: string | undefined = process.env.NEXT_PUBLIC_LANGUAGES;

  // @ts-ignore
  const languages: undefined | string[] = envLangs
    .split(",")
    .map((i: any) => i.toUpperCase());

  const initialModalState = {};
  const [modalState, setModalState] = useState(initialModalState);

  async function fetchData() {
    const data = await onFetchOne("product", "all");
    const mainCat = await onFetchOne("mainCategory", null);
    const subCat = await onFetchOne("subCategory", null);

    setInitData(data?.rows);

    setData(filter(data?.rows));
    setMainCatData(mainCat?.rows);
    setSubCatData(subCat?.rows);
  }

  const onSetFilter = (value: any, keyProp: any) => {
    setFilterState((prev) => ({ ...prev, [keyProp]: value }));
  };

  const filter = (data: any) => {
    const keyword = filterState?.keyword?.toLowerCase();
    const status: string | boolean = filterState?.status;
    const category = filterState?.category;

    const filteredData = data?.filter((item: any) => {
      let keywordMatch = true;
      let statusMatch = true;
      let categoryMatch = true;

      if (keyword) {
        keywordMatch =
          item?.subCategory?.nameTH?.toLowerCase().includes(keyword) ||
          item?.subCategory?.mainCategory?.nameTH
            ?.toLowerCase()
            .includes(keyword) ||
          item?.productNameTH?.toLowerCase().includes(keyword);
      }

      if (category && category !== "all") {
        categoryMatch = item?.subCategory?.mainCategory?.nameTH == category;
      }
      // @ts-ignore
      if (status !== undefined && status !== "all" && status !== "0") {
        // Handle status as boolean strings
        let convertedStatus;
        if (status === "true") {
          convertedStatus = true;
        } else if (status === "false") {
          convertedStatus = false;
        } else {
          convertedStatus = status;
        }
        statusMatch = item?.status === convertedStatus;
      }

      return keywordMatch && statusMatch && categoryMatch;
    });

    return filteredData;
  };

  const onDeleteMainCat = async (id: any) => {
    try {
      const res = await onDelete(id, "mainCategory", "Delete Main Category");
      if (res.success) {
        fetchData();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onDeleteSubCat = async (id: any) => {
    try {
      const res = await onDelete(id, "subCategory", "Delete Sub Category");
      if (res.success) {
        fetchData();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onDeleteProduct = async (id: any) => {
    try {
      const res = await onDelete(id, "product", "Delete Product");
      if (res.success) {
        fetchData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [modalState]);

  useEffect(() => {
    fetchData();
    setDragState(false);
  }, [filterState]);

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName="Products"
        prevPage={{ pageName: "Dashboard", url: "/webpanel" }}
      />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div>
            <div className="flex justify-between py-4">
              <h4 className=" text-xl">Main Category</h4>
              <div className="flex items-center justify-end gap-1">
                <button
                  onClick={() => setMainCatDragState(!mainCatDragState)}
                  className={`${!mainCatDragState ? "border-yellow-400 text-yellow-600" : "border-green-400 text-green-600"} bg-white border-2 px-6 py-1 rounded-lg font-bold transition-all duration-700`}
                >
                  {!mainCatDragState ? "SORT" : "DONE"}
                </button>

                <Link
                  href="product/maincat/create"
                  className={`bg-white text-primary border-primary border-2 px-6 py-1 rounded-lg font-bold transition-all duration-700`}
                >
                  CREATE MAIN-CATEGORY
                </Link>
              </div>
            </div>
            <div className="max-h-[50vh] overflow-scroll">
              <TableThree
                onDelete={onDeleteMainCat}
                drag={mainCatDragState}
                type="mainCategory"
                data={mainCatData}
                setData={setMainCatData}
                col={[
                  { title: "Main Category", minWidth: "" },
                  { title: "Action", minWidth: "" },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-9">
          <div className="">
            <div className="flex justify-between py-4">
              <h4 className=" text-xl">Sub-Category</h4>
              <div className="flex items-center justify-end gap-1">
                <button
                  onClick={() => setSubCatDragState(!subCatDragState)}
                  className={`${!subCatDragState ? "border-yellow-400 text-yellow-600" : "border-green-400 text-green-600"} bg-white border-2 px-6 py-1 rounded-lg font-bold transition-all duration-700`}
                >
                  {!subCatDragState ? "SORT" : "DONE"}
                </button>

                <Link
                  href="product/subcat/create"
                  className={`bg-white text-primary border-primary border-2 px-6 py-1 rounded-lg font-bold transition-all duration-700`}
                >
                  CREATE SUB-CATEGORY
                </Link>
              </div>
            </div>
            <div className="max-h-[50vh] overflow-scroll">
              <TableThree
                onDelete={onDeleteSubCat}
                drag={subCatDragState}
                type="subCategory"
                data={subCatData}
                setData={setSubCatData}
                col={[
                  { title: "Sub-Category", minWidth: "" },
                  { title: "Main-Category", minWidth: "" },
                  { title: "Action", minWidth: "" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <>
        <h2 className="text-2xl mt-6">All Product</h2>
        <div className="flex justify-between  item-center">
          <div className="flex items-center gap-1">
            <Input
              placeHolder="Search . . ."
              state={filterState}
              setState={onSetFilter}
              keyProp={"keyword"}
            />
            <div className=" w-40">
              {/* @ts-ignore */}
              <SelectGroupOne
                // @ts-ignore
                topLabel={false}
                // @ts-ignore
                label={"Status"}
                // @ts-ignore
                list={[
                  { title: "online", value: true },
                  { title: "offline", value: false },
                  { title: "all", value: "all" },
                ]}
                selectedOption={filterState}
                setSelectedOption={onSetFilter}
                keyProp="status"
              />
            </div>
            <div className=" w-49">
              {/* @ts-ignore */}
              <SelectGroupOne
                // @ts-ignore
                topLabel={false}
                // @ts-ignore
                label={"Category"}
                // @ts-ignore
                field="nameTH"
                list={[{ nameTH: "all" }, ...mainCatData]}
                selectedOption={filterState}
                setSelectedOption={onSetFilter}
                keyProp="category"
              />
            </div>
          </div>
          <div className="flex items-center gap-1">
            {(!filterState?.keyword || filterState?.keyword.length === 0) &&
              (filterState?.status === "0" ||
                filterState?.status === "all") && (
                <button
                  onClick={() => setDragState(!dragState)}
                  className={`${!dragState ? "border-yellow-400 text-yellow-600" : "border-green-400 text-green-600"} bg-white border-2 px-6 py-1 rounded-lg font-bold transition-all duration-700`}
                >
                  {!dragState ? "SORT" : "DONE"}
                </button>
              )}

            <Link
              href="product/create"
              className={`bg-white text-primary border-primary border-2 px-6 py-1 rounded-lg font-bold transition-all duration-700`}
            >
              CREATE PRODUCT
            </Link>
          </div>
        </div>
        <TableThree
          onDelete={onDeleteProduct}
          drag={dragState}
          type="product"
          modal={{ modalState, setModalState }}
          data={data}
          setData={setData}
          col={[
            { title: "Product", minWidth: "" },

            { title: "Category", minWidth: "" },
            { title: "Type", minWidth: "" },
            { title: "Actions", minWidth: "" },
            { title: "Status", minWidth: "" },
          ]}
        />
      </>
      {/* <Jodit /> */}
    </DefaultLayout>
  );
}
