"use client";
import Input from "@/components/webpanel/Input/Input";
import TextArea from "@/components/webpanel/Input/TextArea";
import { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";

import { useTranslation } from "react-i18next";
import { FetchContext } from "@/contexts/FetchContext";

export default function Contactform({ branch }: any) {
  const [formState, setFormState] = useState({ title: "", value: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const contactData = { ...data, branch: branch };

    console.log(contactData);
  };

  return (
    <div className="flex flex-col gap-4">
      <form
        className="grid grid-cols-2 gap-2  "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-span-2">
          <div className=""></div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <input
            {...register("companyName", { required: true, maxLength: 100 })}
            type="text"
            placeholder={"ชื่อบริษัท"}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.companyName?.type === "required" && (
            <p className="text-xs text-red text-end">This field is required.</p>
          )}
        </div>
        <div className="col-span-2 md:col-span-1">
          <input
            {...register("contactPerson", { required: true, maxLength: 100 })}
            type="text"
            placeholder={"ชื่อ - สกุล"}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.contactPerson?.type === "required" && (
            <p className="text-xs text-red text-end">This field is required.</p>
          )}
        </div>
        <div className="col-span-2 md:col-span-1">
          <input
            {...register("contactEmail", { required: true, maxLength: 100 })}
            type="email"
            placeholder={"อีเมลล์"}
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
            placeholder={"เบอร์โทรศัพท์"}
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
          <input
            {...register("place", { required: true, maxLength: 100 })}
            type="text"
            placeholder={"สถานที่ใช้งาน"}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.place?.type === "required" && (
            <p className="text-xs text-red text-end">This field is required.</p>
          )}
        </div>

        <div className="col-span-2">
          <textarea
            {...register("detail", { required: true })}
            rows={3}
            placeholder={"รายละเอียด"}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.detail?.type === "required" && (
            <p className="text-xs text-red text-end">This field is required.</p>
          )}
        </div>
        <div className="flex justify-start gap-4 col-span-2 ">
          <button
            type="submit"
            className="uppercase px-12 font-bold py-2 bg-[#0DA1DB] rounded-full  text-white "
          >
            ส่ง
          </button>
          <button
            type="submit"
            className="uppercase px-12 font-bold py-2 bg-[#0DA1DB] rounded-full  text-white "
          >
            รีเซ็ต
          </button>
        </div>
      </form>
    </div>
  );
}
