import Image from "next/image";

const Inspection = () => {
  return (
    <>
      <h1 className="font-bold pb-4 text-xl">
        บริการรับทดสอบรอกโซ่และออกใบปจ.1
      </h1>
      <p>
        บริษัทเร้นท์ ประเทศไทย จำกัด
        มีบริการตรวจสอบอุปกรณ์รอกโซ่ให้กับลูกค้าตรวจสอบด้วยเครื่องมือที่ทันสมัยและแม่นยำ
        นำเข้าจากประเทศญี่ปุ่นและมีการออกใบรับรองปจ.1 ที่ถูกต้องตามกฎหมาย
        หากลูกค้าท่านใดมีความสนใจ สามารถติดต่อ-สอบถามรายละเอียด
        เพื่อรับบริการได้ที่สาขาที่ใกล้เคียงท่าน
      </p>
      <h2 className="font-bold pt-6 text-xl">เครื่องมือทดสอบรอกโซ่</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Image
          className="w-full aspect-[3/4] object-cover"
          src="/other-service/other-service-1.jpg"
          alt="rent"
          width="500"
          height="500"
          quality={80}
        />
        <Image
          className="w-full aspect-[3/4] object-cover"
          src="/other-service/other-service-2.jpg"
          alt="rent"
          width="500"
          height="500"
          quality={80}
        />
      </div>
    </>
  );
};

export default Inspection;
