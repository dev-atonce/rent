"use client";
import { useEffect, useState } from "react";
import FilterSection from "./FilterSection";
import JobCard from "./JobCard";
import AntPagination from "@/components/common/AntPagination/AntPagination";
import { useTranslation } from "react-i18next";

interface CareerBlogProps {
  limit: number;
  typeBlog: string | string[];
  lng: string;
}

const CareerBlog = ({ limit, typeBlog, lng }: CareerBlogProps) => {
  const { t } = useTranslation(lng);
  const [pageState, setPageState] = useState(1);
  const [blogList, setBlogList] = useState([]);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState({
    province: "",
    position: "",
    keyword: "",
  });

  const filterJob = async () => {
    const route = `https://at-once.info/api/blog/c/hankyu?position=${filter?.position}&location=${filter?.province}&keyword=${filter?.keyword}&type=${typeBlog}&limit=${limit}&skip=${(pageState - 1) * limit}`;

    const res = await fetch(route, {
      method: "GET",
    });

    const data = await res.json();
    console.log(data);
    setBlogList(data.data);
    setTotal(data.total);
  };

  const onClickFilter = () => {
    console.log(filter);
    filterJob();
  };

  const onClickReset = () => {
    setFilter({ province: "", position: "", keyword: "" });
    blogFetch();
  };

  async function blogFetch() {
    const res = await fetch(
      `https://at-once.info/api/blog/c/hankyu?type=${typeBlog}&limit=${limit}&skip=${(pageState - 1) * limit}`
    );
    const data = await res.json();
    setBlogList(data.data);
    setTotal(data.total);
  }

  useEffect(() => {
    blogFetch();
  }, [pageState]);

  return (
    <>
      <FilterSection
        filter={filter}
        setFilter={setFilter}
        onClickFilter={onClickFilter}
        onClickReset={onClickReset}
        lng={lng}
      />
      {!blogList?.length ? (
        <p className="text-center p-10">Coming Soon ...</p>
      ) : (
        <>
          <JobCard data={blogList} lng={lng} />
          <AntPagination
            total={total}
            currentPage={pageState}
            setCurrentPage={setPageState}
          />
        </>
      )}
    </>
  );
};

export default CareerBlog;
