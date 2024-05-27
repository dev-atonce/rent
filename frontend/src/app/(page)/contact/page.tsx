import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";

export default function ContactPage() {
  return (
    <>
      <Loading />
      <Cover
        pageName={"ติดต่อเรา"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="h-[100vh]"></div>
    </>
  );
}
