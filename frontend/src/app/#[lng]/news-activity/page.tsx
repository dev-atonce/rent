import Breadcrumb from "@/components/main/Breadcrumb/Breadcrumb";
import Cover from "@/components/main/Cover/page";
import Loading from "@/components/main/Loading/Loading";
import News from "@/components/main/Pages/News/News";

import type { Metadata, ResolvingMetadata } from "next";

const pageName = "news-activity";

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
export default function BlogPage({ params: { lng } }) {
  return (
    <>
      <Loading />
      <Cover />
      <div className="container mx-auto">
        <Breadcrumb
          lng={lng}
          pageName={"header.news-activity"}
          prevPage={{ pageName: "header.home", url: "/" }}
        />
        <News />
      </div>
    </>
  );
}
