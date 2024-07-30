import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import ProductGrid from "@/components/main/ProductGrid/ProductGrid";

const fetchCat = async (id: any) => {
  const subCat = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/category-sub/${id}`,
    { cache: "no-store" }
  );
  return subCat.json();
};

export default async function SaleMainCatPage({ params: { id } }: any) {
  const data = await fetchCat(id);
  return (
    <>
      <Loading />
      <Cover
        pageName={data[0]?.mainCategory.nameTH}
        prevPage={{ pageName: "สินค้าขาย", url: "/sale-product" }}
      />
      <div className="container mx-auto">
        <ProductGrid
          data={data}
          type={"sale"}
          urlPre={"/sub-category"}
          product={false}
        />
      </div>
    </>
  );
}
