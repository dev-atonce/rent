import { useCallback } from "react";
import Breadcrumb from "@/components/main/Breadcrumb/Breadcrumb";
import Cover from "@/components/main/Cover/page";
import Loading from "@/components/main/Loading/Loading";
import { useTranslation } from "@/app/i18n";
import Flipbook from "@/components/main/Flipbook";
// import pdf_file from "../../../../public/";

import type { Metadata, ResolvingMetadata } from "next";

const pageName = "flip-book";

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
export default function FlipBookPage({ params: { lng } }) {
  const onFlip = useCallback((e: any) => {
    console.log("Current page: " + e.data);
  }, []);

  // const { t } = useTranslation(lng);

  return (
    <>
      <Loading />
      <Cover />
      <div className="min-h-[100vh] container mx-auto">
        <Breadcrumb
          lng={lng}
          pageName={"header.flip-book"}
          prevPage={{ pageName: "header.home", url: "/" }}
        />
        {/* <div>
          <Flipbook lng={lng} pdf={pdf_file} />
        </div> */}

        <div>
          {/* <HTMLFlipBook
              size="stretch"
              onFlip={onFlip}
              width={300} height={500}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
          >
            <div className="demoPage">Page 1</div>
            <div className="demoPage">Page 2</div>
            <div className="demoPage">Page 3</div>
            <div className="demoPage">Page 4</div>
          </HTMLFlipBook> */}
          <div className="py-4">
            <iframe
              style={{ width: "100%", height: "100vh" }}
              src="https://online.pubhtml5.com/hfgzb/gcxg/"
              scrolling="no"
              // @ts-ignore
              frameborder="0"
              allowtransparency="true"
              allowfullscreen="true"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
