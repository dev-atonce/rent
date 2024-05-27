import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";

export default function TermsPage() {
  return (
    <>
      <Loading />
      <Cover
        pageName={"ข้อตกลงและเงื่อนไข"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
    </>
  );
}
