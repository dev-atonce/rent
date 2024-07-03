import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import Project from "@/components/main/Project/Project";

const fetchProject = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/project/all`
    // `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/project/`
  );
  const data = await res.json();
  return data.rows;
};

export default async function ProjectPage() {
  const data = await fetchProject();

  return (
    <>
      <Loading />
      <Cover
        pageName={"ผลงานที่เรามีส่วนร่วม"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto">
        <Project data={data} limit={12} typeBlog={["project"]} home={false} />
      </div>
    </>
  );
}
