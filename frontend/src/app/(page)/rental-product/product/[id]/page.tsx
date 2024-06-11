import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import Product from "@/components/main/Product/Product";
import ProductContent from "@/components/main/Product/ProductContent";
import ProductGrid from "@/components/main/ProductGrid/ProductGrid";

const fetchProduct = async (id: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/product/${id}`
  );
  const data = await res.json();

  return data;
};

export default async function ProductPage({ params: { id } }: any) {
  const data = await fetchProduct(id);

  return (
    <>
      <Loading />
      <Cover
        pageName={data?.productNameTH}
        prevPage={{
          pageName: data?.subCategory?.nameTH,
          url: `/rental-product/sub-category/${data?.subCategory?.id}`,
        }}
      />
      <div className="container mx-auto">
        <div className="">
          <ProductContent data={data} />
        </div>
      </div>
    </>
  );
}
