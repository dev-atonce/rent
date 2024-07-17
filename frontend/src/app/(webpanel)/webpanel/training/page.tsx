"use client";

import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useContext, useEffect, useState } from "react";
import TableThree from "@/components/webpanel/Tables/TableThree";
import Link from "next/link";
import { FetchContext } from "@/contexts/FetchContext";
import AntPagination from "@/components/common/AntPagination/AntPagination";

export default function TrainingPage() {
  const [pageState, setPageState] = useState(1);
  const [total, setTotal] = useState(0);
  const { onFetchPage, onDelete }: any = useContext(FetchContext);
  const [data, setData] = useState([]);
  const [dragState, setDragState] = useState(false);

  const onDeleteItem = async (id: any) => {
    try {
      const res = await onDelete(id, "training", "Delete Training Course");
      if (res.success) {
        fetchData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  async function fetchData() {
    const data = await onFetchPage("training", "all", pageState);
    setTotal(data?.total);
    setData(data?.rows);
  }

  useEffect(() => {
    fetchData();
  }, [pageState]);

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName="Training Course"
        prevPage={{ pageName: "Dashboard", url: "/webpanel" }}
      />
      <>
        <div className="flex justify-end  item-center">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setDragState(!dragState)}
              className={`${!dragState ? "border-yellow-400 text-yellow-600" : "border-green-400 text-green-600"} bg-white border-2 px-6 py-1 rounded-lg font-bold transition-all duration-700`}
            >
              {!dragState ? "SORT" : "DONE"}
            </button>
            <Link
              href="training/create"
              className={`bg-white text-primary border-primary border-2 px-6 py-1 rounded-lg font-bold transition-all duration-700`}
            >
              CREATE NEW COURSE
            </Link>
          </div>
        </div>
        <TableThree
          onDelete={onDeleteItem}
          drag={dragState}
          type="training"
          data={data}
          setData={setData}
          col={[
            { title: "Course", minWidth: "" },
            { title: "Created On", minWidth: "" },
            { title: "Actions", minWidth: "" },
            { title: "Status", minWidth: "" },
          ]}
        />
        {total > Number(process.env.NEXT_PUBLIC_PERPAGE) && (
          <AntPagination
            total={total}
            currentPage={pageState}
            setCurrentPage={setPageState}
            pageSize={Number(process.env.NEXT_PUBLIC_PERPAGE)}
          />
        )}
      </>
    </DefaultLayout>
  );
}
