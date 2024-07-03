"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import MainCatForm from "@/components/webpanel/MainCatForm/MainCatForm";
import { FetchContext } from "@/contexts/FetchContext";
import { useContext, useEffect, useState } from "react";

export default function SubCatEditPage({ params: { id } }: any) {
  const [data, setData] = useState({});
  const { onFetchOne, onSave }: any = useContext(FetchContext);

  const envLangs = process.env.NEXT_PUBLIC_LANGUAGES;
  //   @ts-ignore
  const languages = envLangs.split(",").map((i: any) => i.toUpperCase());

  const onFetch = async () => {
    const data = await onFetchOne("subCategory", id);
    const { mainCategory, ...restData } = data;

    setData({
      ...restData,
      initialName: data?.nameTH,
      curMainCat: data?.mainCategory?.nameTH,
    });
  };

  const onSaveSeo = () => {
    // @ts-ignore
    const modifiedState = { seo: { ...data?.seo } };

    onSave(modifiedState, "PUT", id, "subCategory", "update Sub Category SEO");
  };

  const onEdit = async () => {
    console.log(data);
    onSave(
      // @ts-ignore
      data,
      "PUT",
      id,
      "subCategory",
      //   @ts-ignore
      `Edit Sub Category ${data?.nameTH}`
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

  return (
    <DefaultLayout>
      <Breadcrumb
        //   @ts-ignore
        pageName={`Edit Sub Category: ${data?.initialName}`}
        prevPage={{ pageName: `Product`, url: "/webpanel/product" }}
      />

      <MainCatForm
        product={true}
        mainCat={false}
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
