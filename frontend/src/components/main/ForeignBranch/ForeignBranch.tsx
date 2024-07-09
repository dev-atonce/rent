import Image from "next/image";

export default function ForeignBranch({ title, color, home }: any) {
  const data = [
    {
      name: "japan",
      image: "/img/rent-japan.jpeg",
      url: "https://www.rent.co.jp/",
    },
    { name: "rts", image: "/img/rent-rts.jpeg", url: "/contact/branch/rts" },
    {
      name: "vietnam",
      image: "/img/rent-vietnam.jpeg",
      url: "https://maxrent.vn/en/home/",
    },
    {
      name: "indonesia",
      image: "/img/rent-indo.jpeg",
      url: "https://maxrent.id/",
    },
  ];
  const data2 = [
    {
      name: "japan",
      image: "/img/rent-japan.jpeg",
      url: "https://www.rent.co.jp/",
    },
    {
      name: "vietnam",
      image: "/img/rent-vietnam.jpeg",
      url: "https://maxrent.vn/en/home/",
    },
    {
      name: "indonesia",
      image: "/img/rent-indo.jpeg",
      url: "https://maxrent.id/",
    },
  ];
  return (
    <div className="py-12">
      <h3 className="text-2xl font-semibold py-6" style={{ color: `${color}` }}>
        {title}
      </h3>
      <div className="grid grid-cols-12 sm:gap-2 gap-2   ">
        {home
          ? data.map((item: any, index: any) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                className="col-span-12 sm:col-span-6 lg:col-span-3 rounded-lg overflow-hidden shadow-lg "
              >
                <Image
                  src={item.image}
                  alt="partners"
                  width={400}
                  height={400}
                  className=" w-full"
                />
              </a>
            ))
          : data2.map((item: any, index: any) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                className="col-span-12 sm:col-span-4 lg:col-span-4 rounded-lg overflow-hidden shadow-lg "
              >
                <Image
                  src={item.image}
                  alt="partners"
                  width={400}
                  height={400}
                  className=" w-full"
                />
              </a>
            ))}
      </div>
    </div>
  );
}
