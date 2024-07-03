import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiDeleteBinLine, RiDraggable } from "react-icons/ri";
import { RxDragHandleHorizontal } from "react-icons/rx";
import SwitcherThree from "../Switchers/SwitcherThree";
import { useEffect, useState } from "react";

export default function ServiceRecord({
  i,
  index,
  modal,
  drag,
  onDragStart,
  onDragEnd,
  onChangeStatus,
  dragItem,
  dragOverItem,
  onDelete,
  currentPage,
}: any) {
  const [enabled, setEnabled] = useState(false);
  const options = {
    timeZone: "Asia/Bangkok", // GMT+7 (Indochina Time)
    timeZoneName: "short", // Include the timezone abbreviation
    hour12: false, // Use 24-hour format
  };

  // Ensure i and i.createdAt exist before accessing properties
  const timestamp =
    i && i.createdAt ? i.createdAt.toLocaleString("en-US", options) : null;

  // Check if timestamp is not null before further processing
  const createdDate = timestamp ? formatDate(new Date(timestamp)) : null;

  function formatDate(date: any) {
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  useEffect(() => {
    setEnabled(Boolean(i?.status));
  }, [i]);

  return (
    <>
      {drag ? (
        <tr
          key={index}
          draggable
          className=" "
          onDragStart={(e: any) => (dragItem.current = index)}
          onDragEnter={(e: any) => (dragOverItem.current = index)}
          onDragEnd={onDragEnd}
          onDragOver={(e: any) => e.preventDefault()}
        >
          <td className="hover:cursor-move text-center border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
            <RxDragHandleHorizontal size={25} />
          </td>
          <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
            <h5 className="font-medium text-black dark:text-white text-xs">
              {i?.productNameTH}
            </h5>
            <p className="text-sm"> {i?.serviceNameTH}</p>
          </td>
          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark text-xs">
            <p className="text-black dark:text-white">
              {i?.serviceDescriptionTH}
            </p>
            <p className="text-black dark:text-white">
              {i?.serviceDescriptionEN}
            </p>
          </td>

          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark text-xs">
            <p className="text-center">{createdDate}</p>
          </td>
          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
            <div className="flex items-center gap-1">
              <Link
                href={`/en/service/${i?.serviceUrl}`}
                className="hover:text-white hover:bg-blue-400 text-blue-400 border-blue-400 border p-2 rounded-full"
              >
                <MdOutlineRemoveRedEye size={20} />
              </Link>
              <Link
                className="hover:text-white hover:bg-yellow-400 text-yellow-400 border-yellow-400 border p-2 rounded-full"
                href={`service/edit/${i?.id}`}
              >
                <BiEdit size={20} />
              </Link>
              <button
                onClick={() => onDelete(i?.id)}
                className="hover:text-white hover:bg-red text-red border-red border p-2 rounded-full"
              >
                <RiDeleteBinLine size={20} />
              </button>
            </div>
          </td>
          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
            <div className=" text-center">
              <SwitcherThree
                id={i?.id}
                enabled={enabled}
                setEnabled={setEnabled}
                onChange={onChangeStatus}
              />
            </div>
          </td>
        </tr>
      ) : (
        <tr key={index}>
          <td className="text-center border-b border-[#eee]">
            {(currentPage - 1) *
              Number(process.env.NEXT_PUBLIC_PRODUCT_PERPAGE) +
              (index + 1)}
          </td>
          <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
            <h5 className="font-semibold text-black  dark:text-white text-xs">
              {i?.productNameTH}
            </h5>
            <span className="text-xs border border-yellow-500 rounded-full px-2 py-1">
              {i?.subCategory?.nameTH}
            </span>
          </td>
          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark text-sm">
            <p className="text-black dark:text-white text-xs">
              {i?.subCategory?.mainCategory?.nameTH}
            </p>
          </td>

          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark text-xs">
            {i?.type && (
              <span
                className={`
              ${i?.type == "rent" ? "bg-blue-500" : i?.type == "both" ? "bg-slate-500" : "bg-green-500"} text-xs uppercase px-4 text-white rounded-md`}
              >
                {i?.type}
              </span>
            )}
          </td>
          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
            <div className="flex items-center gap-1">
              <Link
                href={
                  i?.type == "rent"
                    ? `/rental-product/product/${i?.id}`
                    : `/sale-product/product/${i?.id}`
                }
                className="hover:text-white hover:bg-blue-400 text-blue-400 border-blue-400 border p-2 rounded-full"
              >
                <MdOutlineRemoveRedEye size={20} />
              </Link>
              <Link
                className="hover:text-white hover:bg-yellow-400 text-yellow-400 border-yellow-400 border p-2 rounded-full"
                href={`product/edit/${i?.id}`}
              >
                <BiEdit size={20} />
              </Link>
              <button
                onClick={() => onDelete(i?.id)}
                className="hover:text-white hover:bg-red text-red border-red border p-2 rounded-full"
              >
                <RiDeleteBinLine size={20} />
              </button>
            </div>
          </td>
          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
            <div className=" text-center">
              <SwitcherThree
                id={i?.id}
                enabled={enabled}
                setEnabled={setEnabled}
                onChange={onChangeStatus}
              />
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
