"use client";
import { useContext, useState, useEffect } from "react";
import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { FetchContext } from "@/contexts/FetchContext";
import TextEditor from "@/components/TextEditor";

export default function RentProductEdit() {
  const { onFetchOne, onSave }: any = useContext(FetchContext);
  const [data, setData] = useState([]);
  async function fetchData() {
    const data = await onFetchOne("about-us", "product-rent");
    setData(data);
  }
  const onChangeState = (e: any, field: string) => {
    setData((prevState: any) => ({ ...prevState, [field]: e }));
  };
  const onEdit = async () => {
    console.log(data);
    // @ts-ignore
    onSave(
      data,
      "PUT",
      //   @ts-ignore
      data.id,
      "product-rent",
      //   @ts-ignore
      `Edit Product ${data?.aboutUsTH}`
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName="Product Rent"
        prevPage={[
          { pageName: "Dashboard", url: "/webpanel" },
          { pageName: "Products", url: "/webpanel/product" },
        ]}
      />
      <div className="grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          <TextEditor
            id={`aboutUsTH`}
            dataType="about-us"
            dataId={`aboutUsTH`}
            setState={onChangeState}
            state={data}
            prop={data && `aboutUsTH`}
            placeholder="aboutUsTH"
            editor={{
              editor: true,
              name: "aboutUsTH",
              images: {
                getPath: `about-us/product-rent`,
                uploadPath: `about-us/product-rent`,
              },
            }}
          />
          <div className="sm:col-span-2 py-2">
            <button
              onClick={onEdit}
              className="flex w-full justify-center rounded-lg bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
