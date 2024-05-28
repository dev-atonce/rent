import BlogSection from "@/components/main/BlogSection/BlogSection";
import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";

export default function NewsPage() {
  return (
    <>
      <Loading />
      <Cover
        pageName={"ข่าวสาร / กิจกรรม"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto">
        <div className="flex justify-center sm:justify-end sm:translate-y-[-55px] pb-4 sm:pb-0 ">
          <div className="flex gap-[2px] items-center">
            <input
              className="bg-slate-100 rounded-md p-2 focus:outline-[#0DA1DB] focus:border-0"
              type="text"
              placeholder="คำค้นหา"
            />
            <button className="py-2  px-4 sm:px-6 md:px-8 rounded-md bg-[#0DA1DB] text-white">
              ค้นหา
            </button>
          </div>
        </div>
        <BlogSection
          limit={12}
          typeBlog={["general", "customer", "selfedit"]}
          home={false}
        />
      </div>
    </>
  );
}
