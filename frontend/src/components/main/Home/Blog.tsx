import Link from "next/link";
import BlogSection from "../BlogSection/BlogSection";

export default function Blog() {
  return (
    <div className="border-b-2 border-slate-200 py-12 ">
      <div className="flex items-center justify-between">
        <h4 className="text-slate-600 text-2xl font-semibold">
          ข่าวสาร / กิจกรรม
        </h4>
        <Link href="/news-activity" className="text-sm text-orange-500">
          ดูทั้งหมด
        </Link>
      </div>
      <div className="py-6">
        <BlogSection home={true} limit={6} typeBlog={["general,customer"]} />
      </div>
    </div>
  );
}
