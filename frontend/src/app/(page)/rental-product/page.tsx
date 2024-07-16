import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import Product from "@/components/main/Product/Product";
import ProductGrid from "@/components/main/ProductGrid/ProductGrid";

const fetchCat = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/category-main`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return data.rows.filter((i: any) => i?.type == "rent" || i?.type == "both");
};
export default async function RentPage() {
  const data = await fetchCat();
  return (
    <>
      <Loading />
      <Cover
        pageName={"สินค้าเช่า"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto">
        <Product type={"rent"} main={data} />
      </div>
    </>
  );
}
