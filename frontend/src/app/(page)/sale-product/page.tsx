import Cover from "@/components/main/Cover/Cover";
import DynamicContent from "@/components/main/DynamicContent/DynamicContent";
import Loading from "@/components/main/Loading/Loading";
import Product from "@/components/main/Product/Product";
import { Metadata, ResolvingMetadata } from "next";

const pageName = "sale-product";

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

const fetchCat = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/category-main`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return data.rows.filter((i: any) => i?.type == "sale" || i?.type == "both");
};

const fetchAbout = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/about-us/product-sale`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
};

export default async function SalePage() {
  const data = await fetchCat();
  const about = await fetchAbout();

  return (
    <>
      <Loading />
      <Cover
        pageName={"สินค้าขาย"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto">
        <Product type={"sale"} main={data} />
        <DynamicContent content={about?.aboutUsTH} />
      </div>
    </>
  );
}
