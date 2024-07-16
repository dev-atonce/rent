import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import Product from "@/components/main/Product/Product";

const fetchCat = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/category-main`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return data.rows.filter((i: any) => i?.type == "sale" || i?.type == "both");
};
export default async function SalePage() {
  const data = await fetchCat();
  return (
    <>
      <Loading />
      <Cover
        pageName={"สินค้าขาย"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto">
        <Product type={"sale"} main={data} />
      </div>
    </>
  );
}
