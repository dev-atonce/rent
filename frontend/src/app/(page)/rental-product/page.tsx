import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";

export default function RentPage() {
  return (
    <>
      <Loading />
      <Cover
        pageName={"สินค้าเช่า"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
    </>
  );
}
