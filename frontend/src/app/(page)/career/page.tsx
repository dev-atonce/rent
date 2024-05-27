import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";

export default function CareerPage() {
  return (
    <>
      <Loading />
      <Cover
        pageName={"ร่วมงานกับเรา"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
    </>
  );
}
