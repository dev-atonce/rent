"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import MainCatForm from "@/components/webpanel/MainCatForm/MainCatForm";

import { FetchContext } from "@/contexts/FetchContext";
import { useContext, useEffect, useState } from "react";

const ProductForm = dynamic(
  () => import("@/components/webpanel/ProductForm/ProductForm"),
  { ssr: false }
);

export default function ProductCreatePage({ params: { id } }: any) {
  const [data, setData] = useState({});
  const { onFetchOne, onSave, onDeleteGallery }: any = useContext(FetchContext);

  const envLangs = process.env.NEXT_PUBLIC_LANGUAGES;
  //   @ts-ignore
  const languages = envLangs.split(",").map((i: any) => i.toUpperCase());

  const onFetch = async () => {
    const data = await onFetchOne("product", id);
    const { subCategory, gallery, ...restData } = data;

    setData({
      ...restData,
      _gallery: gallery,
      initialName: data?.productNameTH,
      curMainCat: data?.subCategory?.mainCategory?.nameTH,
      curSubCat: data?.subCategory?.nameTH,
    });
  };

  const onSaveSeo = () => {
    // @ts-ignore
    const modifiedState = { seo: { ...data?.seo } };

    onSave(modifiedState, "PUT", id, "subCategory", "update Sub Category SEO");
  };

  const onCreate = async () => {
    onSave(
      // @ts-ignore
      data,
      "POST",
      id,
      "product",
      //   @ts-ignore
      `Create Product ${data?.productNameTH}`
    );
  };
  const onDeleteImageGallery = async (position: any) => {
    const res = await onDeleteGallery(
      id,
      "product",
      position,
      "Delete Product Gallery"
    );
    if (res?.success) {
      setData((prevState: any) => ({
        ...prevState,
        _gallery: prevState._gallery.filter(
          (i: any, index: any) => index !== position
        ),
      }));
    }
  };

  const onChangeState = (e: any, field: string) => {
    setData((prevState: any) => ({ ...prevState, [field]: e }));
  };

  const onChangeSeoState = (e: any, field: string) => {
    setData((prevState: any) => ({
      ...prevState,
      productSeo: { ...prevState?.productSeo, [field]: e },
    }));
  };

  //   useEffect(() => {
  //     onFetch();
  //   }, []);

  return (
    <DefaultLayout>
      <Breadcrumb
        //   @ts-ignore
        pageName={`Create New Product`}
        prevPage={{ pageName: `Product`, url: "/webpanel/product" }}
      />

      <ProductForm
        mainCat={false}
        languages={languages}
        onSave={onCreate}
        data={data}
        onChangeState={onChangeState}
        id={id}
        onSaveSeo={onCreate}
        onChangeSeoState={onChangeSeoState}
        onDeleteImageGallery={onDeleteImageGallery}
      />
    </DefaultLayout>
  );
}
