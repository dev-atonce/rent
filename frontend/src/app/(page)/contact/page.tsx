import Cover from "@/components/main/Cover/Cover";
import ForeignBranch from "@/components/main/ForeignBranch/ForeignBranch";
import Loading from "@/components/main/Loading/Loading";
import Contact from "@/components/main/Contact/page";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";

const pageName = "contact";
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

const fetchData = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/contact/`
  );
  const json = await data.json();
  return json.rows;
};

export default async function ContactPage() {
  const data = await fetchData();
  return (
    <>
      <Loading />
      <Cover
        pageName={"ติดต่อเรา"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto">
        <Contact data={data} />
        <ForeignBranch title="สาขาต่างประเทศ" color="#0EA3DC" />
        <div className="mt-5 flex justify-center p-6 border-t-2 border-slate-200">
          <Image
            className="aspect-[4/2] object-cover rounded-xl"
            alt={`บริษัท เร้นท์ (ประเทศไทย) จำกัด`}
            src={`/img/contact_rent.jpg`}
            width={834}
            height={436}
            quality={100}
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
