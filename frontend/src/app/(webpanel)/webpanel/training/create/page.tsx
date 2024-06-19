"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddressForm from "@/components/webpanel/AddressForm/AddressForm";
import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import PositionForm from "@/components/webpanel/PositionForm/PositionForm";
import SubjectForm from "@/components/webpanel/SubjectForm/SubjectForm";
import TrainingForm from "@/components/webpanel/TrainingForm/TrainingForm";
import { FetchContext } from "@/contexts/FetchContext";
import { useContext, useEffect, useState } from "react";

export default function TrainingCreate({
  params: { id },
  // data,
}: any) {
  const [data, setData] = useState({});
  const [calendar, setCalendar] = useState([]);
  const { onFetchOne, onSave }: any = useContext(FetchContext);
  const envLangs = process.env.NEXT_PUBLIC_LANGUAGES;
  //   @ts-ignore
  const languages = envLangs.split(",").map((i: any) => i.toUpperCase());

  const onCreate = async () => {
    //   @ts-ignore
    onSave(data, "POST", id, "training", `Create Training ${data?.nameTH}`);
  };

  const onChangeState = (e: any, field: string) => {
    setData((prevState: any) => ({ ...prevState, [field]: e }));
  };

  return (
    <DefaultLayout>
      <Breadcrumb
        //   @ts-ignore
        pageName={`Create New Course`}
        prevPage={{ pageName: `Training`, url: "/webpanel/training" }}
      />

      <TrainingForm
        data={data}
        onChangeState={onChangeState}
        languages={languages}
        tableData={calendar}
        edit={false}
        onSave={onCreate}
      />
    </DefaultLayout>
  );
}
