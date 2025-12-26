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

const fetchProductsForSubCategories = async (subCategories: any[], type: string) => {
  const productPromises = subCategories.map(async (subCat: any) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/product/sub-category/${type}/${subCat.id}`,
      { cache: "no-store" }
    );
    const products = await res.json();
    return {
      subCategoryId: subCat.id,
      products: products.filter((i: any) => i.status === true),
    };
  });
  return Promise.all(productPromises);
};

export default async function SaleMainCatPage({ params: { id } }: any) {
  const data = await fetchCat(id);
  const productsData = await fetchProductsForSubCategories(data, "sale");
  const productsMap = productsData.reduce((acc: any, item: any) => {
    acc[item.subCategoryId] = item.products;
    return acc;
  }, {});

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
          productsMap={productsMap}
        />
      </div>
    </>
  );
}
