"use client";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface OtherserviceProps {
    data: any;
}

type TabPosition = 'left' | 'top';

const Otherservice = ({ data }: OtherserviceProps) => {

    const [tabPosition, setTabPosition] = useState<TabPosition>('left');
    
    const adjust = () => {        
        setTabPosition((window.innerWidth > 1024) ? 'left' : 'top');
    }
    
    useEffect(() => {    
        adjust();
        window.addEventListener("resize", adjust);
        return () => {
            window.removeEventListener("resize", adjust);
        }
    }, [tabPosition])

    const router = useRouter();
    const pathname = usePathname();

    const handleTabClick = (key: string) => {
        switch (key) {
            case "1":
                router.push("/other-service/training");
                break;
            case "2":
                router.push("/other-service/equipment-inspection");
                break;
            default:
                break;
        }
    };

    const items: TabsProps["items"] = [
        { key: "1", label: "อบรมการใช้งานเครื่องจักร", children: data },
        { key: "2", label: "บริการทดสอบรอก", children: data },
    ];

    return (
        <>
            <Tabs
                tabPosition={tabPosition}
                tabBarStyle={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
                defaultActiveKey={pathname.includes("training") ? "1" : "2"}
                items={items}
                onChange={handleTabClick}
            />
        </>
    );
};

export default Otherservice;
