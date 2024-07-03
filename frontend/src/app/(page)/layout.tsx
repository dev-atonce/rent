import type { Viewport } from "next";
import { ConfigProvider } from "antd";
import FetchProvider from "@/contexts/FetchContext";
import PageSettingProvider from "@/contexts/PageSettingContext";
import "./globals.css";
import Header from "@/components/main/Header/Header";
import Footer from "@/components/main/Footer/Footer";
import { Noto_Sans_Thai_Looped } from "next/font/google";
import type { Metadata, ResolvingMetadata } from "next";
import Favicon from "../../../public/icon.ico";
const roboto = Noto_Sans_Thai_Looped({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const pageName = "home";
export const ico: Metadata = {
  title: "favicon",
  description: "By Owner",
  icons: [{ rel: "icon", url: Favicon.src }],
};
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <ConfigProvider
        theme={{
          token: {
            fontFamily: roboto.style.fontFamily,
          },
        }}
      >
        <FetchProvider>
          <PageSettingProvider>
            <body className={roboto.className}>
              <Header />
              {children}
              <Footer />
            </body>
          </PageSettingProvider>
        </FetchProvider>
      </ConfigProvider>
    </html>
  );
}
