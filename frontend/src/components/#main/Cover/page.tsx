import Image from "next/image";
export default function Cover() {
  return (
    <div className="w-full bg-green-100 ">
      <Image
        className="w-full"
        src="/image/cover/hankyu_thailand.png"
        width={2000}
        height={500}
        quality={80}
        alt="cover"
        priority={true}
      />
    </div>
  );
}
