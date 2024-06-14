import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
export default function App({ onSave }: any) {
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleChange = (range: any) => {
    const [startDate, endDate] = range;
    setStartDate(startDate);
    setEndDate(endDate);
    onSave(startDate, endDate);
  };

  return (
    <div className="border border-slate-200 rounded-lg">
      {/* @ts-ignore */}
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
      />
    </div>
  );
}
