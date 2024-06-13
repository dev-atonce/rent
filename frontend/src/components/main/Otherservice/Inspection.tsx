import Image from "next/image";

const Inspection = () => {
    return (
        <>
            <h1 className="font-bold">บริการรับทดสอบรอกโซ่และออกใบปจ.1</h1>
            <p>
                บริษัทเร้นท์ ประเทศไทย จำกัด มีบริการตรวจสอบอุปกรณ์รอกโซ่ให้กับลูกค้าตรวจสอบด้วยเครื่องมือที่ทันสมัยและแม่นยำ นำเข้าจากประเทศญี่ปุ่นและมีการออกใบรับรองปจ.1
                ที่ถูกต้องตามกฎหมาย หากลูกค้าท่านใดมีความสนใจ สามารถติดต่อ-สอบถามรายละเอียด เพื่อรับบริการได้ที่สาขาที่ใกล้เคียงท่าน
            </p>
            <h2>เครื่องมือทดสอบรอกโซ่</h2>
            <div className="mt-5 flex">
                
                <Image
                    className="object-cover"
                    src="/other-service/other-service-1.jpg"
                    alt="rent"
                    width="300"
                    height="180"
                />
                <Image
                    className="object-cover"
                    src="/other-service/other-service-2.jpg"
                    alt="rent"
                    width="300"
                    height="180"
                />
            </div>
        </>
    );
};

export default Inspection;
