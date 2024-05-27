import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";

export default function SalePage() {
  return (
    <>
      <Loading />
      <Cover
        pageName={"สินค้าขาย"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
    </>
  );
}
