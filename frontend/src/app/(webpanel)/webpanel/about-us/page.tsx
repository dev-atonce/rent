"use client";
import { useCallback, useContext, useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TextEditor from "@/components/TextEditor";
import { FetchContext } from "@/contexts/FetchContext";
import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

export default function AboutPage() {
  const [aboutState, setAboutState] = useState({} as any);
  const [langState, setLangState] = useState(
    process.env.NEXT_PUBLIC_MAIN_LANGUAGE
  );
  const envLangs = process.env.NEXT_PUBLIC_LANGUAGES;
  const { onSave, onFetchOne }: any = useContext(FetchContext);
  // @ts-ignore
  const languages = envLangs.split(",").map((i: any) => i.toUpperCase());

  const fetchData = useCallback(async () => {
    const history = await onFetchOne("about-us", "history");
    const organization = await onFetchOne("about-us", "history");
    // const condition = await onFetchOne("about-us", "condition");
    // const insurance = await onFetchOne("about-us", "insurance");
    // const document = await onFetchOne("about-us", "document");
    // const payment = await onFetchOne("about-us", "payment");
    // const rts = await onFetchOne("about-us", "rts");
    setAboutState({
      history,
      organization,
      // condition,
      // insurance,
      // document,
      // payment,
      // rts,
    });
  }, []);

  const onChangeState = (e: any, field: string) => {
    setAboutState((prevState: any) => ({ ...prevState, [field]: e }));
  };

  const onSaveGeneral = () => {
    const modifiedState = { ...aboutState };
    modifiedState.type = "about-us";

    // console.log(modifiedState)
    onSave(modifiedState, "PUT", null, "about-us", "update about-us");
  };

  const onChange = (key: string) => {
    console.log(key);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(aboutState);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "ประวัติบริษัท",
      children: (
        <div>
          {languages?.map(
            (i: any, k: any) =>
              i?.toLowerCase() === langState && (
                <TextEditor
                  key={k}
                  id={`aboutUs${i.toUpperCase()}`}
                  setState={onChangeState}
                  state={aboutState?.history}
                  prop={aboutState?.history && `aboutUs${i.toUpperCase()}`}
                  placeholder="Detail"
                  editor={{
                    name: `aboutUs${i.toUpperCase()}`,
                    images: {
                      getPath: `about-us`,
                      uploadPath: `about-us`,
                    },
                  }}
                />
              )
          )}
        </div>
      ),
    },
    // {
    //   key: "2",
    //   label: "ผังองค์กร",
    //   children: (
    //     <div>
    //       {languages?.map(
    //         (i: any, k: any) =>
    //           i?.toLowerCase() === langState && (
    //             <TextEditor
    //               key={k}
    //               id={`aboutUs${i.toUpperCase()}`}
    //               setState={onChangeState}
    //               state={aboutState?.history}
    //               prop={aboutState && `aboutUs${i.toUpperCase()}`}
    //               placeholder="Detail"
    //               editor={{
    //                 name: `aboutUs${i.toUpperCase()}`,
    //                 images: {
    //                   getPath: `about-us`,
    //                   uploadPath: `about-us`,
    //                 },
    //               }}
    //             />
    //           )
    //       )}
    //     </div>
    //   ),
    // },
    // {
    //   key: "3",
    //   label: "ข้อกำหนดและเงื่อนไขในการเช่า",
    //   children: (
    //     <div>
    //       {languages?.map(
    //         (i: any, k: any) =>
    //           i?.toLowerCase() === langState && (
    //             <TextEditor
    //               key={k}
    //               id={`aboutUs${i.toUpperCase()}`}
    //               setState={onChangeState}
    //               state={aboutState?.history}
    //               prop={aboutState && `aboutUs${i.toUpperCase()}`}
    //               placeholder="Detail"
    //               editor={{
    //                 name: `aboutUs${i.toUpperCase()}`,
    //                 images: {
    //                   getPath: `about-us`,
    //                   uploadPath: `about-us`,
    //                 },
    //               }}
    //             />
    //           )
    //       )}
    //     </div>
    //   ),
    // },
    // {
    //   key: "4",
    //   label: "ความคุ้มครองเครื่องจักร",
    //   children: (
    //     <div>
    //       {languages?.map(
    //         (i: any, k: any) =>
    //           i?.toLowerCase() === langState && (
    //             <TextEditor
    //               key={k}
    //               id={`aboutUs${i.toUpperCase()}`}
    //               setState={onChangeState}
    //               state={aboutState?.history}
    //               prop={aboutState && `aboutUs${i.toUpperCase()}`}
    //               placeholder="Detail"
    //               editor={{
    //                 name: `aboutUs${i.toUpperCase()}`,
    //                 images: {
    //                   getPath: `about-us`,
    //                   uploadPath: `about-us`,
    //                 },
    //               }}
    //             />
    //           )
    //       )}
    //     </div>
    //   ),
    // },
    // {
    //   key: "5",
    //   label: "ขั้นตอนและเอกสารสำหรับลูกค้าใหม่",
    //   children: (
    //     <div>
    //       {languages?.map(
    //         (i: any, k: any) =>
    //           i?.toLowerCase() === langState && (
    //             <TextEditor
    //               key={k}
    //               id={`aboutUs${i.toUpperCase()}`}
    //               setState={onChangeState}
    //               state={aboutState?.history}
    //               prop={aboutState && `aboutUs${i.toUpperCase()}`}
    //               placeholder="Detail"
    //               editor={{
    //                 name: `aboutUs${i.toUpperCase()}`,
    //                 images: {
    //                   getPath: `about-us`,
    //                   uploadPath: `about-us`,
    //                 },
    //               }}
    //             />
    //           )
    //       )}
    //     </div>
    //   ),
    // },
    // {
    //   key: "6",
    //   label: "ช่องทางการชำระเงิน",
    //   children: (
    //     <div>
    //       {languages?.map(
    //         (i: any, k: any) =>
    //           i?.toLowerCase() === langState && (
    //             <TextEditor
    //               key={k}
    //               id={`aboutUs${i.toUpperCase()}`}
    //               setState={onChangeState}
    //               state={aboutState?.history}
    //               prop={aboutState && `aboutUs${i.toUpperCase()}`}
    //               placeholder="Detail"
    //               editor={{
    //                 name: `aboutUs${i.toUpperCase()}`,
    //                 images: {
    //                   getPath: `about-us`,
    //                   uploadPath: `about-us`,
    //                 },
    //               }}
    //             />
    //           )
    //       )}
    //     </div>
    //   ),
    // },
    // {
    //   key: "7",
    //   label: "RTS",
    //   children: (
    //     <div>
    //       {languages?.map(
    //         (i: any, k: any) =>
    //           i?.toLowerCase() === langState && (
    //             <TextEditor
    //               key={k}
    //               id={`aboutUs${i.toUpperCase()}`}
    //               setState={onChangeState}
    //               state={aboutState?.history}
    //               prop={aboutState && `aboutUs${i.toUpperCase()}`}
    //               placeholder="Detail"
    //               editor={{
    //                 name: `aboutUs${i.toUpperCase()}`,
    //                 images: {
    //                   getPath: `about-us`,
    //                   uploadPath: `about-us`,
    //                 },
    //               }}
    //             />
    //           )
    //       )}
    //     </div>
    //   ),
    // },
  ];

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName="About Us"
        prevPage={{ pageName: "Dashboard", url: "/webpanel" }}
        // prevPage={{ pageName: "About Us", url: "/webpanel/about-us" }}
      />
      <div className="grid grid-cols-1 gap-y-9 sm:grid-cols-1 ">
        <div className="col-span-2">
          <div className="bg-white rounded-lg p-2">
            <div className="col-span-2">
              <div className="bg-white rounded-lg p-2">
                {/* <h5 className="text-bold">Detail</h5> */}
                {/* <Tabs defaultActiveKey="1" items={items} onChange={onChange} /> */}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onSaveGeneral}
            className="bg-blue-500 text-white p-2 rounded-lg mt-4 w-full focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
}
