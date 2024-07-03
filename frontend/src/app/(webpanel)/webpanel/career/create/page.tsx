"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import PositionForm from "@/components/webpanel/PositionForm/PositionForm";

import { FetchContext } from "@/contexts/FetchContext";
import { useContext, useEffect, useState } from "react";

export default function PositionCreatePage({ params: { id } }: any) {
  const [data, setData] = useState({});
  const { onFetchOne, onSave }: any = useContext(FetchContext);
  const envLangs = process.env.NEXT_PUBLIC_LANGUAGES;
  //   @ts-ignore
  const languages = envLangs.split(",").map((i: any) => i.toUpperCase());

  const onCreate = async () => {
    onSave(
      data,
      "POST",
      null,
      "position",
      //   @ts-ignore
      `Create New Position:${data?.nameEN || data?.nameTH}`
    );
    // onSave(data, "PUT", id, "address", `Edit Address ${data?.nameEN}`);
  };

  const onChangeState = (e: any, field: string) => {
    setData((prevState: any) => ({ ...prevState, [field]: e }));
  };

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName={`Create New Job Title`}
        prevPage={{ pageName: `Career`, url: "/webpanel/career" }}
      />

      <PositionForm
        languages={languages}
        onSave={onCreate}
        data={data}
        onChangeState={onChangeState}
        id={id}
      />
    </DefaultLayout>
  );
}
