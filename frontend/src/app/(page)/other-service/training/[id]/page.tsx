import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import Calendar from "@/components/main/Otherservice/Calendar";

export default function TrainingCourse() {
    return (
        <>
            <Loading />
            <Cover
                pageName={"การฝึกอบรมความปลอดภัย Safety Training"}
                prevPage={{ pageName: "หน้าแรก", url: "/" }}
            />
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 mb-20">
                    <div className="col-span-12 terms-conditions">
                        <Calendar />
                    </div>
                </div>
            </div>
        </>
    );
}
