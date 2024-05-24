"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowRight } from "react-icons/md";

interface BreadcrumbProps {
  pageName: string;
  prevPage: { pageName: string | null; url: string | null };
  lng: string;
}
const Breadcrumb = ({ pageName, prevPage, lng }: BreadcrumbProps) => {
  const { t } = useTranslation(lng);
  return (
    <div className="flex flex-col gap-4">
      {lng ? (
        <>
          <div className="my-6 hidden md:flex text-[#002B7F] ">
            <nav>
              <ol className="flex items-center gap-2">
                {prevPage?.pageName && prevPage?.url ? (
                  <li>
                    <Link
                      className="text-sm flex items-center "
                      href={`/${lng}${prevPage?.url}`}
                    >
                      <span>{t(prevPage?.pageName)}</span>
                      <MdKeyboardArrowRight size={20} color="grey" />
                    </Link>
                  </li>
                ) : (
                  <li>
                    {/* @ts-ignore */}
                    <span className="text-sm ">{t(prevPage?.pageName)} /</span>
                  </li>
                )}

                <li className="text-sm ">{t(pageName)}</li>
              </ol>
            </nav>
          </div>
          <h2 className="font-bold text-xl mb-6 underline underline-offset-4 text-[#002B7F] md:pt-0 pt-8 ">
            {t(pageName)}
          </h2>
        </>
      ) : (
        <>
          <div className="my-6 hidden md:flex text-[#002B7F] ">
            <nav>
              <ol className="flex items-center gap-2">
                {prevPage?.pageName && prevPage?.url ? (
                  <li>
                    <Link
                      className="text-sm flex items-center "
                      href={prevPage?.url}
                    >
                      <span>{prevPage?.pageName}</span>
                      <MdKeyboardArrowRight size={20} color="grey" />
                    </Link>
                  </li>
                ) : (
                  <li>
                    <span className="text-sm ">{prevPage?.pageName} /</span>
                  </li>
                )}

                <li className="text-sm ">{pageName}</li>
              </ol>
            </nav>
          </div>
          <h2 className="font-bold text-xl mb-6 underline underline-offset-4 text-[#002B7F] md:pt-0 pt-8 ">
            {pageName}
          </h2>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
