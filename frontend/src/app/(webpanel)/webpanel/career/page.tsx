"use client";

import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useCallback, useContext, useEffect, useState } from "react";
import TableThree from "@/components/webpanel/Tables/TableThree";
import Link from "next/link";
import { FetchContext } from "@/contexts/FetchContext";
import AntPagination from "@/components/common/AntPagination/AntPagination";

export default function UserPage() {
  const [sort, setSort] = useState(false);
  const { onFetchPage, onDelete }: any = useContext(FetchContext);
  const [data, setData] = useState([]);
  const [pageState, setPageState] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchData = useCallback(async () => {
    const data = await onFetchPage("position", "all", pageState);
    setTotal(data?.total);
    setData(data?.rows);
  }, [onFetchPage, pageState]);

  const onDeleteItem = async (id: any) => {
    try {
      const res = await onDelete(id, "position", "Delete Job Position");
      if (res.success) {
        fetchData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName="Job Positions"
        prevPage={{ pageName: "Dashboard", url: "/webpanel" }}
      />
      <>
        <div className="flex items-center justify-end gap-1 py-1">
          <button
            onClick={() => setSort(!sort)}
            className={`${!sort ? "border-yellow-400 text-yellow-600" : "border-green-400 text-green-600"} bg-white border-2 px-6 py-1 rounded-lg font-bold transition-all duration-700`}
          >
            {!sort ? "SORT" : "DONE"}
          </button>
          <Link
            href="career/create"
            className={`bg-white text-primary border-primary border-2 px-6 py-1 rounded-lg font-bold transition-all duration-700`}
          >
            CREATE NEW POSITION
          </Link>
        </div>

        <TableThree
          currentPage={pageState}
          onDelete={onDeleteItem}
          drag={sort}
          type="position"
          data={data}
          setData={setData}
          col={[
            { title: "Title (Thai)", minWidth: "" },
            { title: "Created On", minWidth: "" },
            { title: "Action", minWidth: "" },
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
