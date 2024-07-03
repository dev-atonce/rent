"use client";

import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useContext, useEffect, useState } from "react";
import TableThree from "@/components/webpanel/Tables/TableThree";
import Link from "next/link";
import { LogInContext } from "@/contexts/LogInContext";
import { FetchContext } from "@/contexts/FetchContext";

export default function UserPage() {
  const { onFetchOne }: any = useContext(FetchContext);
  const envLangs = process.env.NEXT_PUBLIC_LANGUAGES;
  const { user, onLogOut, noAuth }: any = useContext(LogInContext);

  const [data, setData] = useState([]);

  const initialModalState = {};
  const [modalState, setModalState] = useState(initialModalState);

  async function fetchData() {
    const data = await onFetchOne("log", null);
    console.log(data);
    setData(data?.rows);
  }

  useEffect(() => {
    user?.role != "user" ? fetchData() : noAuth();
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName="Activity Log"
        prevPage={{ pageName: "Settings", url: null }}
      />

      <>
        <div className="flex items-cente justify-end gap-1 mb-2">
          {/* <Link
            href="user/create"
            className={`bg-white text-primary border-primary border-2 px-6 py-1 rounded-lg font-bold transition-all duration-700`}
          >
            CREATE NEW USER
          </Link> */}
        </div>

        <TableThree
          type="log"
          modal={{ modalState, setModalState }}
          data={data}
          col={[
            { title: "Time", minWidth: "" },

            { title: "Activity", minWidth: "" },
            { title: "Module", minWidth: "" },
            { title: "User", minWidth: "" },
          ]}
        />
      </>
    </DefaultLayout>
  );
}
