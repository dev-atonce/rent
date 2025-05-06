import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import ProductGrid from "@/components/main/ProductGrid/ProductGrid";

const fetchProduct = async (id: any) => {
  const subCat = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/product/sub-category/sale/${id}`,
    { cache: "no-store" }
  );
  return await subCat.json();
};

export default async function SaleSubCatPage({ params: { id } }: any) {
  const data = await fetchProduct(id);
  return (
    <>
      <Loading />
      <Cover
        pageName={data[0]?.subCategory.nameTH ?? ""}
        prevPage={data[0] ? {
            pageName: data[0].subCategory.mainCategory.nameTH,
            url: `/sale-product/main-category/${data[0].subCategory.mainCategory.id}`,
          } : { 
            pageName: "สินค้าเช่า",
            url: "/rental-product" 
          }
        }
      />

      <div className="container mx-auto">
        <ProductGrid
          data={data}
          type={"sale"}
          urlPre={""}
          product={true}
        />
      </div>
    </>
  );
}
