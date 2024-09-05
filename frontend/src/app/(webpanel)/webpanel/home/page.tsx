"use client";
import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import FormGroup from "@/components/webpanel/FormGroup/FormGroup";
import { useState, useContext, useEffect, useCallback } from "react";
import { FetchContext } from "@/contexts/FetchContext";
import TableThree from "@/components/webpanel/Tables/TableThree";
import type { CollapseProps } from "antd";
import AntCollapse from "@/components/webpanel/AntCollapse/AntCollapse";
import { FaCheckCircle } from "react-icons/fa";

export default function EditHomePage() {
  const { onFetchOne, onSave, onDelete }: any = useContext(FetchContext);
  const [logoState, setLogoState] = useState({ header: "", footer: "" });
  const [homeState, setHomeState] = useState({} as any);
  const [youtubeState, setYoutubeState] = useState([]);
  const [newYoutubeState, setNewYoutubeState] = useState({title: "", link: ""});

  const onCreateHome = async (type: string, data: any, route: string) => {
    await onSave(
      data, // state
      "PUT", // method
      type, //header, footer, id
      route, // type route
      `Update ${route} Success`
    );
  };

  const onCreateYoutube = async (type: string, data: any, route: string) => {
    await onSave(
      data, // state
      "POST", // method
      type, //header, footer, id
      route, // type route
      `Update ${route} Success`
    );
    setNewYoutubeState({title: "", link: ""});
    onfetchYoutube();
  };

  const onFetchLogo = async () => {
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

  const onfetchYoutube = async () => {
    const youtube = await onFetchOne("youtube", "all");
    setYoutubeState(youtube?.rows);
  };

  const onDeleteYoutube = async (id: number) => {
    try {
      const res = await onDelete(id, "youtube", "Delete Youtube");
      if (res.success) {
        onfetchYoutube();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    onFetchLogo();
    onfetchYoutube();
  }, []);

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Youtube Link",
      children: (
        <div className="flex items-center justify-between">
          <div className="flex">
            <div className=" dark:border-strokedark text-start mr-5">
              <label htmlFor="" className="mx-2">
                Title
              </label>
              <input
                type="text"
                className="border border-slate-300 rounded-lg p-1"
                value={newYoutubeState?.title}
                onChange={(e: any) =>
                  setNewYoutubeState((prevState: any) => ({
                    ...prevState,
                    title: e.target.value,
                  }))
                }
              />
            </div>
            <div className=" dark:border-strokedark text-start mr-5">
              <label htmlFor="" className="mx-2">
                Url
              </label>
              <input
                type="text"
                className="border border-slate-300 rounded-lg p-1"
                value={newYoutubeState?.link}
                onChange={(e: any) =>
                  setNewYoutubeState((prevState: any) => ({
                    ...prevState,
                    link: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className=" dark:border-strokedark">
            <div className="flex items-center gap-1">
              <button
                className="hover:text-white hover:bg-green-400 text-green-400 border-green-400 border p-2 rounded-full"
                onClick={() => onCreateYoutube("youtube", newYoutubeState, "youtube")}
              >
                <FaCheckCircle size={20} />
              </button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName="Home Page"
        prevPage={{ pageName: "Dashboard", url: "/webpanel" }}
      />
      <div className="grid grid-cols-1 gap-5">
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-1 md:col-span-2 xl:col-span-1">
              <div className="grid grid-cols-1 gap-5 mb-5">
                <FormGroup
                  onSave={() => onCreateHome("header", logoState, "logo")}
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
              <div className="grid grid-cols-1 gap-5">
                <FormGroup
                  onSave={() => onCreateHome("footer", logoState, "logo")}
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
            <div className="col-span-1 md:col-span-2 xl:col-span-1 rounded-lg p-4 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-full">
              <div>
                <div className="pb-4">
                  <div className="w-full">
                    {/* @ts-ignore */}
                    <AntCollapse items={items} />
                  </div>
                </div>
                <div className="">
                  <TableThree
                    onDelete={onDeleteYoutube}
                    type="youtube"
                    data={youtubeState}
                    col={[
                      { title: "Title", minWidth: "" },
                      { title: "Link", minWidth: "" },
                      { title: "Action", minWidth: "" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-5">
        <div className="col-span-1">
          <FormGroup
            onSave={() => onCreateHome("home", youtubeState, "home")}
            formLabel="Home Detail"
            inputBox={[
              {
                state: homeState,
                setState: onChangeHomeState,
                keyProp: "aboutUsTH",
                type: "textArea",
                rows: 10,
              },
            ]}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}
