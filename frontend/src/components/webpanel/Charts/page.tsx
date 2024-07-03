"use client";
import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import ChartOne from "@/components/webpanel/Charts/ChartOne";
import ChartTwo from "@/components/webpanel/Charts/ChartTwo";
import ChartThree from "@/components/webpanel/Charts/ChartThree";
import React from "react";

const Chart: React.FC = () => {
  return (
    <>
      {/* @ts-ignore */}
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;
