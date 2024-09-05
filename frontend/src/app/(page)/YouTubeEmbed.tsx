"use client";
import { useState, useEffect } from "react";
import Image from "next/image";


const YouTubeEmbed = ({ list, width, height }: any) => {
    const [video, setVideo] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/youtube/all`, { cache: "no-store" })
            .then((res) => res.json())
            .then((data) => {
                const dataList = data.rows;
                setVideo(dataList[0].link);
                setData(dataList);
            })
    }, [])

    return (
        <>
            <div className="video-responsive flex justify-center mb-2">
                <iframe
                    width="100%"
                    height="280"
                    src={`https://www.youtube.com/embed/${video}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded YouTube Video"
                    className="rounded-lg w-full"
                ></iframe>
                <style jsx>{`
                .video-responsive {
                    overflow: hidden;
                    position: relative;
                }
                `}</style>
            </div>
            {data?.length > 0 && <div className="border border-slate-300 rounded-lg video-list" style={{ height: height, overflowY: 'scroll' }}>
                {data?.map((v: any, k: number) => {
                    return (
                        <div key={k} className="grid grid-cols-1 md:grid-cols-3 video-item cursor-pointer p-2 hover:text-blue-500" onClick={() => setVideo(v.link)}>
                            <div>
                                <Image
                                    alt={v.title}
                                    title={v.title}
                                    className="w-full aspect-[3/2] object-cover rounded-lg"
                                    src={`https://img.youtube.com/vi/${v.link}/hqdefault.jpg`}
                                    width={100}
                                    height={56}
                                />
                            </div>
                            <div className="col-span-2">
                                <p className="px-2">{v.title}</p>
                            </div>
                        </div>)
                })}
            </div>}
        </>
    );
};
export default YouTubeEmbed;