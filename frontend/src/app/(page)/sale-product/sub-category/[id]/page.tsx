import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import Product from "@/components/main/Product/Product";
import ProductGrid from "@/components/main/ProductGrid/ProductGrid";

const fetchProduct = async (id: any) => {
  const subCat = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/product`
    // `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/product/all`
  );
  const products = await subCat.json();
  const filteredProducts = products.rows.filter(
    (i: any) => i?.subCategory?.id == id && i?.type == "sale"
  );
  // console.log(products);
  // console.log(filteredProducts);
  return filteredProducts;
};

const fetchSubCat = async (id: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/category-sub/${id}`
  );
  const data = await res.json();

  return data;
};

export default async function RentSubCatPage({ params: { id } }: any) {
  const data = await fetchProduct(id);
  const subCatData = await fetchSubCat(id);
  return (
    <>
      <Loading />
      <Cover
        pageName={subCatData?.nameTH}
        prevPage={{
          pageName: subCatData?.mainCategory?.nameTH,
          url: `/sale-product/main-category/${subCatData?.mainCategory?.id}`,
        }}
      />

      <div className="container mx-auto">
        <ProductGrid
          data={data}
          type={"sale"}
          urlPre={"/sub-category"}
          product={true}
        />
      </div>
    </>
  );
}
