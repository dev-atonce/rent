import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";

export default function OrganizationPage() {
  return (
    <>
      <Loading />
      <Cover
        pageName={"ผังองค์กร"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
    </>
  );
}
