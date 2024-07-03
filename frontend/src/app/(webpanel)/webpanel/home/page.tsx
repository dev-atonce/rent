"use client";

import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import FormGroup from "@/components/webpanel/FormGroup/FormGroup";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Next.js Form Layout | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Form Layout page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };

export default function EditHomePage() {
  interface HomePageState {
    header: string;
    subHeader: string;
    description: string;
    footerDescription: string;
    primaryColor: object;
    secondaryColor: object;
    primaryTextColor: object;
    secondaryTextColor: object;
  }

  const initialHomePageState = {
    header: "",
    subHeader: "",
    description: "",
  };
  const [homePageState, setHomePageState] =
    //   @ts-ignore
    useState<HomePageState>(initialHomePageState);
  const [testColor, setTestColor] = useState("#fff");

  const onSave = () => {
    console.log(homePageState);

    // saving Home page State
  };

  // Tracking Form Change
  const onChangeState = (e: any, field: string) => {
    setHomePageState((prevState) => ({ ...prevState, [field]: e }));
  };
  const envLangs = process.env.NEXT_PUBLIC_LANGUAGES;
  //   @ts-ignore
  const languages = envLangs.split(",").map((i: any) => i.toUpperCase());

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName="Home Page"
        prevPage={{ pageName: "Dashboard", url: "/webpanel" }}
      />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <FormGroup
            onSave={onSave}
            formLabel="Home Page Content"
            inputBox={[
              {
                label: "Header",
                placeHolder: "Page Header",
                state: homePageState,
                setState: onChangeState,
                keyProp: "header",
                type: "input",
                languages: languages,
              },

              {
                label: "Sub-Header",
                placeHolder: "Page Sub-Header",
                state: homePageState,
                setState: onChangeState,
                keyProp: "subHeader",
                type: "input",
                languages: languages,
              },
              {
                label: "Description",
                placeHolder: "Your Page Description",
                state: homePageState,
                setState: onChangeState,
                keyProp: "description",
                type: "textArea",
                rows: 6,
                languages: languages,
              },
              {
                label: "Footer Description",
                placeHolder: "Your Footer Description",
                state: homePageState,
                setState: onChangeState,
                keyProp: "footerDescription",
                type: "textArea",
                rows: 6,
                languages: languages,
              },
            ]}
          />
        </div>

        <div className="flex flex-col gap-9">
          <FormGroup
            flex="row"
            onSave={onSave}
            formLabel="Colors"
            inputBox={[
              {
                label: "Primary Color:",
                placeHolder: "eg. #Color",
                state: homePageState?.primaryColor,
                setState: onChangeState,
                keyProp: "primaryColor",
                colorPicker: true,
                type: "input",
              },
              {
                label: "Secondary Color:",
                placeHolder: "eg. #Color",
                state: homePageState?.secondaryColor,
                setState: onChangeState,
                keyProp: "secondaryColor",
                colorPicker: true,
                type: "input",
              },
              {
                label: "Primary Text Color:",
                placeHolder: "eg. #Color",
                state: homePageState?.primaryTextColor,
                setState: onChangeState,
                keyProp: "primaryTextColor",
                colorPicker: true,
                type: "input",
              },
              {
                label: "Secondary Text Color:",
                placeHolder: "eg. #Color",
                state: homePageState?.secondaryTextColor,
                setState: onChangeState,
                keyProp: "secondaryTextColor",
                colorPicker: true,
                type: "input",
              },
            ]}
          />
          {/* Color Form */}
          <FormGroup
            onSave={onSave}
            formLabel="Logos"
            inputBox={[
              {
                label: "Header Logo",
                placeHolder: "Page Header",
                state: homePageState?.header,
                setState: onChangeState,
                keyProp: "header",
                type: "image",
              },
              {
                label: "Footer Logo",
                placeHolder: "Page Sub-Header",
                state: homePageState?.subHeader,
                setState: onChangeState,
                keyProp: "subHeader",
                type: "image",
              },
            ]}
          />
          {/* <!-- Sign Up Form --> */}
        </div>
      </div>
    </DefaultLayout>
  );
}
