"use client";
import React, { useState } from "react";
import type { ConfigProviderProps, RadioChangeEvent } from "antd";
import { Radio, Tabs } from "antd";
import Quality from "./Quality";
import Environment from "./Environment";

type SizeType = ConfigProviderProps["componentSize"];

const PolicyTab = ({ lng }: any) => {
  const [size, setSize] = useState<SizeType>("small");

  const text: any = {
    en: { quality: "Quality Policy", envi: "Environmental Policy" },
    th: { quality: "นโยบายคุณภาพ", envi: "นโยบายด้านสิ่งแวดล้อม" },
  };
  const data = [
    { title: text[lng]?.quality, content: <Quality lng={lng} /> },
    { title: text[lng]?.envi, content: <Environment lng={lng} /> },
  ];

  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={"large"}
        items={data?.map((i, k) => {
          return {
            label: i?.title,
            key: String(k + 1),
            children: i?.content,
          };
        })}
      />
    </div>
  );
};

export default PolicyTab;
