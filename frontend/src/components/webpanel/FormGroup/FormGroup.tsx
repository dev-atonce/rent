import Input from "@/components/webpanel/Input/Input";

import TextArea from "../Input/TextArea";
import { SketchPicker } from "react-color";
import SelectGroupTwo from "../SelectGroup/SelectGroupTwo";
import MultiSelect from "@/components/FormElements/MultiSelect";
import SelectGroupOne from "../SelectGroup/SelectGroupOne";

export default function FormGroup({
  formLabel,
  inputBox,
  textArea,
  onSave,
  flex,
  id,
  modalState,
}: any) {
  return (
    <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white uppercase">
          {formLabel}
        </h3>
      </div>

      <div className="p-6.5  w-full">
        {inputBox?.map((i: any, index: any) =>
          i?.type === "input" ? (
            <Input
              modalState={modalState}
              label={i?.label}
              placeHolder={i?.placeHolder}
              state={i?.state}
              setState={i?.setState}
              key={index}
              keyProp={i?.keyProp}
              colorPicker={i?.colorPicker}
              width={i?.width}
              languages={i?.languages}
              required={i?.required}
            />
          ) : i?.type === "textArea" ? (
            <TextArea
              modalState={modalState}
              key={index}
              rows={i?.rows}
              label={i?.label}
              placeHolder={i?.placeHolder}
              setState={i?.setState}
              state={i?.state}
              keyProp={i?.keyProp}
              languages={i?.languages}
              required={i?.required}
            />
          ) : i?.type === "image" ? (
            <div className="mb-2" key={index}>
              <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                {i?.label}
              </label>
              <div className="bg-slate-100 w-[40%] h-20 mb-2"></div>
              <input
                type="file"
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
              />
            </div>
          ) : i?.type === "dropDown" ? (
            <SelectGroupOne
              //   @ts-ignore
              label={i?.label}
              setState={i?.setState}
              state={i?.state}
              keyProp={i?.keyProp}
            />
          ) : (
            ""
          )
        )}

        <div className="mb-5.5 mt-5 flex items-center justify-between"></div>

        <button
          onClick={onSave}
          className="flex w-full justify-center rounded-lg bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
        >
          Save
        </button>
      </div>
    </div>
  );
}
