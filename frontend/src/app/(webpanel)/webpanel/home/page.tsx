"use client";
import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import FormGroup from "@/components/webpanel/FormGroup/FormGroup";
import { useState, useContext, useEffect, useCallback } from "react";
import { FetchContext } from "@/contexts/FetchContext";

export default function EditHomePage() {
  const { onFetchOne, onSave }: any = useContext(FetchContext);
  const [logoState, setLogoState] = useState({ header: "", footer: "" });
  const [homeState, setHomeState] = useState({} as any);

  const onCreate = async (type: string, data: any, route: string) => {
    await onSave(
      data, // state
      "PUT", // method
      type, //header, footer, id
      route, // type route
      `Update ${route} Success`
    );
  };

  const onFetch = async () => {
    const data = await onFetchOne("logo", "all");

    // @ts-ignore
    setLogoState({
      header: data?.find((i: any) => i?.type == "header"),
      footer: data?.find((i: any) => i?.type == "footer"),
    });
  };

  const fetchData = useCallback(async () => {
    const data = await onFetchOne("about-us", "home");
    setHomeState({ ...data });
  }, []);

  // Tracking Form Change
  const onChangeState = (e: any, field: string) => {
    setLogoState((prevState) => ({ ...prevState, [field]: e }));
  };

  const onChangeHomeState = (e: any, field: string) => {
    setHomeState((prevState: any) => ({ ...prevState, [field]: e }));
  };

  useEffect(() => {
    fetchData();
    onFetch();
  }, [fetchData]);

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName="Home Page"
        prevPage={{ pageName: "Dashboard", url: "/webpanel" }}
      />
      <div className="grid grid-cols-1 gap-5">
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-1">
              <FormGroup
                onSave={() => onCreate("header", logoState, "logo")}
                formLabel="Logo header"
                inputBox={[
                  {
                    label: "Header Logo",
                    state: logoState?.header,
                    setState: onChangeState,
                    keyProp: "image",
                    type: "image",
                  },
                ]}
              />
            </div>
            <div className="col-span-1">
              <FormGroup
                onSave={() => onCreate("footer", logoState, "logo")}
                formLabel="Logo footer"
                inputBox={[
                  {
                    label: "Footer Logo",
                    state: logoState?.footer,
                    setState: onChangeState,
                    keyProp: "image",
                    type: "image",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-5">
        <div className="col-span-1">
          <FormGroup
            onSave={() => onCreate("home", homeState, "home")}
            formLabel="Home Detail"
            inputBox={[
              {
                state: homeState,
                setState: onChangeHomeState,
                keyProp: "aboutUsTH",
                type: "textArea",
                rows: 10
              },
            ]}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}
