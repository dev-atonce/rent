"use client";

import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useContext, useEffect, useState } from "react";
import TableThree from "@/components/webpanel/Tables/TableThree";
import Link from "next/link";
import Input from "@/components/webpanel/Input/Input";
import SelectGroupOne from "@/components/webpanel/SelectGroup/SelectGroupOne";
import { FetchContext } from "@/contexts/FetchContext";

// export const metadata: Metadata = {
//   title: "Next.js Form Layout | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Form Layout page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };

export default function ServicePage() {
  const { onFetchOne, onDelete }: any = useContext(FetchContext);
  const [data, setData] = useState([]);
  const [initData, setInitData] = useState([]);
  const [dragState, setDragState] = useState(false);
  const [filterState, setFilterState] = useState({ keyword: "", status: "0" });
  const envLangs: string | undefined = process.env.NEXT_PUBLIC_LANGUAGES;

  // @ts-ignore
  const languages: undefined | string[] = envLangs
    .split(",")
    .map((i: any) => i.toUpperCase());

  const initialModalState = {};
  const [modalState, setModalState] = useState(initialModalState);

  async function fetchData() {
    const data = await onFetchOne("service", "all");

    setInitData(data?.rows);

    setData(filter(data?.rows));
  }

  const onSetFilter = (value: any, keyProp: any) => {
    setFilterState((prev) => ({ ...prev, [keyProp]: value }));
  };

  const filter = (data: any) => {
    const keyword = filterState?.keyword?.toLowerCase();
    const status: string | boolean = filterState?.status;

    const filteredData = data?.filter((item: any) => {
      let keywordMatch = true;
      let statusMatch = true;

      if (keyword) {
        keywordMatch =
          item?.serviceNameEN?.toLowerCase().includes(keyword) ||
          item?.serviceNameTH?.toLowerCase().includes(keyword);
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

      return keywordMatch && statusMatch;
    });

    return filteredData;
  };

  const onDeleteItem = async (id: any) => {
    try {
      const res = await onDelete(id, "service", "Delete Service");
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
        pageName="Services"
        prevPage={{ pageName: "Dashboard", url: "/webpanel" }}
      />
      <>
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
              href="service/create"
              className={`bg-white text-primary border-primary border-2 px-6 py-1 rounded-lg font-bold transition-all duration-700`}
            >
              CREATE SERVICE
            </Link>
          </div>
        </div>
        <TableThree
          onDelete={onDeleteItem}
          drag={dragState}
          type="service"
          modal={{ modalState, setModalState }}
          data={data}
          setData={setData}
          col={[
            { title: "Service", minWidth: "" },
            { title: "Description", minWidth: "" },
            { title: "Created By", minWidth: "" },
            { title: "Created On", minWidth: "" },
            { title: "Actions", minWidth: "" },
            { title: "Status", minWidth: "" },
          ]}
        />
      </>
      {/* <Jodit /> */}
    </DefaultLayout>
  );
}
