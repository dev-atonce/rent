"use client";
import { useContext, useState, useEffect } from "react";
import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { FetchContext } from "@/contexts/FetchContext";
import TextEditor from "@/components/TextEditor";

export default function index()
{
    const { onFetchOne }: any = useContext(FetchContext);
    const [data, setData] = useState([]);
    async function fetchData() {
        const data = await onFetchOne("about-us", 'product-rent');
        console.log(data)
        setData(data?.rows);
    }
    const onChangeState = (e: any, field: string) => {
        setData((prevState: any) => ({ ...prevState, [field]: e }));
    };
    useEffect(() => {
        fetchData();
    }, []);

    return <DefaultLayout>
        <Breadcrumb
            pageName="Products"
            prevPage={{ pageName: "Dashboard", url: "/webpanel" }}
        />
        <div className="grid grid-cols-1 gap-9">
            <div className="flex flex-col gap-9">
                <TextEditor 
                    id= {`categoryDescriptionTH`} 
                    dataType="product" 
                    dataId={`categoryDescriptionTH`} 
                    setState={onChangeState}
                    state={data}
                    prop={data && `categoryDescriptionTH`}
                    placeholder="categoryDescriptionTH"
                    editor={{
                        editor: true,
                        name:'projectDetail',
                        images: {
                            getPath: `about/product-rent`,
                            uploadPath: `about/product-rent`,
                        }
                    }}
                />
            </div>
        </div>
    </DefaultLayout>
}