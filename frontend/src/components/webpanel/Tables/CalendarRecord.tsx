import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import DatePickerReact from "@/components/FormElements/DatePicker/DatePickerReact";
import { FetchContext } from "@/contexts/FetchContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { RxDragHandleHorizontal } from "react-icons/rx";

export default function CalendarRecord({
  i,
  index,
  modal,
  drag,
  onDragEnd,
  onChangeStatus,
  dragItem,
  dragOverItem,
  onDelete,
  onFetchCalendar,
}: any) {
  const [editData, setEditData] = useState({});
  const { onSave }: any = useContext(FetchContext);
  const [showEdit, setShowEdit] = useState(false);
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

  const dateConverter = (fullDate: any) => {
    const date = new Date(fullDate);

    // Convert the date to the desired format (YYYY-MM-DD)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based in JavaScript
    const day = String(date.getDate()).padStart(2, "0");

    // Format the date as YYYY-MM-DD
    return `${year}-${month}-${day}`;
  };

  const onSaveRecord = async () => {
    const data = {
      ...editData,
      // @ts-ignore
      start: dateConverter(editData.start),
      // @ts-ignore
      end: dateConverter(editData.end),
    };
    // @ts-ignore
    delete data?.trainingCourse;

    try {
      const res = await onSave(
        // @ts-ignore
        data,
        "PUT",
        // @ts-ignore
        data?.id,
        "calendar",
        // @ts-ignore
        `Edit Calendar ${data?.title}`
      );
      if (res?.success) {
        onFetchCalendar();
        setShowEdit(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setEditData({ ...i });
  }, [i]);

  return (
    <>
      {showEdit ? (
        <tr
          key={index}
          // draggable
          className=" "
          onDragStart={(e: any) => (dragItem.current = index)}
          onDragEnter={(e: any) => (dragOverItem.current = index)}
          onDragEnd={onDragEnd}
          onDragOver={(e: any) => e.preventDefault()}
        >
          <td className="hover:cursor-move text-center border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
            <RxDragHandleHorizontal size={25} />
          </td>
          <td className="border-b border-[#eee] py-5 pl-9 dark:border-strokedark  text-start ">
            <input
              onChange={(e: any) =>
                setEditData({ ...editData, title: e.target.value })
              }
              type="text"
              className="border border-slate-300 rounded-lg px-2"
              size={10}
              // @ts-ignore
              value={editData?.title}
            />
          </td>
          <td className="border-b border-[#eee]  py-5 pl-9 dark:border-strokedark text-start">
            <DatePickerReact
              onSave={onSaveRecord}
              data={editData}
              setData={setEditData}
            />
          </td>

          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
            <div className="flex items-center gap-1">
              <button
                className="hover:text-white hover:bg-green-400 text-green-400 border-green-400 border p-2 rounded-full"
                onClick={onSaveRecord}
              >
                <FaCheckCircle size={20} />
              </button>
              <button
                onClick={() => onDelete(i?.id, "subject")}
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
            <p className="text-xs">{i?.title}</p>
          </td>
          <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11 text-start">
            <p className="text-xs">Start: {i?.start}</p>
            {i?.end && <p className="text-xs">End: {i?.end}</p>}
          </td>

          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
            <div className="flex items-center gap-1">
              <button
                className="hover:text-white hover:bg-yellow-400 text-yellow-400 border-yellow-400 border p-2 rounded-full"
                onClick={() => {
                  setShowEdit(true);
                }}
              >
                <BiEdit size={20} />
              </button>
              <button
                onClick={() => onDelete(i?.id, "subject")}
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
