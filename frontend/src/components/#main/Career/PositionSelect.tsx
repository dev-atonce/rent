"use client";
import { useTranslation } from "react-i18next";

interface PositionSelectProps {
  value: string;
  setFilter: any;
  lng: string;
  list: [];
}

const PositionSelect = ({
  value,
  setFilter,
  lng,
  list,
}: PositionSelectProps) => {
  const { t } = useTranslation(lng);
  return (
    <select
      value={value}
      onChange={(e: any) =>
        setFilter((prev: any) => ({ ...prev, position: e.target.value }))
      }
      id="position"
      className="bg-gray-50 border w-full border-slate-200 text-sm rounded-lg px-3 py-1.5"
    >
      <option value="" disabled>
        {t("component.career.select-position")}
      </option>
      {list?.map((i: any, k: any) => (
        <option key={k} value={i?.id}>
          {i[`name${lng?.toUpperCase()}`]}
        </option>
      ))}
    </select>
  );
};

export default PositionSelect;
