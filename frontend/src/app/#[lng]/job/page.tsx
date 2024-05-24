import Breadcrumb from "@/components/main/Breadcrumb/Breadcrumb";
import CareerBlog from "@/components/main/Career/CareerBlog";
import FilterSection from "@/components/main/Career/FilterSection";
import JobCard from "@/components/main/Career/JobCard";
import Cover from "@/components/main/Cover/page";
import Loading from "@/components/main/Loading/Loading";
import Career from "@/components/main/Pages/Career/Career";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";

const pageName = "career";

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
export default function JobPage({ params: { lng } }) {
  return (
    <>
      <Loading />
      <Cover />
      <div className="container mx-auto pb-20">
        <Breadcrumb
          lng={lng}
          pageName="header.career"
          prevPage={{ pageName: "header.home", url: "/" }}
        />
        <Career lng={lng} />
      </div>
    </>
  );
}
