"use client";
import { RxDragHandleHorizontal } from "react-icons/rx";
import HistoryRecord from "./HistoryRecord";
import SeoRecord from "./SeoRecord";
import ServiceRecord from "./ServiceRecord";
import UserRecord from "./UserRecord";
import { useContext, useRef } from "react";
import LogRecord from "./LogRecord";
import { FetchContext } from "@/contexts/FetchContext";
import AddressRecord from "./AddressRecord";
import SubjectRecord from "./SubjectRecord";
import PositionRecord from "./positionRecord";
import ProductRecord from "./ProductRecord";
import MainCatRecord from "./MainCatRecord";
import SubCatRecord from "./SubCatRecord";
import ProjectRecord from "./ProjectRecord";
import TrainingRecord from "./TrainingRecord";
import CalendarRecord from "./CalendarRecord";
import CoverRecord from "./CoverRecord";
import ContactFormRecord from "./ContactFormRecord";
import YoutubeRecord from "./YoutubeRecord";

const TableThree = ({
  onFetchCalendar,
  currentPage,
  data,
  col,
  modal,
  type,
  drag,
  setData,
  onDelete,
}: any) => {
  const {
    onSave,
    onChangeStatus: onStatus,
    onSort,
  }: any = useContext(FetchContext);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const onUpdateSort = async (id: any, order: any) => {
    onSort(order, id, type, `${type} Sort `);
  };

  const onChangeStatus = async (id: any, status: any) => {
    onStatus(status, id, type, `Change ${type} Status`);
  };

  const handleSort = () => {
    let _data = [...data];
    // @ts-ignore
    const draggedItemContent = _data?.splice(dragItem.current, 1)[0];
    // @ts-ignore
    _data.splice(dragOverItem.current, 0, draggedItemContent);

    dragItem.current = null;
    dragOverItem.current = null;

    // const __data = _data?.map((i: any, key) => ({ ...i, sort: key }));
    const __data = _data?.map((i: any, key) => {
      onUpdateSort(i?.id, key);
      return { ...i, sort: key };
    });

    setData(__data);
  };
  return (
    <div className="rounded-lg border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-5 xl:pb-5">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {drag ? (
                <th className=" px-4 pl-7 py-4 font-medium text-black dark:text-white">
                  <RxDragHandleHorizontal size={25} />
                </th>
              ) : (
                <th className=" px-4 pl-7 py-4 font-medium text-black dark:text-white">
                  No.
                </th>
              )}
              {col?.map((i: any, k: any) => (
                <th
                  key={k}
                  className={`px-4 pl-7 py-4 font-medium text-black dark:text-white`}
                  style={{ minWidth: i.minWidth }}
                >
                  {i?.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {type === "seo" &&
              data?.map((i: any, key: any) => (
                <SeoRecord i={i} index={key} modal={modal} key={key} />
              ))}
            {type === "project" &&
              data?.map((i: any, key: any) => (
                <ProjectRecord
                  i={i}
                  index={key}
                  modal={modal}
                  drag={drag}
                  onDragEnd={handleSort}
                  dragItem={dragItem}
                  dragOverItem={dragOverItem}
                  onChangeStatus={onChangeStatus}
                  key={key}
                  onDelete={onDelete}
                  currentPage={currentPage}
                />
              ))}
            {type === "banner" &&
              data?.map((i: any, key: any) => (
                <CoverRecord
                  i={i}
                  index={key}
                  modal={modal}
                  drag={drag}
                  onDragEnd={handleSort}
                  dragItem={dragItem}
                  dragOverItem={dragOverItem}
                  onChangeStatus={onChangeStatus}
                  key={key}
                  onDelete={onDelete}
                />
              ))}
            {type === "training" &&
              data?.map((i: any, key: any) => (
                <TrainingRecord
                  i={i}
                  index={key}
                  modal={modal}
                  drag={drag}
                  onDragEnd={handleSort}
                  dragItem={dragItem}
                  dragOverItem={dragOverItem}
                  onChangeStatus={onChangeStatus}
                  key={key}
                  onDelete={onDelete}
                />
              ))}
            {type === "product" &&
              data?.map((i: any, key: any) => (
                <ProductRecord
                  i={i}
                  index={key}
                  modal={modal}
                  drag={drag}
                  onDragEnd={handleSort}
                  dragItem={dragItem}
                  dragOverItem={dragOverItem}
                  onChangeStatus={onChangeStatus}
                  key={key}
                  onDelete={onDelete}
                  currentPage={currentPage}
                />
              ))}
            {type === "history" &&
              data?.map((i: any, key: any) => (
                <HistoryRecord i={i} index={key} modal={modal} key={key} />
              ))}
            {type === "email" &&
              data?.map((i: any, key: any) => (
                <HistoryRecord i={i} index={key} modal={modal} key={key} />
              ))}
            {type === "log" &&
              data?.map((i: any, key: any) => (
                <LogRecord i={i} index={key} modal={modal} key={key} />
              ))}
            {type === "address" &&
              data?.map((i: any, key: any) => (
                <AddressRecord
                  i={i}
                  index={key}
                  modal={modal}
                  key={key}
                  drag={drag}
                  onDragEnd={handleSort}
                  dragItem={dragItem}
                  dragOverItem={dragOverItem}
                  onChangeStatus={onChangeStatus}
                  onDelete={onDelete}
                />
              ))}
            {type === "mainCategory" &&
              data?.map((i: any, key: any) => {
                return (
                  <MainCatRecord
                    i={i}
                    index={key}
                    modal={modal}
                    key={key}
                    drag={drag}
                    onDragEnd={handleSort}
                    dragItem={dragItem}
                    dragOverItem={dragOverItem}
                    onChangeStatus={onChangeStatus}
                    onDelete={onDelete}
                  />
                );
              })}
            {type === "calendar" &&
              data?.map((i: any, key: any) => {
                return (
                  <CalendarRecord
                    onFetchCalendar={onFetchCalendar}
                    i={i}
                    index={key}
                    modal={modal}
                    key={key}
                    drag={drag}
                    onDragEnd={handleSort}
                    dragItem={dragItem}
                    dragOverItem={dragOverItem}
                    onChangeStatus={onChangeStatus}
                    onDelete={onDelete}
                  />
                );
              })}
            {type === "subCategory" &&
              data?.map((i: any, key: any) => {
                return (
                  <SubCatRecord
                    i={i}
                    index={key}
                    modal={modal}
                    key={key}
                    drag={drag}
                    onDragEnd={handleSort}
                    dragItem={dragItem}
                    dragOverItem={dragOverItem}
                    onChangeStatus={onChangeStatus}
                    onDelete={onDelete}
                  />
                );
              })}
            {type === "position" &&
              data?.map((i: any, key: any) => {
                return (
                  <PositionRecord
                    onDelete={onDelete}
                    i={i}
                    index={key}
                    modal={modal}
                    key={key}
                    drag={drag}
                    onDragEnd={handleSort}
                    dragItem={dragItem}
                    dragOverItem={dragOverItem}
                    onChangeStatus={onChangeStatus}
                    currentPage={currentPage}
                  />
                );
              })}
            {type === "user" &&
              data?.map((i: any, key: any) => (
                <UserRecord
                  key={key}
                  i={i}
                  index={key}
                  modal={modal}
                  onDelete={onDelete}
                />
              ))}
            {type === "contact-form" &&
              data?.map((i: any, key: any) => (
                <ContactFormRecord
                  i={i}
                  index={key}
                  onChangeStatus={onChangeStatus}
                  key={key}
                  onDelete={onDelete}
                  currentPage={currentPage}
                />
              ))}
            {type === "youtube" &&
              data?.map((i: any, key: any) => (
                <YoutubeRecord
                  i={i}
                  index={key}
                  onChangeStatus={onChangeStatus}
                  key={key}
                  onDelete={onDelete}
                  currentPage={currentPage}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
