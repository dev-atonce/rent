import { Row } from "antd";
import TrainingCourseCard from "./TraningCourseCard";

const CourseList: any = [
    {
        id: 1,
        price: 500,
        title: "Safety Training for AWP",
        time: "9.00 - 16.00",
        duration: "1 วัน",
        place: "ที่บริษัทเร้นท์ สาขาที่ลูกค้าสะดวก ",
    },
    {
        id: 2,
        price: 600,
        title: "Safety Training for Forklift",
        time: "9.00 - 16.00",
        duration: "1 วัน",
        place: "ที่บริษัทเร้นท์ สาขาที่ลูกค้าสะดวก",
    },
    {
        id: 3,
        price: 2000,
        title: "Safety Training for Backhoe",
        time: "9.00 - 16.30",
        duration: "2 วัน",
        place: "ที่บริษัทเร้นท์ สาขาสมุทรปราการ",
    },
    {
        id: 4,
        price: 1000,
        title: "Safety Training for Backhoe",
        time: "9.00 - 17.30",
        duration: "1 วัน",
        place: "ที่บริษัทเร้นท์ สาขาที่ลูกค้าสะดวก",
    }
]

const Training = () => {
    return (
        <>
            <h2>1. คอร์สอบรมการใช้งานเครื่องจักรอย่างปลอดภัย Machine Safety Training</h2>
            <p>บริษัทเร้นท์ (ประเทศไทย) จำกัด ส่งเสริมด้านความปลอดภัยในการใช้เครื่องจักร เรามีบริการอบรม Machine Safety Training</p>
            <p>สำหรับเครื่องจักรดังนี้</p>
            <p>- รถกระเช้า AWP รถบูมลิฟต์ เอ็กซ์ลิฟต์ สกายมาสเตอร์ (Aerial Work Platform, Boom Lift, X-Lift, Sky Master)</p>
            <p>- รถโฟล์คลิฟต์ (Forklift)</p>
            <p>- รถขุด รถแบคโฮ ขนาดเล็ก (Backhoe 3t) </p>
            <p>- รถมินิเครน (Mini-Crawler Crane) </p>

            <h2>เนื้อหาการอบรม</h2>
            <p>* สอนการใช้งาน ขับขี่พื้นฐาน  การซ่อมบำรุงพื้นฐาน</p>
            <p>* ข้อควรระวัง และ ข้อห้ามในการใช้เครื่องจักร เพื่อความปลอดภัย</p>
            <p>* ขับเครื่องจักรจริง พร้อมทดสอบ และออกใบรับรอง</p>
            <p>(ใบรับรองสามารถใช้ได้กับเครื่องจักรของบริษัทเร้นท์ (ประเทศไทย) เท่านั้น)</p>

            <p>หมายเหตุ</p>
            <p>- ตารางการอบรมจะอัพเดทเดือนต่อเดือน กรุณาสอบถามที่พนักงานการตลาด หรือเช็คตารางได้ที่ [Click Link ตารางอบรม]</p>
            <p>- ลูกค้าที่มีผู้เข้าอบรม 3 ท่านขึ้นไป สามารถเปิดคอร์สอบอบรมโดยเลือกวันและสถานที่ที่ท่านสะดวกได้</p>
            <p>- กรณีลูกค้ามีผู้เข้าอบรมไม่ถึง 3 ท่าน แต่ประสงค์จะเปิดคอ์สด่วน สามารถเหมาคอร์สได้ในราคา 1,500 บาท</p>
            <p>- รับผู้เข้าอบรมไม่เกิน 15 ท่านต่อหนึ่งคอร์ส</p>
            <p>- หากลูกค้าต้องการอบรมที่ไซต์งานหรือที่บริษัทของท่าน จะมีค่าเดินทางของวิทยากรเพิ่มเติมคิดตามระยะทาง กรุณาสอบถามพนักงานการตลาด</p>
            <p>- กรณีอบรมที่ไซต์ของท่าน จะต้องมีสถานที่สำหรับอบรมทั้งภาคทฤษฎีและปฏิบัติ และมีเครื่องจักรของเร้นท์สำหรับอบรมภาคปฏิบัติ</p>

            <Row gutter={[16, 16]}>
                <TrainingCourseCard data={CourseList} />
            </Row>
        </>
    );
};

export default Training;
