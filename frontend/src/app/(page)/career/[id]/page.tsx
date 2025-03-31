import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import JobPositionContent from "@/components/main/JobPosition/JobPositionContent";

const fetchPosition = async (id: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/position/${id}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  console.log('position', data);
  return data;
};

export default async function PositionPage({ params: { id } }: any) {
  const data = await fetchPosition(id);

  return (
    <>
      <Loading />
      <Cover
        pageName={data?.nameTH}
        prevPage={{
          pageName: `ร่วมงานกับเรา`,
          url: `/career/`,
        }}
      />
      <div className="container mx-auto">
        <div className="">
          <JobPositionContent data={data} />
        </div>
      </div>
    </>
  );
}
