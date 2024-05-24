import Breadcrumb from "@/components/main/Breadcrumb/Breadcrumb";
import Cover from "@/components/main/Cover/page";
import DynamicContent from "@/components/main/DynamicContent/DynamicContent";
import Loading from "@/components/main/Loading/Loading";

import { Metadata, ResolvingMetadata } from "next";

import { redirect } from "next/navigation";

// fetch by url function

async function fetchData(url: string) {
  try {
    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    // console.log("Data received:", data);
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lng = params.lng?.toUpperCase();
  const route = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/service/url/${params?.url}`;

  // fetch data
  const response = await fetchData(route);
  return {
    title: response?.serviceSeo[`title${lng}`],
    description: response?.serviceSeo[`description${lng}`],
    keywords: response?.serviceSeo[`keyword${lng}`],
  };
}

export default async function ServicePage({
  params,
}: {
  params: { url: string; lng: string };
}) {
  const url = params?.url;
  const lang = params?.lng;

  const apiUrl = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/service/url/${url}`;
  const data = await fetchData(apiUrl);
  if (!data) {
    redirect("/en");
  }
  const detail = data[`serviceDetail${lang?.toUpperCase()}`];
  return (
    <>
      <Loading />
      <Cover />
      <div className="container mx-auto pb-20">
        <Breadcrumb
          lng={lang}
          pageName={data[`serviceName${lang.toUpperCase()}`]}
          prevPage={{ pageName: "header.home", url: "/" }}
        />
        <DynamicContent content={detail} />
      </div>
    </>
  );
}
