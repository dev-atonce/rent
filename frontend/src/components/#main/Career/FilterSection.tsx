"use client";
import { useTranslation } from "react-i18next";
import PositionSelect from "./PositionSelect";
import ProvinceSelect from "./ProvinceSelect";
import { useEffect, useState } from "react";

interface FilterSectionProps {
  filter: { keyword: string; province: string; position: string };
  setFilter: any;
  onClickFilter: any;
  onClickReset: any;
  lng: string;
}

const FilterSection = ({
  filter,
  setFilter,
  onClickFilter,
  onClickReset,
  lng,
}: FilterSectionProps) => {
  const [positionState, setPositionState] = useState([]);
  const route = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/position`;
  const fetchPosition = async () => {
    const res = await fetch(route);
    const data = await res.json();
    setPositionState(data.rows);
  };

  useEffect(() => {
    fetchPosition();
  }, []);
  const { t } = useTranslation(lng);
  return (
    <div className="p-5 border border-slate-200 rounded-xl shadow">
      <h2 className="text-center text-2xl font-bold my-5 text-sky-500">
        {t("component.career.filter-title")}
      </h2>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-3 md:col-span-1">
          <ProvinceSelect
            value={filter.province}
            setFilter={setFilter}
            lng={lng}
          />
        </div>
        <div className="col-span-3 md:col-span-1">
          <PositionSelect
            // @ts-ignore
            list={positionState}
            value={filter.position}
            setFilter={setFilter}
            lng={lng}
          />
        </div>
        <div className="col-span-3 md:col-span-1">
          <input
            type="text"
            value={filter.keyword}
            placeholder={t("component.career.keyword")}
            className="border w-full border-slate-200 text-sm rounded-lg px-3 py-1.5"
            onChange={(e: any) =>
              setFilter((prev: any) => ({ ...prev, keyword: e.target.value }))
            }
          />
        </div>
        <div className="col-span-3 text-center">
          <button
            className="text-white bg-[#FF634E] hover:bg-[#df4d4d] focus:ring-4 focus:ring-blue-300 text-sm border border-slate-200 rounded-lg py-2 px-10 mx-2"
            onClick={onClickReset}
          >
            {t("component.career.clear")}
          </button>
          <button
            className="text-white bg-[#00AEEF] hover:bg-[#3d8eac] focus:ring-4 focus:ring-blue-300 text-sm border border-slate-200 rounded-lg py-2 px-10 mx-2"
            onClick={onClickFilter}
          >
            {t("component.career.search")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
