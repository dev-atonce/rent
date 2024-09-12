"use client";
import { Row } from "antd";
import TrainingCourseCard from "./TraningCourseCard";
import { useEffect, useState } from "react";
import AntPagination from "@/components/common/AntPagination/AntPagination";
import { Image } from "antd";
import DynamicContent from "../DynamicContent/DynamicContent";

const gallery = [
  "/img/training1.jpg",
  "/img/training2.jpg",
  "/img/training3.jpg",
  "/img/training4.jpg",
  "/img/training5.jpg",
  "/img/training6.jpg",
  "/img/training7.jpg",
  "/img/training8.jpg",
];

const Training = () => {
  const [page, setPage] = useState<number>(1);
  const [courseList, setCourseList] = useState([]);
  const [total, setTotal] = useState<number>(0);
  const [training, setTraining] = useState<any>({});

  const courseFetch = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/training-course`
    );
    const data = await res.json();
    setCourseList(data.rows);
    setTotal(data.total);
  };

  const fetchAbout = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/about-us/other-training`,
      { cache: "no-store" }
    );
    const data = await res.json();

    setTraining(data);
  };

  useEffect(() => {
    courseFetch();
    fetchAbout();
  }, [page]);

  return (
    <>
      <DynamicContent content={training?.aboutUsTH} />

      <div className="py-4">
        <h2 className="font-bold my-4 text-lg">บรรยากาศการอบรม</h2>
        {gallery && (
          <div className="grid grid-cols-12 w-full gap-4 pb-4">
            {gallery?.map((v: any, i: number) => {
              return (
                <div
                  key={i}
                  className="bg-slate-100 rounded-lg  col-span-6 md:col-span-4 xl:col-span-3"
                >
                  <Image
                    className="rounded-xl aspect-[3/2] object-cover w-full h-full"
                    width={"auto"}
                    height={"auto"}
                    src={`${v}`}
                    alt="training activities"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <h2 className="font-bold my-4 text-lg">ตารางการอบรม</h2>
      <Row gutter={[16, 16]} className="mt-10">
        <TrainingCourseCard data={courseList} />
      </Row>

      {total > Number(process.env.NEXT_PUBLIC_COURSE_PERPAGE) && (
        <AntPagination
          total={total}
          currentPage={page}
          setCurrentPage={setPage}
          pageSize={Number(process.env.NEXT_PUBLIC_COURSE_PERPAGE)}
        />
      )}
    </>
  );
};

export default Training;
