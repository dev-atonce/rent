"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import MainCatForm from "@/components/webpanel/MainCatForm/MainCatForm";
import { FetchContext } from "@/contexts/FetchContext";
import { useContext, useEffect, useState } from "react";

export default function MainCatEditPage({ params: { id } }: any) {
  const [data, setData] = useState({});
  const { onFetchOne, onSave }: any = useContext(FetchContext);
  const envLangs = process.env.NEXT_PUBLIC_LANGUAGES;
  //   @ts-ignore
  const languages = envLangs.split(",").map((i: any) => i.toUpperCase());

  const onFetch = async () => {
    const data = await onFetchOne("mainCategory", id);

    setData({ ...data, initialName: data?.nameTH });
  };

  const onSaveSeo = () => {
    // @ts-ignore
    const modifiedState = { seo: { ...data?.seo } };

    onSave(
      modifiedState,
      "PUT",
      id,
      "mainCategorySeo",
      "update Main Category SEO"
    );
  };

  const onEdit = async () => {
    onSave(
      // @ts-ignore
      data,
      "PUT",
      id,
      "mainCategory",
      //   @ts-ignore
      `Edit Main Category ${data?.nameTH}`
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

  useEffect(() => {
    onFetch();
  }, []);

  console.log(data);
  return (
    <DefaultLayout>
      <Breadcrumb
        pageName={`Edit Main Category`}
        prevPage={{ pageName: `Product`, url: "/webpanel/product" }}
      />

      <MainCatForm
        mainCat={true}
        languages={languages}
        onSave={onEdit}
        data={data}
        onChangeState={onChangeState}
        id={id}
        onSaveSeo={onEdit}
        onChangeSeoState={onChangeSeoState}
      />
    </DefaultLayout>
  );
}
