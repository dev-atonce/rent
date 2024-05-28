import Cover from "@/components/main/Cover/Cover";
import ForeignBranch from "@/components/main/ForeignBranch/ForeignBranch";
import Loading from "@/components/main/Loading/Loading";

export default function ContactPage() {
  const branch = [
    {"branch":"สาขาชลบุรี","tel":"โทร. 033-048-248"},
    {"branch":"สาขาบ่อวิน","tel":"โทร. 038-959-343"},
    {"branch":"สาขามาบตาพุด","tel":"โทร. 033-017-791"},
    {"branch":"สาขาสมุทรปราการ","tel":"โทร. 02-136-7104"},
    {"branch":"สาขารังสิต","tel":"โทร. 02-090-2623"},
    {"branch":"สาขาสมุทรสาคร","tel":"โทร. 034-861-020"},
    {"branch":"สำนักงานใหญ่","tel":"โทร. 02-0177200"},
    {"branch":"บริษัท เร้นท์ เทรด แอนด์ เซอร์วิส","tel":"โทร. 02-017-7217"},
  ];
  return (
    <>
      <Loading />
      <Cover
        pageName={"ติดต่อเรา"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto">
        <ForeignBranch title="สาขาต่างประเทศ" color="#0EA3DC" />
      </div>
    </>
  );
}
