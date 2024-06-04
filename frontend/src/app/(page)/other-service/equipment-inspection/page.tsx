import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import Otherservice from "@/components/main/Otherservice/Otherservice";
import InspectionComponent from "@/components/main/Otherservice/Inspection";

export default function Inspection() {
    const data = <InspectionComponent />;

    return (
        <>
            <Loading />
            <Cover
                pageName={"บริการอื่น ๆ"}
                prevPage={{ pageName: "หน้าแรก", url: "/" }}
            />
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 mb-20">
                    <div className="col-span-12 terms-conditions">
                        <Otherservice data={data} />
                    </div>
                </div>
            </div>
        </>
    );
}
