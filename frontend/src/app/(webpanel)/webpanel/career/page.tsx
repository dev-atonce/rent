"use client";

import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import FormGroup from "@/components/webpanel/FormGroup/FormGroup";
import { useContext, useEffect, useState } from "react";
import TableThree from "@/components/webpanel/Tables/TableThree";
import Modal from "@/components/webpanel/Modal/Modal";
import Link from "next/link";
import { LogInContext } from "@/contexts/LogInContext";
import { FetchContext } from "@/contexts/FetchContext";

export default function UserPage() {
  const [sort, setSort] = useState(false);
  const { onFetchOne, onDelete }: any = useContext(FetchContext);
  const envLangs = process.env.NEXT_PUBLIC_LANGUAGES;
  //   @ts-ignore
  const languages = envLangs.split(",").map((i: any) => i.toUpperCase());
  const [data, setData] = useState([]);

  const initialModalState = {};
  const [modalState, setModalState] = useState(initialModalState);

  async function fetchData() {
    const data = await onFetchOne("position", null);
    setData(data?.rows);
  }

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
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName="Job Positions"
        prevPage={{ pageName: "Dashboard", url: "/webpanel" }}
      />

      <>
        <div className="flex items-center justify-end gap-1 mb-2">
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
          onDelete={onDeleteItem}
          drag={sort}
          type="position"
          data={data}
          setData={setData}
          col={[
            { title: "Title (English)", minWidth: "" },
            { title: "Title (Thai)", minWidth: "" },
            { title: "Created On", minWidth: "" },
            { title: "Action", minWidth: "" },
          ]}
        />
      </>
    </DefaultLayout>
  );
}
