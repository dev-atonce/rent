"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

interface calendar {
    title: string;
    start: number;
    end: string;
}

interface calendarProps {
    data: calendar[];
}

const Calendar = ({ data }: calendarProps) => {
    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={data}
            />
        </>
    );
};

export default Calendar;
