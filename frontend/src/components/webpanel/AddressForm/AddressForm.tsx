import FormGroup from "../FormGroup/FormGroup";

export default function AddressForm({
  data,
  onSave,
  languages,
  onChangeState,
  id,
}: any) {
  return (
    <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
      <div className="flex flex-col gap-9">
        <FormGroup
          onSave={onSave}
          formLabel="Address Info."
          inputBox={[
            {
              label: "Image",
              placeHolder: "Image",
              state: data,
              setState: onChangeState,
              keyProp: "image",
              type: "image",
              required: true,
            },
            {
              label: "Branch Name",
              placeHolder: "Branch Name",
              state: data,
              setState: onChangeState,
              keyProp: "name",
              type: "input",
              languages: languages,
              required: true,
            },
            {
              label: "Fax",
              placeHolder: "Fax",
              state: data,
              setState: onChangeState,
              keyProp: "fax",
              type: "input",
              required: true,
            },
            {
              label: "Telephone",
              placeHolder: "Telephone",
              state: data,
              setState: onChangeState,
              keyProp: "tel",
              type: "input",
              required: true,
              //   languages: languages,
            },
            {
              label: "Google Map",
              placeHolder: "Google Map URL",
              state: data,
              setState: onChangeState,
              keyProp: "googleMap",
              type: "input",
              required: true,
            },
            {
              label: "Address",
              placeHolder: "Address",
              state: data,
              setState: onChangeState,
              keyProp: "address",
              type: "textArea",
              rows: 3,
              languages: languages,
              required: true,
            },
          ]}
        />
      </div>
    </div>
  );
}
