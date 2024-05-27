import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";

export default function NewsPage() {
  return (
    <>
      <Loading />
      <Cover
        pageName={"ข่าวสาร / กิจกรรม"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
    </>
  );
}
