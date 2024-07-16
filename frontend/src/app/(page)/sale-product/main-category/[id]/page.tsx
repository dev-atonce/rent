import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import Product from "@/components/main/Product/Product";
import ProductGrid from "@/components/main/ProductGrid/ProductGrid";

const fetchCat = async (id: any) => {
  const subCat = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/category-sub`,
    { cache: "no-store" }
  );
  const subCatData = await subCat.json();
  const filteredSubCat = subCatData.rows.filter(
    (i: any) => i?.mainCategory?.id == id
  );

  return filteredSubCat;
};

const fetchMainCat = async (id: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/category-main/${id}`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return data;
};

export default async function RentMainCatPage({ params: { id } }: any) {
  const data = await fetchCat(id);
  const mainCatData = await fetchMainCat(id);
  console.log("asdf");
  // console.log(data);
  return (
    <>
      <Loading />
      <Cover
        pageName={mainCatData?.nameTH}
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
