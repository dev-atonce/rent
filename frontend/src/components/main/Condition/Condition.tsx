"use client";
import { useEffect, useState } from "react";
import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import Image from "next/image";

import { ConfigProvider, Tabs } from "antd";
import DynamicContent from "../DynamicContent/DynamicContent";

type TabPosition = "left" | "top";

export default function Condition({ data }: any) {
  const [tabPosition, setTabPosition] = useState<TabPosition>("left");
  const [conditionState, setConditionState] = useState({});
  const adjust = () => {
    setTabPosition(window.innerWidth > 1024 ? "left" : "top");
  };

  useEffect(() => {
    adjust();
    window.addEventListener("resize", adjust);
    return () => {
      window.removeEventListener("resize", adjust);
    };
  }, [tabPosition]);

  const tab1 = () => {
    return (
      <div className="mt-[-32px]">
        <DynamicContent content={data?.condition?.aboutUsTH} />
      </div>
    );
  };

  const tab2 = () => {
    return (
      <div className="mt-[-32px]">
        <DynamicContent content={data?.insurance?.aboutUsTH} />
      </div>
    );
  };
  const tab3 = () => {
    return (
      <div className="mt-[-32px]">
        <DynamicContent content={data?.document?.aboutUsTH} />
      </div>
    );
  };
  const tab4 = () => {
    return (
      <div className="mt-[-32px]">
        <DynamicContent content={data?.payment?.aboutUsTH} />
      </div>
    );
  };
  const tabItem = [
    { id: "tab_1", label: "ข้อกำหนดและเงื่อนไขในการเช่า", children: tab1 },
    { id: "tab_2", label: "ความคุ้มครองเครื่องจักร", children: tab2 },
    { id: "tab_3", label: "ขั้นตอนและเอกสารสำหรับลูกค้าใหม่", children: tab3 },
    { id: "tab_3", label: "ช่องทางการชำระเงิน", children: tab4 },
  ];

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-0  mb-20">
          <div className="col-span-12 terms-conditions ">
            <Tabs
              popupClassName="tabs-item"
              tabPosition={tabPosition}
              tabBarStyle={{
                display: "flex",
                justifyContent: "space-between",
              }}
              items={tabItem.map((_, i) => {
                const id = String(i + 1);
                return {
                  label: `${_.label}`,
                  className: "p-4",
                  key: id,
                  children: <_.children />,
                };
              })}
            />
          </div>
        </div>
      </div>
    </>
  );
}
