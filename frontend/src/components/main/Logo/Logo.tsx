"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import "../../../css/Custom.scss";

export function Logo({ color, type = "header" }: any) {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/logo/${type}`,
          { cache: "no-store" }
        );
        if (res.ok) {
          const logo = await res.json();
          if (logo?.image) {
            setLogoUrl(`${process.env.NEXT_PUBLIC_BASE_URL}${logo.image}`);
          }
        }
      } catch (error) {
        console.error("Error fetching logo:", error);
      }
    };
    fetchLogo();
  }, [type]);

  const defaultLogo = "/logoRENT_THAILAND-202509.png";
  const imageSrc = logoUrl || defaultLogo;

  return (
    <div className="">
      <Link href="/" className="_links">
        <Image src={imageSrc} alt="rent" width={200} height={100} />
      </Link>
    </div>
  );
}
