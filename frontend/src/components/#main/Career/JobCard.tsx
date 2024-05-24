"use client";
import { useTranslation } from "react-i18next";

interface JobCardProps {
  data: any[];
  lng: string;
}

const JobCard = ({ data, lng }: JobCardProps) => {
  const { t } = useTranslation(lng);
  return (
    <div className="grid grid-cols-3 mt-5 gap-5">
      {data?.map((item: any, key: any) => (
        <div key={key} className="col-span-3 md:col-span-1">
          <a
            href={item?.url}
            className="block max-w-sm p-4 bg-[#F4F4F4] rounded-lg shadow hover:bg-slate-200"
          >
            <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 line-clamp-1">
              {item?.title}
            </h5>
            <p className="font-normal text-xs text-gray-700 line-clamp-1">
              {`${t("component.career.location")}: ${item?.location ? item?.location : "-"}`}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
