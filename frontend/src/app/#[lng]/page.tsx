import "../../css/custom.scss";
import "./home/css/home.scss";

import AboutUs from "./home/AboutUs";
import Mission from "./home/Mission";
import NewsActivity from "./home/NewsActivity";
import Careers from "./home/Career";

import Loading from "@/components/main/Loading/Loading";
import CoverSwiper from "./home/CoverSwiper";
import Service from "./home/Service";

import type { Metadata, ResolvingMetadata } from "next";

const pageName = "home";

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
export default function HomePage({ params: { lng } }) {
  return (
    <div className="home-content cover">
      <Loading />
      <CoverSwiper />
      <div className="container mx-auto">
        <Service lng={lng} />
        <AboutUs lng={lng} />
        <hr />
        <Mission lng={lng} />
        <hr />
        <NewsActivity lng={lng} />
        <Careers lng={lng} />
        <hr />
      </div>
    </div>
  );
}
