import BlogSection from "@/components/main/BlogSection/BlogSection";
import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import { Metadata, ResolvingMetadata } from "next";

const pageName = "news-activity";

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

export default function NewsPage() {
  return (
    <>
      <Loading />
      <Cover
        pageName={"ข่าวสาร / กิจกรรม"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
        hidden={true}
      />
      <h1 className="container mx-auto py-6 text-2xl font-semibold text-slate-700">ข่าวสาร</h1>
      <div className="container mx-auto">
        {/* <div className="flex justify-center sm:justify-end sm:translate-y-[-55px] pb-4 sm:pb-0 ">
          <div className="flex gap-[2px] items-center">
            <input
              className="bg-slate-100 rounded-md p-2 focus:outline-[#0DA1DB] focus:border-0"
              type="text"
              placeholder="คำค้นหา"
            />
            <button className="py-2  px-4 sm:px-6 md:px-8 rounded-md bg-[#0DA1DB] text-white">
              ค้นหา
            </button>
          </div>
        </div> */}
        <BlogSection
          limit={6}
          typeBlog={["general", "customer", "selfedit"]}
          home={false}
        />
      </div>
      <h1 className="container mx-auto py-6 text-2xl font-semibold text-slate-700">กิจกรรม</h1>
      <div className="container mx-auto">
        <BlogSection
          limit={6}
          typeBlog={["review"]}
          home={false}
        />
      </div>
    </>
  );
}
