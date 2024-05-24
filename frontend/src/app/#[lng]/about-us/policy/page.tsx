import Breadcrumb from "@/components/main/Breadcrumb/Breadcrumb";
import Cover from "@/components/main/Cover/page";
import Image from "next/image";

import "../../../../css/custom.scss";
import Loading from "@/components/main/Loading/Loading";
import { Logo } from "@/components/main/Logo/Logo";
import { GoOrganization } from "react-icons/go";
import { BsPersonFill, BsPinMap } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";
import { FaCalendarDays, FaPeopleGroup } from "react-icons/fa6";
import { LuShip } from "react-icons/lu";
import PolicyTab from "@/components/main/Policy/PolicyTab";
import type { Metadata, ResolvingMetadata } from "next";

const pageName = "policy";

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

export default function PolicyPage({ params }: { params: { lng: string } }) {
  const lng = params?.lng;
  return (
    <>
      <Loading />
      <Cover />
      <div className="container mx-auto pb-20">
        <Breadcrumb
          lng={lng}
          pageName="header.policy"
          prevPage={{ pageName: "header.home", url: "/" }}
        />
        <PolicyTab lng={lng} />
      </div>
    </>
  );
}
