import Cover from "@/components/main/Cover/Cover";
import DynamicContent from "@/components/main/DynamicContent/DynamicContent";
import Loading from "@/components/main/Loading/Loading";
import { Row } from "antd";
import Image from "next/image";
const fetchAbout = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/about-us/organization`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return data;
};
export default async function OrganizationPage() {
  const data = await fetchAbout();
  return (
    <>
      <Loading />
      <Cover
        pageName={"ผังองค์กร"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto">
        <DynamicContent content={data.aboutUsTH} />
      </div>
    </>
  );
}
