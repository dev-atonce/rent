import Link from "next/link";
import Image from "next/image";
import "../../../css/Custom.scss";

export function Logo({ color }: any) {
  return (
    <div className="">
      <Link href="/" className="_links">
        {/* <svg
          data-name="レントロゴ"
          xmlns="http://www.w3.org/2000/svg"
          width="145"
          height="36.415"
          viewBox="0 0 156.72 40"
          className="header_logo header_logo_blue"
        >
          <title>レント</title>
          <path
            d="M61,83.33s1.16-2.33.77-4c0,0-.77-4.91-7.49-4,0,0-1.55-2.84-3.49-3.62,0,0-3.1-2.07-8,.52,0,0-2.84-3.49-8-1.29,0,0-5,1.94-4.65,8.53,0,0-3.36.26-5.3,6.46,0,0-.64,4.91,3,6.72,0,0-1.94,3.49.26,6.07,0,0,1.16,3.49,8.79,1.94,0,0-.13,5-11.88,4.14v5.17s5.17,1.68,10.72-3.62a22.86,22.86,0,0,0,6.59-12.15s.39-2.58-.9-.77a18.25,18.25,0,0,1-2.46,3.1s-4.26,3.23-7.75.78c0,0-2.84-1.68.13-5.3,0,0-3.75-1-4-4.39,0,0,.26-4.52,3.49-4.91a7.4,7.4,0,0,0,5.56,3.49s4.65.65,2.58-3.75c0,0-.52-1.81-5.82-3.1,0,0-.65-5.56,5-6.07,0,0,2.2-1.16,4.65,2.2A7.51,7.51,0,0,1,46.9,73s4.26-.52,4.65,3.36c0,0-5.17.65-5.94,5.81,0,0-1.29,3.49,3.36,2.84,0,0,3.62-.9,4.78-7,0,0,3.1-1,5,1.29,0,0,1.16,1.81-1.81,4.52a11.86,11.86,0,0,1,3.36,2.33s3,4-.77,4.91c0,0-5.69-5.69-10.72-2.2,0,0-2.84,2.2-.26,4.26,0,0,2.84,4.26,9.69,1.81a5.22,5.22,0,0,1-.65,3.49s-.52,1.94-5.56,1.16a6.25,6.25,0,0,1-1,4.26,3.5,3.5,0,0,1-5-.65,7.63,7.63,0,0,1-1.29-5.94,15,15,0,0,0,1-2.45s-.13-2.07-1.55-.26a11.5,11.5,0,0,0-1.94,8s.52,4.91,6.33,5.17c0,0,4,.52,6.2-5A5.22,5.22,0,0,0,59,101.29s3.36-1.16,1.94-7.88c0,0,2.58-1.68,2.84-4.13A5.76,5.76,0,0,0,61,83.33ZM34.11,81.78a4.42,4.42,0,0,1,4,1.94c.78,1.55-1.16,1.16-1.16,1.16-3.1-.13-3.36-2.07-3.36-2.07C33.07,82,34.11,81.78,34.11,81.78Zm14,2.45c-1.55.13-1-1.16-1-1.16,0-3.62,4.13-4.65,4.13-4.65.78-.39,1,0,1,0C51.29,84,48.06,84.24,48.06,84.24Zm4.52,9.56c-.81,0-3.88-1.73-3.88-2.84s1.41-1.69,3.88-1.62,5,2.19,5,3.3C57.62,94.44,54,93.8,52.59,93.8Zm43.34-11c0-6-3.88-10.5-9.55-11.33v-.18H67V80H83.25V80A3.08,3.08,0,0,1,84.38,86H67v23.44h9.81V94.68h5.45c2.59.13,3.82,1.5,3.82,3.68v11h9.27v-11c0-2.33-2.21-5-4.82-5.8A11.29,11.29,0,0,0,95.92,82.76Zm2.17-1.3v27.8h27.25v-9.13H107.15V94.68h18.19V86H107.15V84.32a5,5,0,0,1,4.5-4.36h13.69V71.24H107.49S98.93,73.71,98.09,81.46ZM146.6,71.24H128.75v38.15h9.13V80h5.51a5.75,5.75,0,0,1,4.5,4.36v25.07H157V81.46C155.86,72.06,146.6,71.24,146.6,71.24Zm26.71,28.89c-1.52-.31-3.94-1.29-4.5-3.81V81.89h12.38v-8H168.83V71.24h-9.1V96.72c1.84,13.22,11.66,12.67,11.66,12.67h10.08v-9.27Z"
            transform="translate(-24.76 -70.2)"
            fill="#009FDE"
          ></path>
        </svg> */}
        <Image src="/img/rent_logo.png" alt="rent" width={200} height={100} />
      </Link>
    </div>
  );
}
