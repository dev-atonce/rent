import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import Otherservice from "@/components/main/Otherservice/Otherservice";
import TrainingComponent from "@/components/main/Otherservice/Training";
import { Metadata, ResolvingMetadata } from "next";

const pageName = "other-service";

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

export default function Training() {
  const data = <TrainingComponent />;

  return (
    <>
      <Loading />
      <Cover
        pageName={"บริการอื่น ๆ"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 mb-20">
          <div className="col-span-12 terms-conditions">
            <Otherservice data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
