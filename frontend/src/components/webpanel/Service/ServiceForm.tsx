import { useState } from "react";
import Jodit from "../Editor/Jodit";
import FormGroup from "../FormGroup/FormGroup";
import Image from "next/image";
import { MdDeleteForever } from "react-icons/md";
import TextEditor from "@/components/TextEditor";

export default function ServiceForm({
  languages,
  onSaveGeneral,
  serviceState,
  onChangeState,
  id,
  onSaveSeo,
  onChangeSeoState,
  onDeleteImageGallery,
}: any) {
  const [langState, setLangState] = useState(
    process.env.NEXT_PUBLIC_MAIN_LANGUAGE
  );
  console.log(serviceState);

  const maxImgUpload = 12;
  const currentImgAmount = serviceState?._gallery
    ? serviceState?._gallery?.length
    : 0;
  const uploadAmount = maxImgUpload - currentImgAmount;

  return (
    <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
      <div className="flex flex-col gap-9">
        <FormGroup
          // onSave={onSaveGeneral}
          formLabel="General Info."
          inputBox={[
            {
              label: "Project Name",
              placeHolder: "Project Name",
              state: serviceState,
              setState: onChangeState,
              keyProp: "projectName",
              type: "input",
              languages: languages,
              required: true,
            },

            {
              label: "Description",
              placeHolder: "Project Description",
              state: serviceState,
              setState: onChangeState,
              keyProp: "description",
              type: "textArea",
              rows: 3,
              languages: languages,
              required: true,
            },
            {
              label: "Image",
              placeHolder: "image",
              state: serviceState,
              setState: onChangeState,
              keyProp: "image",
              type: "image",
              ratio: "3/2",
              required: true,
              height: "200px",
              multiple: false,
            },
            {
              label: "Image ALT",
              placeHolder: "alt",
              state: serviceState,
              setState: onChangeState,
              keyProp: "imageAlt",
              type: "input",
              required: true,
            },
          ]}
        />
      </div>

      <div className="flex flex-col gap-9 bg-white rounded-xl px-4">
        <div className="w-full  sm:col-span-2 py-2 flex flex-col gap-y-2">
          <span>Gallery (Max. 12 images)</span>
          <div className=" grid grid-cols-12 gap-2 rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-full py-2 px-6">
            {!serviceState?._gallery?.length && (
              <div className="col-span-12 text-center text-2xl py-4 ">
                No Image
              </div>
            )}
            {serviceState?._gallery?.map((item: any, index: any) => {
              if (index < 12) {
                return (
                  <div
                    key={index}
                    className="col-span-4 rounded-lg overflow-hidden relative"
                  >
                    <div
                      onClick={() => onDeleteImageGallery(index)}
                      className="absolute top-2 right-2 p-2 bg-red rounded-full hover:cursor-pointer text-white"
                    >
                      <MdDeleteForever size={20} />
                    </div>
                    <Image
                      src={"/img/about_1.png"}
                      alt="gallery"
                      width="400"
                      height="400"
                      className="h-full w-full object-cover aspect-[3/2]"
                    />
                  </div>
                );
              }
            })}
          </div>
          <FormGroup
            //   onSave={onSave}
            formLabel={`Upload Images - ${uploadAmount} left`}
            inputBox={[
              {
                label: "Gallery Images",
                placeHolder: "image",
                state: serviceState,
                setState: onChangeState,
                keyProp: "gallery",
                type: "image",
                ratio: "3/2",
                required: true,
                height: "200px",
                multiple: true,
                uploadAmount: uploadAmount,
              },
            ]}
          />
        </div>
      </div>
      <div className="col-span-2">
        <TextEditor />
      </div>
      <div className="col-span-2 ">
        <div className="flex gap-[1px] translate-y-2 translate-x-2 relative z-0">
          {languages.map((i: any, k: any) => (
            <button
              key={k}
              onClick={() => setLangState(i?.toLowerCase())}
              className={`${langState === i?.toLowerCase() ? "border-primary text-primary  scale-[110%] " : "border-slate-200 text-slate-200"} uppercase transition-all duration-100 items-center justify-center rounded-md border  px-2 py-1 text-center font-medium hover:bg-opacity-90 `}
            >
              {i}
            </button>
          ))}
        </div>
        
        {languages?.map(
          (i: any, k: any) =>
            i?.toLowerCase() === langState && (
              <Jodit
                key={k}
                onChange={onChangeState}
                state={serviceState}
                prop={serviceState && `projectDetail${i}`}
              />
            )
        )}
      </div>
      <button
        onClick={onSaveGeneral}
        className="mt-[-20px] flex w-full col-span-2 justify-center rounded-lg bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
      >
        Save
      </button>
    </div>
  );
}
