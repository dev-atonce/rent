import Cover from "@/components/main/Cover/page";
import Breadcrumb from "@/components/main/Breadcrumb/Breadcrumb";
import Image from "next/image";
import ContactCard from "@/components/main/ContactCard/ContactCard";
import Input from "@/components/webpanel/Input/Input";
import TextArea from "@/components/webpanel/Input/TextArea";
import ContactForm from "@/components/main/ContactForm/ContactForm";
import Loading from "@/components/main/Loading/Loading";
import type { Metadata, ResolvingMetadata } from "next";

const pageName = "contact";

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

const fetchAddress = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/contact/`
  );
  const data = await res.json();

  return data?.rows;
};
// @ts-ignore
export default async function ContactPage({ params: { lng } }) {
  const data = await fetchAddress();

  return (
    <>
      <Loading />
      <Cover />
      <div className="min-h-[100vh] container mx-auto">
        <Breadcrumb
          lng={lng}
          pageName="header.contact-us"
          prevPage={{ pageName: "header.home", url: "/" }}
        />
        <div className="w-full border-b border-slate-700 py-4">
          <h2 className="font-semibold">
            HANKYU HANSHIN EXPRESS (THAILAND) CO.,LTD.
          </h2>
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6 pt-10 pb-16 border-b border-slate-700">
          {data?.map((i: any, k: any) => (
            <ContactCard item={i} key={k} lng={lng} />
          ))}
        </div>
        <div className=" flex flex-col lg:flex-row lg:items-center pt-12 py-10 gap-6">
          <Image
            src={"/image/contact/warehouse.jpg"}
            alt={"warehouse"}
            width={1000}
            height={500}
            className="rounded-xl lg:w-[50%] "
          />
          <div className="lg:w-[50%]">
            <ContactForm lng={lng} />
          </div>
        </div>
      </div>
    </>
  );
}
