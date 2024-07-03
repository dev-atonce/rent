import Link from "next/link";
import BlogSection from "../BlogSection/BlogSection";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Blog() {
  return (
    <div className="border-slate-200 py-12 ">
      <div className="flex items-center justify-between">
        <h4 className="text-slate-600 text-2xl font-semibold">
          ข่าวสาร <span className="text-[#0DA1DB]">/ กิจกรรม</span>
        </h4>
        <Link
          href="/news-activity"
          className="text-sm text-orange-500 flex items-center "
        >
          ดูทั้งหมด <FaAngleDoubleRight className="translate-y-[2px]" />
        </Link>
      </div>
      <div className="py-6">
        <BlogSection
          home={true}
          limit={6}
          typeBlog={["general", "customer", "selfedit"]}
        />
      </div>
    </div>
  );
}
