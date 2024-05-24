import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function FooterLink({ url, label }: any) {
  return (
    <nav className="flex items-center ">
      <MdKeyboardArrowRight size={25} />
      <Link href={url} className="text-xs font-semibold">
        {label}
      </Link>
    </nav>
  );
}
