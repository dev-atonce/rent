import { useContext, useEffect, useState } from "react";
import FormGroup from "../FormGroup/FormGroup";
import ImageComponent from "@/components/common/ImageComponent/ImageComponent";
import SelectGroupOne from "../SelectGroup/SelectGroupOne";
import { FetchContext } from "@/contexts/FetchContext";

export default function ProductForm({
  data,
  onSave,
  languages,
  onChangeState,
  id,
  onSaveSeo,
  onChangeSeoState,
  mainCat,
}: any) {
  const { onFetchOne }: any = useContext(FetchContext);
  const [mainCatData, setMainCatData] = useState([]);
  const [subCatData, setSubCatData] = useState([]);
  const [filteredSubCat, setFilteredSubCat] = useState([]);
  const [showEditCat, setShowEditCat] = useState(false);

  const onFetchMainCat = async () => {
    const data = await onFetchOne("mainCategory", null);
    const subCat = await onFetchOne("subCategory", null);
    setMainCatData(data?.rows);
    setSubCatData(subCat?.rows);
  };

  const onSelectMainCat = () => {
    const filtered = subCatData?.filter(
      (i: any) => i?.mainCategory?.id == data?.mainCategory
    );
    setFilteredSubCat(filtered);
  };

  useEffect(() => {
    onFetchMainCat();
  }, []);

  useEffect(() => {
    onSelectMainCat();
  }, [data?.mainCategory]);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="flex flex-col gap-4 ">
        {!mainCat && (
          <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-full py-2 px-6">
            {data?.curSubCat ? (
              <>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <span>
                      Main Category:
                      <span className="font-semibold">{data?.curMainCat}</span>
                    </span>
                    <span>
                      Sub-Category:
                      <span className="font-semibold">{data?.curSubCat}</span>
                    </span>
                  </div>
                  <button
                    className="border-yellow-500 px-2 rounded-md text-yellow-500 border"
                    onClick={() => setShowEditCat(!showEditCat)}
                  >
                    Change
                  </button>
                </div>
                {showEditCat && (
                  <>
                    <SelectGroupOne
                      // @ts-ignore
                      topLabel={false}
                      // @ts-ignore
                      label={"Main Category"}
                      // @ts-ignore
                      list={mainCatData}
                      selectedOption={data}
                      setSelectedOption={onChangeState}
                      keyProp="mainCategory"
                      field="nameTH"
                      saveId={true}
                    />
                    <SelectGroupOne
                      // @ts-ignore
                      topLabel={false}
                      // @ts-ignore
                      label={"Sub-Category"}
                      // @ts-ignore
                      list={filteredSubCat}
                      selectedOption={data}
                      setSelectedOption={onChangeState}
                      keyProp="subCategory"
                      field="nameTH"
                      saveId={true}
                    />
                  </>
                )}
              </>
            ) : (
              <>
                <SelectGroupOne
                  // @ts-ignore
                  topLabel={true}
                  // @ts-ignore
                  label={"Main Category"}
                  // @ts-ignore
                  list={mainCatData}
                  selectedOption={data}
                  setSelectedOption={onChangeState}
                  keyProp="mainCategory"
                  field="nameTH"
                  saveId={true}
                />
                <SelectGroupOne
                  // @ts-ignore
                  topLabel={true}
                  // @ts-ignore
                  label={"Sub-Category"}
                  // @ts-ignore
                  list={mainCatData}
                  selectedOption={data}
                  setSelectedOption={onChangeState}
                  keyProp="mainCategory"
                  field="nameTH"
                  saveId={true}
                />
              </>
            )}
          </div>
        )}
        <FormGroup
          //   onSave={onSave}
          formLabel={"Product"}
          inputBox={[
            {
              label: "Product Name",
              placeHolder: "Product Name",
              state: data,
              setState: onChangeState,
              keyProp: "productName",
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
        {/* to do seo */}
        <FormGroup
          // modalState={show}
          id={id}
          //   onSave={onSaveSeo}
          formLabel={"SEO Settings"}
          inputBox={[
            {
              label: "Title",
              placeHolder: "Page Title",
              state: data,
              setState: onChangeSeoState,
              keyProp: "title",
              type: "input",
              languages,
            },
            {
              label: "Keywords",
              placeHolder: "META Keywords",
              state: data,
              setState: onChangeSeoState,
              keyProp: "keyword",
              type: "input",
              languages,
            },
            {
              label: "Description",
              placeHolder: "META Description",
              state: data,
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
