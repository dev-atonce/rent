import { Card, Col } from "antd";
import Image from "next/image";

interface TrainingCourse {
    id: string;
    price: number;
    title: string;
    time: string;
    duration: string;
    place: string;
}

interface TraningCourseCardProps {
    data: TrainingCourse[];
}

const TraningCourseCard = ({ data }: TraningCourseCardProps) => {
    return data?.map((item: TrainingCourse, key: number) => {
        return (
            <Col xs={24} sm={12} md={12} lg={8} key={key}>
                <a href={`training/${item?.id}`}>
                    <Card
                        hoverable
                        cover={
                            <Image
                                className="w-full aspect-[3/2] object-cover"
                                alt="example"
                                src="https://at-once.info/image/blog/img_31052024-18040205.webp"
                                width={500}
                                height={300}
                                quality={80}
                                loading="lazy"
                            />
                        }
                    >
                        <div className="min-h-[60px]">
                            <span className="text-slate-400 mb-2 flex justify-between">
                                <p>
                                    {item?.time} ({item?.duration})
                                </p>
                                <p>
                                    ฿ {item?.price}
                                </p>
                            </span>
                            <h3 className="font-bold  text-slate-800 mb-2 line-clamp-1">
                                {item?.title}
                            </h3>
                            <p className="line-clamp-2 h-11 text-slate-600">
                                {item?.place}
                            </p>
                        </div>
                    </Card>
                </a>
            </Col>
        );
    });
};

export default TraningCourseCard;
