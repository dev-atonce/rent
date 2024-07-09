"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import MainCatForm from "@/components/webpanel/MainCatForm/MainCatForm";
import { FetchContext } from "@/contexts/FetchContext";
import { useContext, useEffect, useState } from "react";

export default function MainCatCreatePage({ params: { id } }: any) {
  const [data, setData] = useState({});
  const { onFetchOne, onSave }: any = useContext(FetchContext);
  const envLangs = process.env.NEXT_PUBLIC_LANGUAGES;
  //   @ts-ignore
  const languages = envLangs.split(",").map((i: any) => i.toUpperCase());

  const onCreate = async () => {
    // @ts-ignore
    const modifiedData = { ...data };

    onSave(
      modifiedData,
      "POST",
      null,
      "mainCategory",
      //   @ts-ignore
      `Create New Category:${data?.nameTH}`
    );
  };

  const onChangeState = (e: any, field: string) => {
    setData((prevState: any) => ({ ...prevState, [field]: e }));
  };
  const onChangeSeoState = (e: any, field: string) => {
    setData((prevState: any) => ({
      ...prevState,
      seo: { ...prevState?.seo, [field]: e },
    }));
  };

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName={`Create New Main Category`}
        prevPage={{ pageName: `Product`, url: "/webpanel/product" }}
      />

      <MainCatForm
        mainCat={true}
        languages={languages}
        onSave={onCreate}
        data={data}
        onChangeState={onChangeState}
        id={id}
        onChangeSeoState={onChangeSeoState}
      />
    </DefaultLayout>
  );
}
