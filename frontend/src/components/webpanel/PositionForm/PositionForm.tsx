import FormGroup from "../FormGroup/FormGroup";
import TextEditor from "@/components/TextEditor";
import { useState } from "react";

export default function PositionForm({
  data,
  onSave,
  languages,
  onChangeState,
  id,
  editor,
}: any) {
  const [langState, setLangState] = useState(
    process.env.NEXT_PUBLIC_MAIN_LANGUAGE
  );
  return (
    <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
      <div className="flex flex-col gap-9">
        <FormGroup
          // onSave={onSave}
          formLabel="Edit Job Title"
          inputBox={[
            {
              label: "Job Title",
              placeHolder: "Job Title",
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
          ]}
        />
      </div>

      {editor?.editor == true && (
        <div className="col-span-2">
          <div className="rounded-lg bg-white p-2">
            <label className="p-3">Detail</label>
            {languages?.map(
              (i: any, k: any) =>
                i?.toLowerCase() === langState && (
                  <TextEditor
                    key={k}
                    id={`${editor.name}${i}`}
                    dataType="position"
                    dataId={id}
                    setState={onChangeState}
                    state={data}
                    prop={data && `${editor.name}${i}`}
                    placeholder="Detail"
                    editor={editor}
                  />
                )
            )}
          </div>
        </div>
      )}

      <button
        onClick={onSave}
        className="mt-[-20px] flex w-full col-span-2 justify-center rounded-lg bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
      >
        Save
      </button>
    </div>
  );
}
