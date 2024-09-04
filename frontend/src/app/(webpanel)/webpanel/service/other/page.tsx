"use client";
import { useState, useEffect, useContext } from "react";
import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { FetchContext } from "@/contexts/FetchContext";
import TextEditor from "@/components/TextEditor";
import { useSearchParams } from "next/navigation";

export default function index() {
  // const { onFetchPage }: any = useContext(FetchContext);
  const [filterState, setFilterState] = useState({ type: "" });
  const { onFetchOne, onSave }: any = useContext(FetchContext);
  const [data, setData] = useState([]);
  const params = useSearchParams();

  async function fetchData(query: any) {
    const data = await onFetchOne(
      "about-us",
      `other-${params.get("type")}`,
      null,
      null
    );
    setData(data);
  }
  const onChangeState = (e: any, field: string) => {
    setData((prevState: any) => ({ ...prevState, [field]: e }));
  };
  const onEdit = async () => {
    // @ts-ignore
    onSave(
      data,
      "PUT",
      //   @ts-ignore
      data?.id,
      `other-${params.get("type")}`,
      //   @ts-ignore
      `Edit Service ${data?.productNameTH}`
    );
  };
  const toUcFirst = (string: String | null) => {
    //@ts-ignore
    return string?.charAt(0).toUpperCase() + string?.slice(1);
  };
  useEffect(() => {
    // setFilterState(queryString);
    const query = new URLSearchParams(filterState).toString();
    fetchData(query);
  }, [filterState]);

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName={`Other Service: ${toUcFirst(params.get("type"))}`}
        prevPage={[
          { pageName: "Dashboard", url: "/webpanel" },
          { pageName: "About-Us", url: "/webpanel/about-us" },
        ]}
      />
      <div className="grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          <TextEditor
            id={`aboutUsTH`}
            dataId={`aboutUsTH`}
            setState={onChangeState}
            state={data}
            prop={data && `aboutUsTH`}
            placeholder="aboutUsTH"
            editor={{
              editor: true,
              name: "aboutUsTH",
              images: {
                getPath: `about-us`,
                uploadPath: `about-us`,
              },
            }}
          />
          <div className="sm:col-span-2 py-2">
            <button
              onClick={onEdit}
              className="flex w-full justify-center rounded-lg bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
