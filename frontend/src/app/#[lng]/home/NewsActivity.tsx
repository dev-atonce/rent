"use client";
import { Row } from "antd";
import BlogSection from "@/components/main/ฺBlogSection/BlogSection";
import { useTranslation } from "react-i18next";

export default function NewsActivity({ lng }: any) {
  const { t } = useTranslation(lng);
  return (
    <div className="section-5 home-news my-10">
      <h4 className="font-bold text-blue-900 title mb-8">
        {t("header.news-activity")}
      </h4>
      {/* <Row gutter={[16, 16]}> */}
      <BlogSection
        home={true}
        limit={4}
        typeBlog={["customer", "selfedit", "news"]}
      ></BlogSection>
      {/* </Row> */}
    </div>
  );
}
