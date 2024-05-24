import Breadcrumb from "@/components/main/Breadcrumb/Breadcrumb";
import Cover from "@/components/main/Cover/page";
import Loading from "@/components/main/Loading/Loading";
import type { Metadata, ResolvingMetadata } from "next";

const pageName = "company-history";

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
export default function CompanyHistoryPage({ params: { lng } }) {
  return (
    <>
      <Loading />
      <Cover />
      <div className="container mx-auto">
        <Breadcrumb
          lng={lng}
          pageName="header.company-history"
          prevPage={{ pageName: "header.home", url: "/" }}
        />
        <h1 className="font-bold my-10 text-3xl">
          HANKYU HANSHIN EXPRESS (THAILAND) CO., LTD.
        </h1>

        <h2 className="font-bold mt-10 my-4  text-2xl text-blue-900">
          1990s～2000s
        </h2>
        <div className="bg-slate-100 rounded-xl p-4 my-2">
          <div className="grid grid-flow-row-dense grid-cols-4">
            <div className="font-bold">1992</div>
            <div className="col-span-3">
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  Found as Hankyu International Transport (Thailand) Co., Ltd.
                </li>
                <li>Become a member of IATA in year 1992</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 rounded-xl p-4 my-2">
          <div className="grid grid-flow-row-dense grid-cols-4">
            <div className="font-bold">1997</div>
            <div className="col-span-3">
              <ul style={{ listStyleType: "disc" }}>
                <li>Opened an office at Chiang Mai</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 rounded-xl p-4 my-2">
          <div className="grid grid-flow-row-dense grid-cols-4">
            <div className="font-bold">2000</div>
            <div className="col-span-3">
              <ul style={{ listStyleType: "disc" }}>
                <li>Acquired ISO9001 </li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="font-bold mt-10 my-4  text-2xl text-blue-900">
          2001s～2010s
        </h2>
        <div className="bg-slate-100 rounded-xl p-4 my-2">
          <div className="grid grid-flow-row-dense grid-cols-4">
            <div className="font-bold">2001</div>
            <div className="col-span-3">
              <ul style={{ listStyleType: "disc" }}>
                <li>Opened an office at Laem Chabang</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 rounded-xl p-4 my-2">
          <div className="grid grid-flow-row-dense grid-cols-4">
            <div className="font-bold">2006</div>
            <div className="col-span-3">
              <ul style={{ listStyleType: "disc" }}>
                <li>Opened an office at Suvarnabhumi Airport</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 rounded-xl p-4 my-2">
          <div className="grid grid-flow-row-dense grid-cols-4">
            <div className="font-bold">2007</div>
            <div className="col-span-3">
              <ul style={{ listStyleType: "disc" }}>
                <li>Opened our first own-operated warehouse in Samutprakarn</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 rounded-xl p-4 my-2">
          <div className="grid grid-flow-row-dense grid-cols-4">
            <div className="font-bold">2010</div>
            <div className="col-span-3">
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  Merged with Hanshin Freight International (Thailand) Co., Ltd,
                  later changed to Hankyu Hanshin Express (Thailand) Co., Ltd.{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="font-bold mt-10 my-4  text-2xl text-blue-900">
          2011～Current
        </h2>
        <div className="bg-slate-100 rounded-xl p-4 my-2">
          <div className="grid grid-flow-row-dense grid-cols-4">
            <div className="font-bold">2015</div>
            <div className="col-span-3">
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  Commenced the West Coast clearance service (Seattle Airport)
                </li>
                <li>
                  Became independent of Hankyu Corporation and established as
                  Hankyu Express International Co., Ltd.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 rounded-xl p-4 my-2">
          <div className="grid grid-flow-row-dense grid-cols-4">
            <div className="font-bold">1973</div>
            <div className="col-span-3">
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  Opened an office in Don Muang to provide LCC air freight
                  service
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 rounded-xl p-4 my-2">
          <div className="grid grid-flow-row-dense grid-cols-4">
            <div className="font-bold">2018</div>
            <div className="col-span-3">
              <ul style={{ listStyleType: "disc" }}>
                <li>Acquired AEO certificate</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 rounded-xl p-4 my-2">
          <div className="grid grid-flow-row-dense grid-cols-4">
            <div className="font-bold">2021</div>
            <div className="col-span-3">
              <ul style={{ listStyleType: "disc" }}>
                <li>Opened an Sales office at Amata City Chonburi</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 rounded-xl p-4 my-2">
          <div className="grid grid-flow-row-dense grid-cols-4">
            <div className="font-bold">2023</div>
            <div className="col-span-3">
              <ul style={{ listStyleType: "disc" }}>
                <li>Opened warehouse at TPR 1</li>
                <li>Opened warehouse at TPR 2</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 rounded-xl p-4 my-2">
          <div className="grid grid-flow-row-dense grid-cols-4">
            <div className="font-bold">2024</div>
            <div className="col-span-3">
              <ul style={{ listStyleType: "disc" }}>
                <li>Acquired ISO 14001</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16"></div>
      </div>
    </>
  );
}
