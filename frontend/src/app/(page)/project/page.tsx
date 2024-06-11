import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import Project from "@/components/main/Project/Project";

export default function ProjectPage() {
  return (
    <>
      <Loading />
      <Cover
        pageName={"ผลงานที่เรามีส่วนร่วม"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto">
        <Project
          limit={12}
          typeBlog={["general", "customer", "selfedit"]}
          home={false}
        />
      </div>
    </>
  );
}
