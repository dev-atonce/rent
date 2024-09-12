import Image from "next/image";
import DynamicContent from "../DynamicContent/DynamicContent";
const fetchAbout = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/about-us/other-inspection`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return data;
};
const Inspection = async () => {
  const training = await fetchAbout();
  return (
    <>
      <DynamicContent content={training?.aboutUsTH} />
    </>
  );
};

export default Inspection;
