"use client";
import { Row } from "antd";
import AntPagination from "@/components/common/AntPagination/AntPagination";
import { useEffect, useState } from "react";
import BlogCard from "../BlogSection/BlogCard";

interface JobPositionProps {
  limit: number;
  home: boolean;
}

const JobPosition = ({ limit , home }: JobPositionProps) => {
  const [page, setPage] = useState(1);
  const [positionList, setPositionList] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);
  const [positionAllList, setPositionAllList] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);
  const [total, setTotal] = useState(0);

  async function jobPositionFetch() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/position/`);
    const data = await res.json();
    setPositionAllList(data.rows);
    setTotal(data.total);
  }

  async function setShowData() {
    const indexStart = (page-1) * limit;
    const indexEnd = page * limit;
    const newData = positionAllList.slice(indexStart,indexEnd);
    setPositionList(newData);
  }

  useEffect( () => {
    jobPositionFetch()
    setShowData();
  }, [page , positionAllList]);

  return (
    <>
      {!positionList?.length ? (
        <p className="text-center p-10"></p>
      ) : (
        <>    
            {/* <h1 className="text-xl font-semibold text-slate-700 mb-4">ตำแหน่งงาน</h1> */}
            <Row gutter={[16, 16]}>
              <BlogCard data={positionList} type={'position'}></BlogCard>
            </Row>
          {!home && (
            <AntPagination
              total={total}
              currentPage={page}
              setCurrentPage={setPage}
              pageSize={limit}
            />
          )}
        </>
      )}
    </>
  );
};

export default JobPosition;
