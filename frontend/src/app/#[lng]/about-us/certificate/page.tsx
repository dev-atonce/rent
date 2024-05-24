import Loading from "@/components/main/Loading/Loading";
import Breadcrumb from "@/components/main/Breadcrumb/Breadcrumb";
import Cover from "@/components/main/Cover/page";
// import Image from "next/image";
import { Image } from "antd";

import "../../../../css/custom.scss";
import type { Metadata, ResolvingMetadata } from "next";

const pageName = "certificate";

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
export default function CertificatePage({ params: { lng } }) {
  return (
    <div>
      <Loading />
      <Cover />
      <div className="container mx-auto">
        <Breadcrumb
          lng={lng}
          pageName="Certificate"
          prevPage={{ pageName: "Home", url: "/" }}
        />

        <div className="certificate-section">
          <h2 className="font-bold">IATA</h2>
          <div className="columns-1 md:columns-3 gap-8">
            <div className="bg-slate-100 w-full aspect-auto p-4 rounded-xl">
              <Image
                className="rounded-xl"
                width={`auto`}
                height={`auto`}
                src="/img/certificate/IATA 2024_001.png"
                alt="IATA 2024"
              />
            </div>
          </div>

          <h2 className="font-bold mt-10">ISO 9001 : 2015</h2>
          <div className="columns-1 md:columns-3 gap-8">
            <div className="bg-slate-100 w-full aspect-video p-4 rounded-xl">
              <Image
                className="rounded-xl overflow-hidden"
                width={`auto`}
                height={`auto`}
                src="/img/certificate/ISO9001-2015 Certificate-All Branch Valid20Dec2024_001.png"
                alt="ISO9001-2015 Certificate-All Branch Valid20Dec2024_001"
              />
            </div>
            <div className="bg-slate-100 w-full aspect-video p-4 rounded-xl">
              <Image
                className="rounded-xl overflow-hidden"
                width={`auto`}
                height={`auto`}
                src="/img/certificate/ISO9001-2015 Certificate-All Branch Valid20Dec2024_002.png"
                alt="ISO9001-2015 Certificate-All Branch Valid20Dec2024_002"
              />
            </div>
            <div className="bg-slate-100 w-full aspect-video p-4 rounded-xl">
              <Image
                className="rounded-xl overflow-hidden"
                width={`auto`}
                height={`auto`}
                src="/img/certificate/ISO9001-2015 Certificate-All Branch Valid20Dec2024_003.png"
                alt="ISO9001-2015 Certificate-All Branch Valid20Dec2024_001"
              />
            </div>
          </div>

          <h2 className="font-bold mt-10">ISO 14001</h2>
          <div className="columns-1 md:columns-3 gap-8">
            <div className="bg-slate-100 w-full aspect-video p-4 rounded-xl">
              <Image
                className="rounded-xl overflow-hidden"
                width={`auto`}
                height={`auto`}
                src="/img/certificate/ISO14001-2015 Certificate_001.png"
                alt="ISO14001-2015 Certificate 001"
              />
            </div>
            <div className="bg-slate-100 w-full aspect-video p-4 rounded-xl">
              <Image
                className="rounded-xl overflow-hidden"
                width={`auto`}
                height={`auto`}
                src="/img/certificate/ISO14001-2015 Certificate_002.png"
                alt="ISO14001-2015 Certificate 002"
              />
            </div>
            <div className="bg-slate-100 w-full aspect-video p-4 rounded-xl">
              <Image
                className="rounded-xl overflow-hidden"
                width={`auto`}
                height={`auto`}
                src="/img/certificate/ISO14001-2015 Certificate_003.png"
                alt="ISO14001-2015 Certificate 003"
              />
            </div>
          </div>
        </div>
        <div className="mt-10"></div>
      </div>
    </div>
  );
}
