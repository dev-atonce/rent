import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";

export default function historyPage() {
  return (
    <>
      <Loading />
      <Cover
        pageName={"ประวัติบริษัท"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
    </>
  );
}
