import { useState } from "react";
import FormGroup from "../FormGroup/FormGroup";
import ImageComponent from "@/components/common/ImageComponent/ImageComponent";

export default function MainCatForm({
  data,
  onSave,
  languages,
  onChangeState,
  id,
  onSaveSeo,
  onChangeSeoState,
}: any) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="flex flex-col gap-9 ">
        <FormGroup
          //   onSave={onSave}
          formLabel="Main Category"
          inputBox={[
            {
              label: "Main Category Name",
              placeHolder: "Main Category Name",
              state: data,
              setState: onChangeState,
              keyProp: "name",
              type: "input",
              languages: languages,
              required: true,
            },

            {
              label: "Image",
              placeHolder: "image",
              state: data,
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
              state: data,
              setState: onChangeState,
              keyProp: "imageAlt",
              type: "input",
              required: true,
            },
          ]}
        />
      </div>

      <div className="flex flex-col gap-9">
        <FormGroup
          // modalState={show}
          id={id}
          //   onSave={onSaveSeo}
          formLabel={"SEO Settings"}
          inputBox={[
            {
              label: "Title",
              placeHolder: "Page Title",
              state: data?.seo,
              setState: onChangeSeoState,
              keyProp: "title",
              type: "input",
              languages,
            },
            {
              label: "Keywords",
              placeHolder: "META Keywords",
              state: data?.seo,
              setState: onChangeSeoState,
              keyProp: "keyword",
              type: "input",
              languages,
            },
            {
              label: "Description",
              placeHolder: "META Description",
              state: data?.seo,
              setState: onChangeSeoState,
              keyProp: "description",
              type: "textArea",
              rows: 3,
              languages,
            },
          ]}
        />
      </div>
      <div className="sm:col-span-2 py-2">
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
