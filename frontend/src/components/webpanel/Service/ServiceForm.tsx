import { useState } from "react";
import Jodit from "../Editor/Jodit";
import FormGroup from "../FormGroup/FormGroup";

export default function ServiceForm({
  languages,
  onSaveGeneral,
  serviceState,
  onChangeState,
  id,
  onSaveSeo,
  onChangeSeoState,
}: any) {
  const [langState, setLangState] = useState(
    process.env.NEXT_PUBLIC_MAIN_LANGUAGE
  );

  return (
    <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
      <div className="flex flex-col gap-9">
        <FormGroup
          onSave={onSaveGeneral}
          formLabel="General Info."
          inputBox={[
            {
              label: "Service Name",
              placeHolder: "Service Name",
              state: serviceState,
              setState: onChangeState,
              keyProp: "serviceName",
              type: "input",
              languages: languages,
              required: true,
            },

            {
              label: "Service URL",
              placeHolder: "Service URL",
              state: serviceState,
              setState: onChangeState,
              keyProp: "serviceUrl",
              type: "input",
              required: true,
            },
            {
              label: "Description",
              placeHolder: "Service Description",
              state: serviceState,
              setState: onChangeState,
              keyProp: "serviceDescription",
              type: "textArea",
              rows: 3,
              languages: languages,
              required: true,
            },
          ]}
        />
      </div>

      <div className="flex flex-col gap-9">
        <FormGroup
          // modalState={show}

          onSave={onSaveSeo}
          formLabel={"SEO Settings"}
          inputBox={[
            {
              label: "Title",
              placeHolder: "Page Title",
              state: serviceState?.serviceSeo,
              setState: onChangeSeoState,
              keyProp: "title",
              type: "input",
              languages,
            },
            {
              label: "Keywords",
              placeHolder: "META Keywords",
              state: serviceState?.serviceSeo,
              setState: onChangeSeoState,
              keyProp: "keyword",
              type: "input",
              languages,
            },
            {
              label: "Description",
              placeHolder: "META Description",
              state: serviceState?.serviceSeo,
              setState: onChangeSeoState,
              keyProp: "description",
              type: "textArea",
              rows: 3,
              languages,
            },
          ]}
        />
      </div>
      <div className="col-span-2 min-h-[40vh]">
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
                prop={serviceState && `serviceDetail${i}`}
              />
            )
        )}
      </div>
    </div>
  );
}
