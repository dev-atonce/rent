import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import { Row } from "antd";
import Image from "next/image";

export default function OrganizationPage() {
  return (
    <>
      <Loading />
      <Cover
        pageName={"ผังองค์กร"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 flex justify-center mb-30">
            <Image src="/organization24.jpg" alt="ผังองค์กร" width="1200" height="350"/>
          </div>
        </div>
      </div>
    </>
  );
}
