"use client";
import province from "@/asset/province.json";
import { useTranslation } from "react-i18next";

interface ProvinceSelectProps {
  value: string;
  setFilter: any;
  lng: string;
}

const ProvinceSelect = ({ value, setFilter, lng }: ProvinceSelectProps) => {
  const { t } = useTranslation(lng);
  return (
    <select
      value={value}
      onChange={(e: any) =>
        setFilter((prev: any) => ({ ...prev, province: e.target.value }))
      }
      id="province"
      className="bg-gray-50 border w-full border-slate-200 text-sm rounded-lg px-3 py-1.5"
    >
      <option value="" disabled>
        {t("component.career.select-province")}
      </option>
      {province.map((item: any, key: number) => (
        <option key={key} value={item.id}>
          {item[`name_${lng}`]}
        </option>
      ))}
    </select>
  );
};

export default ProvinceSelect;
