import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import ProductGrid from "@/components/main/ProductGrid/ProductGrid";

const fetchProduct = async (id: any) => {
  const subCat = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/product/sub-category/rent/${id}`,
    { cache: "no-store" }
  );
  return await subCat.json();
};

export default async function RentSubCatPage({ params: { id } }: any) {
  const data = await fetchProduct(id);
  return (
    <>
      <Loading />
      <Cover
        pageName={data[0].subCategory.nameTH}
        prevPage={{
          pageName: data[0].subCategory.mainCategory.nameTH,
          url: `/rental-product/main-category/${data[0].subCategory.mainCategory.id}`,
        }}
      />

      <div className="container mx-auto">
        <ProductGrid
          data={data}
          type={"rent"}
          urlPre={"/sub-category"}
          product={true}
        />
      </div>
    </>
  );
}
