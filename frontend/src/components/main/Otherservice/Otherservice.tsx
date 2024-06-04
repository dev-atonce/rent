"use client";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { usePathname, useRouter } from "next/navigation";

interface OtherserviceProps {
    data: any;
}

const Otherservice = ({ data }: OtherserviceProps) => {
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
                tabPosition={`left`}
                defaultActiveKey={pathname.includes("training") ? "1" : "2"}
                items={items}
                onChange={handleTabClick}
            />
        </>
    );
};

export default Otherservice;
