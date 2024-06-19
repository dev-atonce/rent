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
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {drag ? (
                <th className="px-4 py-4 font-medium text-black dark:text-white xl:pl-11 ">
                  <RxDragHandleHorizontal size={25} />
                </th>
              ) : (
                <th className="px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                  No.
                </th>
              )}
              {col?.map((i: any, k: any) => (
                <th
                  key={k}
                  className={` ${i?.minWidth && `min-w-[${i?.minWidth}]`}  px-4 py-4 font-medium text-black dark:text-white xl:pl-11`}
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
            {type === "service" &&
              data?.map((i: any, key: any) => (
                <ServiceRecord
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
            {type === "subject" &&
              data?.map((i: any, key: any) => {
                return (
                  <SubjectRecord
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
