import BlogSection from "@/components/main/BlogSection/BlogSection";
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
      <div className="container mx-auto">
        <BlogSection
          limit={8}
          // typeBlog={["recruitment"]}
          typeBlog={["general", "customer", "selfedit", "recruitment"]}
          home={false}
        />
      </div>
    </>
  );
}
