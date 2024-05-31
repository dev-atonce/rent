"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import MainCatForm from "@/components/webpanel/MainCatForm/MainCatForm";
import { FetchContext } from "@/contexts/FetchContext";
import { useContext, useEffect, useState } from "react";

export default function SubCatEditPage({ params: { id } }: any) {
  const [data, setData] = useState({});
  const { onSave }: any = useContext(FetchContext);

  const envLangs = process.env.NEXT_PUBLIC_LANGUAGES;
  //   @ts-ignore
  const languages = envLangs.split(",").map((i: any) => i.toUpperCase());

  const onSaveSeo = () => {
    // @ts-ignore
    const modifiedState = { seo: { ...data?.seo } };

    onSave(modifiedState, "PUT", id, "subCategory", "update Sub Category SEO");
  };

  const onCreate = async () => {
    console.log(data);
    onSave(
      // @ts-ignore
      data,
      "POST",
      id,
      "subCategory",
      //   @ts-ignore
      `Create Sub Category ${data?.nameTH}`
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
        pageName={`Create New Sub-Category`}
        prevPage={{ pageName: `Product`, url: "/webpanel/product" }}
      />

      <MainCatForm
        mainCat={false}
        languages={languages}
        onSave={onCreate}
        data={data}
        onChangeState={onChangeState}
        id={id}
        onSaveSeo={onCreate}
        onChangeSeoState={onChangeSeoState}
      />
    </DefaultLayout>
  );
}
