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
  const [historyState, setHistoryState] = useState({} as any);
  const [organizationState, setOrganizationState] = useState({} as any);
  const [conditionState, setConditionState] = useState({} as any);
  const [rtsState, setRtsState] = useState({} as any);
  const [insuranceState, setInsuranceState] = useState({} as any);
  const [documentState, setDocumentState] = useState({} as any);
  const [paymentState, setPaymentState] = useState({} as any);
  const [langState, setLangState] = useState(
    process.env.NEXT_PUBLIC_MAIN_LANGUAGE
  );
  const envLangs = process.env.NEXT_PUBLIC_LANGUAGES;
  const { onSave, onFetchOne }: any = useContext(FetchContext);
  // @ts-ignore
  const languages = envLangs.split(",").map((i: any) => i.toUpperCase());

  // const fetchData = useCallback(async () => {
  //   const history = await onFetchOne("about-us", "history");
  //   const organization = await onFetchOne("about-us", "organization");
  //   const condition = await onFetchOne("about-us", "condition");
  //   const insurance = await onFetchOne("about-us", "insurance");
  //   const document = await onFetchOne("about-us", "document");
  //   const payment = await onFetchOne("about-us", "payment");
  //   const rts = await onFetchOne("about-us", "rts");
  //   setHistoryState({ ...history });
  //   setOrganizationState({ ...organization });
  //   setConditionState({ ...condition });
  //   setRtsState({ ...rts });
  //   setInsuranceState({ ...insurance });
  //   setDocumentState({ ...document });
  //   setPaymentState({ ...payment });
  // }, []);

  const fetchData = async () => {
    const history = await onFetchOne("about-us", "history");
    const organization = await onFetchOne("about-us", "organization");
    const condition = await onFetchOne("about-us", "condition");
    const insurance = await onFetchOne("about-us", "insurance");
    const document = await onFetchOne("about-us", "document");
    const payment = await onFetchOne("about-us", "payment");
    const rts = await onFetchOne("about-us", "rts");
    console.log(history,organization)
    setHistoryState({ ...history });
    setOrganizationState({ ...organization });
    setConditionState({ ...condition });
    setRtsState({ ...rts });
    setInsuranceState({ ...insurance });
    setDocumentState({ ...document });
    setPaymentState({ ...payment });
  };

  const onChangeHistory = (e: any, field: string) => {
    setHistoryState((prevState: any) => ({
      ...prevState,
      [field]: e,
    }));
  };
  const onChangeOrganization = (e: any, field: string) => {
    setOrganizationState((prevState: any) => ({
      ...prevState,
      [field]: e,
    }));
  };
  const onChangeCondition = (e: any, field: string) => {
    setConditionState((prevState: any) => ({
      ...prevState,

      [field]: e,
    }));
  };
  const onChangeRts = (e: any, field: string) => {
    setRtsState((prevState: any) => ({
      ...prevState,
      [field]: e,
    }));
  };
  const onChangeInsurance = (e: any, field: string) => {
    setInsuranceState((prevState: any) => ({
      ...prevState,
      [field]: e,
    }));
  };
  const onChangeDocument = (e: any, field: string) => {
    setDocumentState((prevState: any) => ({
      ...prevState,
      [field]: e,
    }));
  };
  const onChangePayment = (e: any, field: string) => {
    setPaymentState((prevState: any) => ({
      ...prevState,
      [field]: e,
    }));
  };

  const onSaveGeneral = () => {
    const state: any = [
      historyState,
      organizationState,
      conditionState,
      insuranceState,
      documentState,
      paymentState,
      rtsState,
    ];

      state?.forEach((v:any, i:any) => {
        // console.log(v,i);
        onSave(i, "PUT", v.id, "about-us", "update about-us");
      });

    console.log(state);
    // onSave(state[0], "PUT", null, "about-us", "update about-us");
    // onSave(state[1], "PUT", null, "about-us", "update about-us");
  };

  const onChange = (key: string) => {
    console.log(key);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                  id={`aboutUs${i.toUpperCase()}-History`}
                  setState={onChangeHistory}
                  state={historyState}
                  prop={historyState && `aboutUs${i.toUpperCase()}'`}
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
    {
      key: "2",
      label: "ผังองค์กร",
      children: (
        <div>
          {languages?.map(
            (i: any, k: any) =>
              i?.toLowerCase() === langState && (
                <TextEditor
                  key={k}
                  id={`aboutUs${i.toUpperCase()}-Organization`}
                  setState={onChangeOrganization}
                  state={organizationState}
                  prop={organizationState && `aboutUs${i.toUpperCase()}`}
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
    {
      key: "3",
      label: "ข้อกำหนดและเงื่อนไขในการเช่า",
      children: (
        <div>
          {languages?.map(
            (i: any, k: any) =>
              i?.toLowerCase() === langState && (
                <TextEditor
                  key={k}
                  id={`aboutUs${i.toUpperCase()}-Condition`}
                  setState={onChangeCondition}
                  state={conditionState}
                  prop={conditionState && `aboutUs${i.toUpperCase()}`}
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
    {
      key: "4",
      label: "ความคุ้มครองเครื่องจักร",
      children: (
        <div>
          {languages?.map(
            (i: any, k: any) =>
              i?.toLowerCase() === langState && (
                <TextEditor
                  key={k}
                  id={`aboutUs${i.toUpperCase()}-Insurance`}
                  setState={onChangeInsurance}
                  state={insuranceState}
                  prop={insuranceState && `aboutUs${i.toUpperCase()}`}
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
    {
      key: "5",
      label: "ขั้นตอนและเอกสารสำหรับลูกค้าใหม่",
      children: (
        <div>
          {languages?.map(
            (i: any, k: any) =>
              i?.toLowerCase() === langState && (
                <TextEditor
                  key={k}
                  id={`aboutUs${i.toUpperCase()}-Document`}
                  setState={onChangeDocument}
                  state={documentState}
                  prop={documentState && `aboutUs${i.toUpperCase()}`}
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
    {
      key: "6",
      label: "ช่องทางการชำระเงิน",
      children: (
        <div>
          {languages?.map(
            (i: any, k: any) =>
              i?.toLowerCase() === langState && (
                <TextEditor
                  key={k}
                  id={`aboutUs${i.toUpperCase()}-Payment`}
                  setState={onChangePayment}
                  state={paymentState}
                  prop={paymentState && `aboutUs${i.toUpperCase()}`}
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
    {
      key: "7",
      label: "RTS",
      children: (
        <div>
          {languages?.map(
            (i: any, k: any) =>
              i?.toLowerCase() === langState && (
                <TextEditor
                  key={k}
                  id={`aboutUs${i.toUpperCase()}-Rts`}
                  setState={onChangeRts}
                  state={rtsState}
                  prop={rtsState && `aboutUs${i.toUpperCase()}`}
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
                <Tabs defaultActiveKey="1" items={items} />
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
