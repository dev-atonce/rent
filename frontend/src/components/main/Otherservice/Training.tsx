"use client";
import { Row } from "antd";
import TrainingCourseCard from "./TraningCourseCard";
import { useEffect, useState } from "react";
import AntPagination from "@/components/common/AntPagination/AntPagination";

const Training = () => {
  const [page, setPage] = useState<number>(1);
  const [courseList, setCourseList] = useState([]);
  const [total, setTotal] = useState<number>(0);

  const courseFetch = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/training-course`
    );
    const data = await res.json();
    setCourseList(data.rows);
    setTotal(data.total);
  };

  useEffect(() => {
    courseFetch();
  }, [page]);

  return (
    <>
      <h1 className="font-bold pb-4 text-xl">
        1. คอร์สอบรมการใช้งานเครื่องจักรอย่างปลอดภัย Machine Safety Training
      </h1>
      <div>
        <p>
          บริษัทเร้นท์ (ประเทศไทย) จำกัด
          ส่งเสริมด้านความปลอดภัยในการใช้เครื่องจักร เรามีบริการอบรม Machine
          Safety Training สำหรับเครื่องจักรดังนี้
        </p>
        <ul className="list-inside list-disc">
          <li>
            รถกระเช้า AWP รถบูมลิฟต์ เอ็กซ์ลิฟต์ สกายมาสเตอร์ (Aerial Work
            Platform, Boom Lift, X-Lift, Sky Master)
          </li>
          <li>รถโฟล์คลิฟต์ (Forklift)</li>
          <li>รถขุด รถแบคโฮ ขนาดเล็ก (Backhoe 3t)</li>
          <li>รถมินิเครน (Mini-Crawler Crane)</li>
        </ul>
      </div>

      <h2 className="font-bold mt-5 text-lg">เนื้อหาการอบรม</h2>
      <div>
        <ul className="list-inside list-disc">
          <li>สอนการใช้งาน ขับขี่พื้นฐาน การซ่อมบำรุงพื้นฐาน</li>
          <li>ข้อควรระวัง และ ข้อห้ามในการใช้เครื่องจักร เพื่อความปลอดภัย</li>
          <li>ขับเครื่องจักรจริง พร้อมทดสอบ และออกใบรับรอง</li>
        </ul>
        <p>
          (ใบรับรองสามารถใช้ได้กับเครื่องจักรของบริษัทเร้นท์ (ประเทศไทย)
          เท่านั้น)
        </p>
      </div>

      <h2 className="font-bold mt-5 text-lg">หมายเหตุ</h2>
      <div>
        <ul className="list-inside list-disc">
          <li>
            ตารางการอบรมจะอัพเดทเดือนต่อเดือน กรุณาสอบถามที่พนักงานการตลาด
            หรือเช็คตารางได้ที่ด้านล่าง
          </li>
          <li>
            ลูกค้าที่มีผู้เข้าอบรม 3 ท่านขึ้นไป
            สามารถเปิดคอร์สอบอบรมโดยเลือกวันและสถานที่ที่ท่านสะดวกได้
          </li>
          <li>
            กรณีลูกค้ามีผู้เข้าอบรมไม่ถึง 3 ท่าน แต่ประสงค์จะเปิดคอ์สด่วน
            สามารถเหมาคอร์สได้ในราคา 1,500 บาท
          </li>
          <li>รับผู้เข้าอบรมไม่เกิน 15 ท่านต่อหนึ่งคอร์ส</li>
          <li>
            หากลูกค้าต้องการอบรมที่ไซต์งานหรือที่บริษัทของท่าน
            จะมีค่าเดินทางของวิทยากรเพิ่มเติมคิดตามระยะทาง
            กรุณาสอบถามพนักงานการตลาด
          </li>
          <li>
            กรณีอบรมที่ไซต์ของท่าน
            จะต้องมีสถานที่สำหรับอบรมทั้งภาคทฤษฎีและปฏิบัติ
            และมีเครื่องจักรของเร้นท์สำหรับอบรมภาคปฏิบัติ
          </li>
          <li>
            ใบรับรองมีอายุการใช้งาน 1 ปี กรณีใบรับรองหมดอายุไปแล้วยังไม่เกิน 2
            ปี สามารถต่อใบรับรองได้โดยไม่ต้องมาเทรนใหม่ โดยมีค่าใช้จ่าย 1,000
            บาท/ท่าน แต่หากใบรับรองหมดอายุเกิน 2 ปี
            ลูกค้าจะต้องมาเทรนใหม่เท่านั้น
          </li>
        </ul>
      </div>

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
