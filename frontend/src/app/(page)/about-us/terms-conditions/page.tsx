
import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import Image from "next/image";

import { ConfigProvider, Tabs } from 'antd';


export default function TermsPage() {

    const tab1 = () => {
        return (
            <ol className="list-decimal list-inside">
                <li>โดยปกติ อัตราค่าเช่าของ RTC และราคาจะไม่รวมถึงรายการต่อไปนี้
                    <ul className="list-inside ml-4">
                    <li>- ภาษีมูลค่าเพิ่ม (VAT)</li>
                    <li>- เชื้อเพลิง</li>
                    <li>- ค่าใช้จ่ายในการขนส่ง</li>
                    <li>- ค่าประกันภัย</li>
                    <li>- ค่าพนักงานควบคุมรถ</li>
                    </ul>
                </li>
                <li>ค่าเช่าคิดตามช่วงระยะเวลาในการครอบครองเครื่องจักรของผู้เช่า</li>
                <li>การดูแลซ่อมบำรุงประจำวันเป็นหน้าที่รับผิดชอบของผู้เช่า</li>
                <li>หากผู้ให้เช่าพบว่าเครื่องจักรเสียหาย ซึ่งเกิดจากความผิดของผู้เช่า ผู้เช่าจะต้องรับผิดชอบค่าใช้จ่ายใดๆก็ตามที่เกิดขึ้น รวมถึงค่าขนส่งด้วย</li>
                <li>ผู้เช่าจะชำระค่าเช่าตามกำหนด ยกเว้นเหตุสุดวิสัยใดๆ ซึ่งบัญญัติไว้ตามกฎหมายเท่านั้น</li>
                <li>ค่าใช้จ่ายในการติดตั้งหรือประกอบเครื่องจักรที่ให้เช่า ถือเป็นความรับผิดชอบของผู้เช่า</li>
                <li>ชั่วโมงการทำงานมาตรฐานของเครื่องจักรให้เช่าอยู่ที่ 8 ชม.ต่อวัน 240 ชม.ต่อเดือน ค่าใช้จ่ายเพิ่มเติมจะถูกเรียกเก็บเงินในกรณีที่ชั่วโมงการทำงานเกินชั่วโมงมาตรฐานการปฏิบัติงาน</li>
                <li>กำหนดยืนราคา 2 สัปดาห์นับจากวันที่เสนอราคา</li>
                <li>เมื่อมีการยืนยันในใบเสนอราคาเเล้ว ผู้เช่าตกลงและยอมรับกรณีที่ผู้ให้เช่าจัดหาพนักงานเพื่อควบคุมปฎิบัติงานทรัพย์สินของผู้เช่า ไม่ว่าจะเกิดเหตุผิดพลาดใดๆ ผู้ให้เช่าจะรับผิดชอบต่อค่าใช้จ่าย หรือค่าเสียหายใดๆเป็นจำนวนเงินไม่เกินร้อยละสิบของค่าเช่าทั้งหมด ผู้เช่าย่อมสามารถเรียกร้องค่าเสียหายได้ หากผู้เช่าสามารถพิสูจน์ได้ว่าเป็นความผิดของผู้ให้เช่า</li>
                <li>เงื่อนไขการชำระเงินจะทำการเจรจาพูดคุยกันก่อนที่จะเริ่มให้เช่า</li>
            </ol>
        )
    }
    const tab2 = () => {
        return (
            <>
                <Image src="/1-forweb.jpg" className="w-full" alt="rent" width={1200} height={180} quality={100}/>
                <Image src="/2-forweb.jpg" className="w-full" alt="rent" width={1200} height={180} quality={100}/>
                <Image src="/3-forweb.jpg" className="w-full" alt="rent" width={1200} height={180} quality={100}/>
                <Image src="/4-forweb.jpg" className="w-full" alt="rent" width={1200} height={180} quality={100}/>
            </>
        )
    }
    const tab3 = () => {
        return (<div className="min-h-100 w-full flex content-center"><h2>เร็วๆนี้</h2></div>)
    }
    const tabItem = [
        {"id":"tab_1","label":'ข้อกำหนดและเงื่อนไขในการเช่า',"children":tab1},
        {"id":"tab_2","label":'ความคุ้มครองเครื่องจักร',"children":tab2},
        {"id":"tab_3","label":'ขั้นตอนและเอกสารสำหรับลูกใหม่',"children":tab3},
    ];

    return (
    <>
        <Loading />
        <Cover
            pageName={"ข้อตกลงและเงื่อนไข"}
            prevPage={{ pageName: "หน้าแรก", url: "/" }}
        />
        <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 mb-20">
            <div className="col-span-12 terms-conditions">
                <Tabs
                    popupClassName="tabs-item"
                    tabPosition={`left`}
                    items={tabItem.map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `${_.label}`,
                            className:"p-4 text-lg",
                            key: id,
                            children: <_.children/>,
                        };
                    })}
                />
            </div>
        </div>
        </div>
    </>
    );
}
