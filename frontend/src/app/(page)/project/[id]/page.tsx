import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import Product from "@/components/main/Product/Product";
import ProductContent from "@/components/main/Product/ProductContent";
import ProductGrid from "@/components/main/ProductGrid/ProductGrid";
import ProjectContent from "@/components/main/ProjectContent/ProjectContent";

const fetchProject = async (id: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/project/${id}`
  );
  const data = await res.json();

  return data;
};

export default async function ProjectPage({ params: { id } }: any) {
  const data = await fetchProject(id);

  return (
    <>
      <Loading />
      <Cover
        pageName={data?.projectNameTH}
        prevPage={{
          pageName: `ผลงานที่เรามีส่วนร่วม`,
          url: `/project/`,
        }}
      />
      <div className="container mx-auto">
        <div className="">
          <ProjectContent data={data} />
        </div>
      </div>
    </>
  );
}
