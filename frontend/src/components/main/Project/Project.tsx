"use client";
import { Row } from "antd";
import BlogCard from "../BlogSection/BlogCard";
import AntPagination from "@/components/common/AntPagination/AntPagination";
import { useEffect, useState } from "react";

const ProjectSection = ({ limit, typeBlog, home, data }: any) => {
  const [page, setPage] = useState(1);
  const [blogList, setBlogList] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <>
      {!data?.length ? (
        <p className="text-center p-10">Coming Soon ...</p>
      ) : (
        <>
          <Row gutter={[16, 16]} className="py-4">
            <BlogCard data={data} type={typeBlog}></BlogCard>
          </Row>
          {/* {!home && (
            <AntPagination
              total={total}
              currentPage={page}
              setCurrentPage={setPage}
            />
          )} */}
        </>
      )}
    </>
  );
};

export default ProjectSection;
