export default function ProductCardImg({ item }: any) {
  return (
    <img
      src={
        item?.image
          ? `${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`
          : `${process.env.NEXT_PUBLIC_BASE_URL}public\\image\\no_image.webp`
      }
      alt={item.nameTH}
      // width={400}
      // height={400}
      className="w-full object-cover aspect-4/3"
      // loading="lazy"
    />
  );
}
