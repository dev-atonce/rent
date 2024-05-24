import { Divider, Card, Col } from "antd";
import Image from "next/image";

interface BlogCardProps {
  data: any[];
}

const BlogCard = ({ data }: BlogCardProps) => {
  return data?.map((item: any, key: any) => {
    return (
      <Col xs={24} sm={12} md={12} lg={6} key={key}>
        <a href={item?.url}>
          <Card
            hoverable
            cover={
              <Image
                className="w-full aspect-[3/2] object-cover"
                alt="example"
                src={item?.thumbnail}
                width={500}
                height={300}
                quality={80}
                loading="lazy"
              />
            }
          >
            <h3 className="font-bold line-clamp-1">{item?.title}</h3>
            <Divider className="mt-3 mb-2" />
            <p className="line-clamp-2 h-11">{item?.description}</p>
          </Card>
        </a>
      </Col>
    );
  });
};

export default BlogCard;
