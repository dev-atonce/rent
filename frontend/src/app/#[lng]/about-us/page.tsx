import Breadcrumb from "@/components/main/Breadcrumb/Breadcrumb";
import Cover from "@/components/main/Cover/page";

import Loading from "@/components/main/Loading/Loading";
import AboutUs from "@/components/main/Pages/AboutUs/AboutUs";

import type { Metadata, ResolvingMetadata } from "next";

const pageName = "about-us";

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lng = params.lng?.toUpperCase();

  const seoRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/seo/page-name/${pageName}`;

  // fetch data
  const response = await fetch(seoRoute, { cache: "no-store" }).then((res) =>
    res.json()
  );

  return {
    title: response[`seoTitle${lng}`],
    description: response[`seoDescription${lng}`],
    keywords: response[`seoKeyword${lng}`],
  };
}
// @ts-ignore
export default function AboutPage({ params: { lng } }: any) {
  return (
    <>
      <Loading />
      <Cover />
      <div className="container mx-auto pb-20">
        <Breadcrumb
          lng={lng}
          pageName={"header.about-us"}
          prevPage={{ pageName: "header.home", url: `/` }}
        />

        <AboutUs lng={lng} />
      </div>
    </>
  );
}
