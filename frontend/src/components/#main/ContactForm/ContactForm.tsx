"use client";
import Input from "@/components/webpanel/Input/Input";
import TextArea from "@/components/webpanel/Input/TextArea";
import { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import ContactDropDown from "./ContactDropDown";
import { useTranslation } from "react-i18next";
import { FetchContext } from "@/contexts/FetchContext";

export default function Contactform({ lng }: any) {
  const { onFetchOne }: any = useContext(FetchContext);
  const [subject, setSubject] = useState([]);
  const { t } = useTranslation(lng);
  const [formState, setFormState] = useState({ title: "", value: "" });

  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  const fetchData = async () => {
    const data = await onFetchOne("subject", null);
    setSubject(data?.rows);
  };
  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const emailTo = subject?.find(
      // @ts-ignore
      (i: any) => i[`name${lng?.toUpperCase()}`] === data?.topic
      // @ts-ignore
    )?.email;
    const contactData = { ...data, emailTo: emailTo };

    console.log(contactData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-2xl">
        {t("component.contact-us.contact-form")}
      </h3>
      <form
        className="grid grid-cols-2 gap-2  "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-span-2">
          <div className="">
            <div className="relative z-20 bg-transparent dark:bg-form-input">
              <select
                {...register("topic", { required: true })}
                value={formState?.title}
                // value={formState?.title}
                onChange={(e) => {
                  setFormState((prev: any) => ({
                    ...prev,
                    title: e.target.value,
                  }));
                  changeTextColor();
                }}
                className={`relative hover:cursor-pointer z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary  ${
                  isOptionSelected ? "text-black " : ""
                }`}
              >
                <option value="" disabled className="text-body ">
                  {t("component.contact-us.topic")}
                </option>
                {subject?.map((i: any, k: any) => (
                  <option
                    key={k}
                    id={i[`name${lng?.toUpperCase()}`]}
                    value={i[`name${lng?.toUpperCase()}`]}
                    // id={i?.title}
                    // value={i?.title}
                    className="text-body  hover:cursor-pointer"
                  >
                    {i[`name${lng?.toUpperCase()}`]}
                  </option>
                ))}
              </select>
              {errors?.topic?.type === "required" && (
                <p className="text-xs text-red text-end">
                  This field is required.
                </p>
              )}
              <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                      fill=""
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <input
            {...register("contactPerson", { required: true, maxLength: 100 })}
            type="text"
            placeholder={t("component.contact-us.contact-person")}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.contactPerson?.type === "required" && (
            <p className="text-xs text-red text-end">This field is required.</p>
          )}
        </div>
        <div className="col-span-2 md:col-span-1">
          <input
            {...register("companyName", { required: true, maxLength: 100 })}
            type="text"
            placeholder={t("component.contact-us.company-name")}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.companyName?.type === "required" && (
            <p className="text-xs text-red text-end">This field is required.</p>
          )}
        </div>
        <div className="col-span-2 md:col-span-1">
          <input
            {...register("contactEmail", { required: true, maxLength: 100 })}
            type="email"
            placeholder={"E-Mail"}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />

          {errors?.contactEmail?.type === "required" && (
            <p className="text-xs text-red text-end">This field is required.</p>
          )}
        </div>
        <div className="col-span-2 md:col-span-1">
          <input
            {...register("phone", { pattern: /[\d+]/g, required: true })}
            type="text"
            placeholder={t("component.contact-us.telephone")}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.phone?.type === "pattern" && (
            <p className="text-xs text-red text-end">Phone Numbers Only</p>
          )}
          {errors?.phone?.type === "required" && (
            <p className="text-xs text-red text-end">This field is required.</p>
          )}
        </div>

        <div className="col-span-2">
          <textarea
            {...register("detail", { required: true })}
            rows={3}
            placeholder={t("component.contact-us.details")}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.detail?.type === "required" && (
            <p className="text-xs text-red text-end">This field is required.</p>
          )}
        </div>
        <div className="flex justify-end col-span-2 ">
          <button
            type="submit"
            className="uppercase px-4 font-bold py-2 bg-blue-950 rounded-lg text-white "
          >
            {t("component.contact-us.send")}
          </button>
        </div>
      </form>
    </div>
  );
}
