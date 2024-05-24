import Image from "next/image";
import Link from "next/link";
import btnStyled from "../../../css/Button.module.css";
import { BsArrowRight } from "react-icons/bs";

export default function Career({ lng }: any) {
  const text: any = {
    en: {
      careerText: `<b>Hankyu Hanshin Express (Thailand) Co., Ltd.’s</b> &#32; goal is
            to create an all-round logistics business which clients rely on. By
            adhering to the same high standards as our parent company in Japan,
            we are constantly developing our potential and services—air freight,
            sea freight, land freight, as well as multimodal transport—to offer
            a comprehensive range of solutions for your business’s demands. We
            will always evolve to be the go-to world class logistics company.`,

      career: "Careers",

      button: "Join US",
    },
    th: {
      careerText: `เป้าหมายของ <b>Hankyu Hanshin Express (Thailand) Co., Ltd.</b> &#32; คือการสร้างธุรกิจโลจิสติกส์ครบวงจรที่
ลูกค้าไว้วางใจ ด้วยการยึดมั่นในมาตรฐานระดับสูงเช่นเดียวกับบริษัทแม่ของเราในญี่ปุ่น เรากำลัง
พัฒนาศักยภาพและบริการของเราอย่างต่อเนื่อง เช่น การขนส่งทางอากาศ การขนส่งทางทะเล การ
ขนส่งทางบก รวมถึงการขนส่งต่อเนื่องหลายรูปแบบ เพื่อนำเสนอโซลูชั่นที่ครอบคลุมสำหรับความ
ต้องการของธุรกิจของคุณ เราจะพัฒนาไปสู่การเป็นบริษัทโลจิสติกส์ระดับโลกอยู่เสมอ`,

      career: "ร่วมงานกับเรา",
      button: "สมัครงาน",
    },
  };
  return (
    <div className="section-6 home-career my-10">
      <div className="contaner">
        <div className="bg-gradient-to-r from-zinc-100  rounded-3xl shadow-lg flex flex-col lg:flex-row-reverse lg:justify-between justify-center items-center lg:items-end xl:px-30 2xl:px-44 lg:px-10 pt-6 lg:pt-0">
          <Image
            src="/img/3d-rendering-stack-cardboard-boxes-warehouse-white-background-3d-illustration copy.png"
            height={520}
            width={520}
            alt="Careers"
            className=" "
          />
          <div className=" lg:py-16 py-10">
            <h4 className="font-bold text-lg">Hankyu Hanshin Express</h4>
            <h5 className="font-bold text-4xl">{text[lng]?.career}</h5>
            <Link
              href={`${lng}/job`}
              className={`${btnStyled.btn} ${btnStyled.secondary} btn-link font-bold mt-10`}
            >
              <span className="mr-2">{text[lng]?.button}</span>
              <BsArrowRight size={20} />
            </Link>
          </div>
        </div>
        <div className="pt-16 pb-10">
          <p dangerouslySetInnerHTML={{ __html: text[lng]?.careerText }}></p>
        </div>
      </div>
    </div>
  );
}
