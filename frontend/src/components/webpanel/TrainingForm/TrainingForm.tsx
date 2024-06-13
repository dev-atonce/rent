import { useContext, useEffect, useState } from "react";
import FormGroup from "../FormGroup/FormGroup";
import ImageComponent from "@/components/common/ImageComponent/ImageComponent";
import SelectGroupOne from "../SelectGroup/SelectGroupOne";
import { FetchContext } from "@/contexts/FetchContext";
import Jodit from "../Editor/Jodit";
import Image from "next/image";
import { MdDeleteForever } from "react-icons/md";
import Link from "next/link";
import TableThree from "../Tables/TableThree";

export default function TrainingForm({
  data,
  onSave,
  languages,
  onChangeState,
  id,
  onSaveSeo,
  onChangeSeoState,
  mainCat,
  onDeleteImageGallery,
  tableData,
}: any) {
  const { onFetchOne, onDeleteGallery }: any = useContext(FetchContext);
  const [mainCatData, setMainCatData] = useState([]);
  const [subCatData, setSubCatData] = useState([]);
  const [filteredSubCat, setFilteredSubCat] = useState([]);
  const [showEditCat, setShowEditCat] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-4 ">
          <FormGroup
            //   onSave={onSave}
            formLabel={"Training Course"}
            inputBox={[
              {
                label: "Course Title",
                placeHolder: "Course Title",
                state: data,
                setState: onChangeState,
                keyProp: "title",
                type: "input",
                languages: languages,
                required: true,
              },
              {
                label: "Price",
                placeHolder: "Course Title",
                state: data,
                setState: onChangeState,
                keyProp: "price",
                type: "input",

                required: false,
              },
              {
                label: "Duration",
                placeHolder: "Course Title",
                state: data,
                setState: onChangeState,
                keyProp: "duration",
                type: "input",
              },
              {
                label: "Place",
                placeHolder: "Course Title",
                state: data,
                setState: onChangeState,
                keyProp: "place",
                type: "input",
              },
              {
                label: "Time",
                placeHolder: "Course Title",
                state: data,
                setState: onChangeState,
                keyProp: "time",
                type: "input",
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

        <div className="flex flex-col gap-9 bg-white h-full rounded-xl p-4 overflow-y-scroll">
          {" "}
          <div className="flex flex-col gap-9">
            <div>
              <div className="flex justify-between py-4">
                <h4 className=" text-xl">Main Category</h4>
                <div className="flex items-center justify-end gap-1">
                  <Link
                    href="product/maincat/create"
                    className={`bg-white text-primary border-primary border-2 px-6 py-1 rounded-lg font-bold transition-all duration-700`}
                  >
                    CREATE MAIN-CATEGORY
                  </Link>
                </div>
              </div>
              <div className="">
                <TableThree
                  //   onDelete={onDeleteMainCat}
                  //   drag={mainCatDragState}
                  type="calendar"
                  data={tableData}
                  //   setData={setMainCatData}
                  col={[
                    { title: "Title", minWidth: "" },
                    { title: "Schedule", minWidth: "" },
                    { title: "Action", minWidth: "" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full  sm:col-span-2 py-2 flex flex-col gap-y-2">
          <span>Gallery</span>
          <div className=" flex flex-wrap gap-2 rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-full py-2 px-6">
            {data?._gallery?.map((item: any, index: any) => (
              <div
                key={index}
                className="h-[200px] rounded-lg overflow-hidden relative"
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
            ))}
          </div>
          <FormGroup
            //   onSave={onSave}
            formLabel={"Upload Images"}
            inputBox={[
              {
                label: "Gallery Images",
                placeHolder: "image",
                state: data,
                setState: onChangeState,
                keyProp: "gallery",
                type: "image",
                ratio: "3/2",
                required: true,
                height: "200px",
                multiple: true,
              },
            ]}
          />
        </div>
        <div className="w-full  sm:col-span-2 py-2 flex flex-col">
          <span>Spec Sheet</span>
          <Jodit prop="productDetailTH" state={data} onChange={onChangeState} />
        </div> */}
        <div className="sm:col-span-2 py-2">
          <button
            onClick={onSave}
            className="flex w-full justify-center rounded-lg bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}
