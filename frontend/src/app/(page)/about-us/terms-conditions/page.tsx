import Condition from "@/components/main/Condition/Condition";
import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import Image from "next/image";

const fetchCondition = async () => {
  const resCondition = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/about-us/condition`,
    { cache: "no-store" }
  );
  const condition = await resCondition.json();

  const resInsurance = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/about-us/insurance`,
    { cache: "no-store" }
  );
  const insurance = await resInsurance.json();

  const resDocument = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/about-us/document`,
    { cache: "no-store" }
  );
  const document = await resDocument.json();
  const resPayment = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/about-us/payment`,
    { cache: "no-store" }
  );
  const payment = await resPayment.json();

  return { condition, insurance, document, payment };
};
export default async function TermsPage() {
  const data = await fetchCondition();
  return (
    <>
      <Loading />
      <Cover
        pageName={"ข้อตกลงและเงื่อนไข"}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <Condition data={data} />
    </>
  );
}
