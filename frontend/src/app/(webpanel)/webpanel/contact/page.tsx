"use client";

import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import FormGroup from "@/components/webpanel/FormGroup/FormGroup";
import { useContext, useEffect, useState } from "react";
import TableThree from "@/components/webpanel/Tables/TableThree";
import { FetchContext } from "@/contexts/FetchContext";
import Link from "next/link";

export default function EditContactPage() {
  const [addressDragState, setAddressDragState] = useState(false);
  const [subjectDragState, setSubjectDragState] = useState(false);
  const [addressList, setAddressList] = useState([]);
  const [subjectList, setSubjectList] = useState([]);
  const { onFetchOne, onDelete }: any = useContext(FetchContext);

  const fetchData = async () => {
    const addressData = await onFetchOne("address", null);
    setAddressList(addressData?.rows);

    const subjectData = await onFetchOne("subject", null);
    setSubjectList(subjectData?.rows);
  };

  const envLangs = process.env.NEXT_PUBLIC_LANGUAGES;
  //   @ts-ignore
  const languages = envLangs.split(",").map((i: any) => i.toUpperCase());

  const onDeleteItem = async (id: any, type: any) => {
    if (type == "subject") {
      try {
        const res = await onDelete(id, type, "Delete Subject");
        if (res.success) {
          fetchData();
        }
      } catch (err) {
        console.log(err);
      }
    } else if (type == "address") {
      try {
        const res = await onDelete(id, type, "Delete Address");
        if (res.success) {
          fetchData();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName="Contact Information"
        prevPage={{ pageName: "Dashboard", url: "/webpanel" }}
      />

      <div className="grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          <div className="">
            <div className="flex justify-end">
              <div className="flex items-center gap-1 py-1">
                <button
                  onClick={() => setAddressDragState(!addressDragState)}
                  className={`${!addressDragState ? "border-yellow-400 text-yellow-600" : "border-green-400 text-green-600"} bg-white border-2 px-6 py-1 rounded-lg font-bold transition-all duration-700`}
                >
                  {!addressDragState ? "SORT" : "DONE"}
                </button>

                <Link
                  href="/webpanel/contact/create"
                  className={`bg-white text-primary border-primary border-2 px-6 py-1 rounded-lg font-bold transition-all duration-700`}
                >
                  CREATE ADDRESS
                </Link>
              </div>
            </div>
            <TableThree
              onDelete={onDeleteItem}
              drag={addressDragState}
              setData={setAddressList}
              type="address"
              data={addressList}
              col={[
                { title: "", minWidth: "" },
                { title: "Branch", minWidth: "" },
                { title: "Action", minWidth: "" },
              ]}
            />
          </div>
          {/* Color Form */}

          {/* <!-- Sign Up Form --> */}
        </div>
      </div>
    </DefaultLayout>
  );
}
