import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { RxDragHandleHorizontal } from "react-icons/rx";

export default function AddressRecord({
  i,
  index,
  modal,
  drag,
  onDragEnd,
  onChangeStatus,
  dragItem,
  dragOverItem,
  onDelete,
}: any) {
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
          <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11 text-start">
            <p className="text-xs">{i?.nameEN}</p>
            <p className="text-xs">{i?.nameTH}</p>
          </td>

          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
            <div className="flex items-center gap-1">
              <Link
                className="hover:text-white hover:bg-yellow-400 text-yellow-400 border-yellow-400 border p-2 rounded-full"
                href={`contact/edit/${i?.id}`}
              >
                <BiEdit size={20} />
              </Link>
              <button
                onClick={() => onDelete(i?.id, "address")}
                className="hover:text-white hover:bg-red text-red border-red border p-2 rounded-full"
              >
                <RiDeleteBinLine size={20} />
              </button>
            </div>
          </td>
        </tr>
      ) : (
        <tr key={index}>
          <td className="text-center border-b border-[#eee] ">{index + 1}</td>
          <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11 text-start">
            <p className="text-xs">{i?.nameEN}</p>
            <p className="text-xs">{i?.nameTH}</p>
          </td>

          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
            <div className="flex items-center gap-1">
              <Link
                className="hover:text-white hover:bg-yellow-400 text-yellow-400 border-yellow-400 border p-2 rounded-full"
                href={`contact/edit/${i?.id}`}
              >
                <BiEdit size={20} />
              </Link>
              <button
                onClick={() => onDelete(i?.id, "address")}
                className="hover:text-white hover:bg-red text-red border-red border p-2 rounded-full"
              >
                <RiDeleteBinLine size={20} />
              </button>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
