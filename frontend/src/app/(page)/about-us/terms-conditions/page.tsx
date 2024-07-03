"use client"
import { useEffect, useState } from "react";
import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import Image from "next/image";

import { ConfigProvider, Tabs } from 'antd';

type TabPosition = 'left' |'top';

export default function TermsPage() {

    const [tabPosition, setTabPosition] = useState<TabPosition>('left');
    const adjust = () => {
        setTabPosition((window.innerWidth > 1024)?'left':'top');
    }
    useEffect(() => {
        adjust();
        window.addEventListener("resize", adjust);
        return () => {
            window.removeEventListener("resize", adjust);
        }
    }, [tabPosition])  

    const tab1 = () => {
        return (<>
            <h1 className="font-bold text-2xl mb-6">ข้อกำหนดและเงื่อนไขในการเช่า</h1>
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
        </>)
    }
    const tab2 = () => {
        return (
            <>
                <h1 className="w-full text-2xl font-bold mb-6">ความคุ้มครองเครื่องจักร</h1>
                <Image src="/1-forweb.jpg" className="w-full" alt="rent" width={1200} height={180} quality={100}/>
                <Image src="/2-forweb.jpg" className="w-full" alt="rent" width={1200} height={180} quality={100}/>
                <Image src="/3-forweb.jpg" className="w-full" alt="rent" width={1200} height={180} quality={100}/>
                <Image src="/4-forweb.jpg" className="w-full" alt="rent" width={1200} height={180} quality={100}/>
            </>
        )
    }
    const tab3 = () => {
        return (<div className="min-h-100 w-full">
            <h1 className="w-full text-2xl font-bold mb-6">ขั้นตอนและเอกสารสำหรับลูกใหม่</h1>
            <p className="indent-10 mb-4">
                ลูกค้าที่ประสงค์จะเช่าเครื่องจักรกับบริษัท เร้นท์ (ประเทศไทย) จำกัด ในการเช่าครั้งแรก จะต้องชำระเงินเป็นเงินสด (หรือโดยการโอนเงินผ่านธนาคาร) เท่านั้น เมื่อลูกค้าได้รับใบเสนอราคาจากเจ้าหน้าที่ฝ่ายการตลาด และตกลงราคากันเป็นที่เเรียบร้อยแล้ว การส่งเครื่องจักร สำหรับลูกค้าเงินสด จะมีขั้นตอนดังนี้
            </p>
            <ol>
                <li>1). เจ้าหน้าที่ฝ่ายการตลาดได้รับออเดอร์และยืนยันการสั่งสินค้าจากทางลูกค้า (ลูกค้าเงินสด)</li>
                <li>2) เจ้าหน้าที่ฝ่ายการตลาดให้แผนกบัญชีทำใบสรุปยอดให้ เพื่อส่งให้ลูกค้าชำระเงินก่อนรับสินค้า</li>
                <li>3) เมื่อลูกค้าส่งหลักฐานการชำระเงินเรียบร้อยแล้ว พนักงานบัญชีทำการตรวจสอบยอดเงิน และทำการส่งออเดอร์ให้พนักงานขนส่งดำเนินการต่อไป</li>
            </ol>

            <p className="font-bold mt-6 my-4">เอกสารที่จำเป็นสำหรับลูกค้าใหม่</p>
            <ol>
                <li>1. หนังสือรับรองบริษัท (อายุไม่เกิน 6 เดือน)</li>
                <li>2. ภพ. 20</li>
            </ol>
        </div>)
    }
    const tab4 = () => {
        return <>
            <h1 className="font-bold text-2xl mb-6">ช่องทางการชำระเงิน</h1>
            <p>ลูกค้าเงินสดสามารถโอนเงินผ่านบัญชี ธนาคารไทยพาณิชย์ ตามเลขบัญชีของแต่ละสาขาดังนี้</p>
            <ul className="mt-4">
                <li>
                    <p>1. สาขาชลบุรี</p>
                    <p className="indent-5">SRTC_CB 9632042197</p>
                </li>
                <li>
                    <p>2. สาขารังสิต</p>
                    <p className="indent-5">SRTC_RS 3144814220</p>
                </li>
                <li>
                <   p>3. สาขาระยอง</p>
                    <p className="indent-5">SRTC_RY 8942338177</p>
                </li>
                <li>
                    <p>4. สาขาสมุทรปราการ</p>
                    <p className="indent-5">SRTC_SP 3472967909</p>
                </li>
            </ul>
        </>
    }
    const tabItem = [
        {"id":"tab_1","label":'ข้อกำหนดและเงื่อนไขในการเช่า',"children":tab1},
        {"id":"tab_2","label":'ความคุ้มครองเครื่องจักร',"children":tab2},
        {"id":"tab_3","label":'ขั้นตอนและเอกสารสำหรับลูกใหม่',"children":tab3},
        {"id":"tab_3","label":'ช่องทางการชำระเงิน',"children":tab4},
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
                    tabPosition={tabPosition}
                    tabBarStyle={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                    items={tabItem.map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `${_.label}`,
                            className:"p-4",
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
