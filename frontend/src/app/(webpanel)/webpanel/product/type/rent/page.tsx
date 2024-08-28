"use client";

import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function index()
{
    return <DefaultLayout>
        <Breadcrumb
            pageName="Products"
            prevPage={{ pageName: "Dashboard", url: "/webpanel" }}
        />
    </DefaultLayout>
}