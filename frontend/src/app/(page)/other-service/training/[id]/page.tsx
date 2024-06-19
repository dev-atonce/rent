import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import Calendar from "@/components/main/Otherservice/Calendar";

const fetchCalendar = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/calendar/${id}`
  );
  const data = await res.json();

  return data.rows;
};

export default async function TrainingCourse({
  params,
}: {
  params: { id: string };
}) {
  const id = params?.id;
  const data = await fetchCalendar(id);

  return (
    <>
      <Loading />
      <Cover
        pageName={`การฝึกอบรมความปลอดภัย ${data[0]?.trainingCourse?.titleTH}`}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 mb-20">
          <div className="col-span-12">
            <Calendar data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
