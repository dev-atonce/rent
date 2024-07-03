"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddressForm from "@/components/webpanel/AddressForm/AddressForm";
import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import PositionForm from "@/components/webpanel/PositionForm/PositionForm";
import SubjectForm from "@/components/webpanel/SubjectForm/SubjectForm";
import TrainingForm from "@/components/webpanel/TrainingForm/TrainingForm";
import { FetchContext } from "@/contexts/FetchContext";
import { useContext, useEffect, useState } from "react";

export default function TrainingEdit({
  params: { id },
  // data,
}: any) {
  const [data, setData] = useState({});
  const [calendar, setCalendar] = useState([]);
  const { onFetchOne, onSave }: any = useContext(FetchContext);
  const envLangs = process.env.NEXT_PUBLIC_LANGUAGES;
  //   @ts-ignore
  const languages = envLangs.split(",").map((i: any) => i.toUpperCase());

  const onFetch = async () => {
    const data = await onFetchOne("training", id);
    const calendar = await onFetchOne("calendar", id);

    setData({ ...data, initialName: data?.titleTH });
    setCalendar(calendar?.rows);
  };

  const onFetchCalendar = async () => {
    const calendar = await onFetchOne("calendar", id);

    setCalendar(calendar?.rows);
  };

  const onEdit = async () => {
    //   @ts-ignore
    onSave(data, "PUT", id, "training", `Edit Training ${data?.nameTH}`);
  };

  const onChangeState = (e: any, field: string) => {
    setData((prevState: any) => ({ ...prevState, [field]: e }));
  };

  useEffect(() => {
    onFetch();
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb
        //   @ts-ignore
        pageName={`Edit Course: ${data?.initialName}`}
        prevPage={{ pageName: `Training`, url: "/webpanel/training" }}
      />

      <TrainingForm
        onFetchCalendar={onFetchCalendar}
        data={data}
        onChangeState={onChangeState}
        languages={languages}
        tableData={calendar}
        edit={true}
        onSave={onEdit}
      />
    </DefaultLayout>
  );
}
