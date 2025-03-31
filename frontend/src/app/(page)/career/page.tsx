import BlogSection from "@/components/main/BlogSection/BlogSection";
import Cover from "@/components/main/Cover/Cover";
import JobPosition from "@/components/main/JobPosition/JobPosition";
import Loading from "@/components/main/Loading/Loading";
import { Metadata, ResolvingMetadata } from "next";

const pageName = "career";

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lng = "TH";

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

export default function CareerPage() {
  return (
    <>
      <Loading />
      <Cover
        pageName={"ร่วมงานกับเรา"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto">
        <JobPosition
          limit={8}
          home={false}
        />
      </div>
      <div className="h-0.5 mx-auto w-3/4 bg-[#11A3DD]"/>
      <div className="container mx-auto bott mt-8">
        <BlogSection
          limit={8}
          // typeBlog={["recruitment"]}8
          typeBlog={["recruitment", "job-search"]}
          home={false}
        />
      </div>
    </>
  );
}
