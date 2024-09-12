import { RiDeleteBinLine } from "react-icons/ri";
export default function CalendarRecord({ i, index, onDelete }: any) {
  return (
    <>
      <tr key={index}>
        <td className="border-b border-[#eee] px-4 pl-7 py-3 dark:border-strokedark text-xs">
          {index + 1}
        </td>
        <td className="border-b border-[#eee] px-4 pl-7 py-3 dark:border-strokedark text-xs">
          <p className="text-xs">{i?.title}</p>
        </td>
        <td className="border-b border-[#eee] px-4 pl-7 py-3 dark:border-strokedark text-xs">
          <p className="text-xs">{i?.link}</p>
        </td>
        <td className="border-b border-[#eee] px-4 pl-7 py-3 dark:border-strokedark text-xs">
          <div className="flex items-center gap-1">
            <button
              onClick={() => onDelete(i?.id)}
              className="hover:text-white hover:bg-red text-red border-red border p-1 rounded-full"
            >
              <RiDeleteBinLine size={20} />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
