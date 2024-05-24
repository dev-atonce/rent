"use client";
import BlogSection from "@/components/main/ฺBlogSection/BlogSection";
import { Divider } from "antd";
import { useTranslation } from "react-i18next";
export default function News({ lng }: any) {
  const { t } = useTranslation(lng);

  return (
    <>
      <h2 className="my-5 font-bold">{t("component.news-activity.news")}</h2>
      <BlogSection home={false} limit={8} typeBlog={"news"}></BlogSection>

      <Divider></Divider>

      <h2 className="my-5 font-bold">{t("component.news-activity.blogs")}</h2>
      <BlogSection
        home={false}
        limit={8}
        typeBlog={["customer", "selfedit"]}
      ></BlogSection>
    </>
  );
}
