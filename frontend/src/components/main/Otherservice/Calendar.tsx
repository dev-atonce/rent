"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import googleCalendarPlugin from "@fullcalendar/google-calendar";

const Calendar = () => {
    // return (
    //     <>
    //         <FullCalendar
    //             plugins={[dayGridPlugin, googleCalendarPlugin]}
    //             initialView="dayGridMonth"
    //             googleCalendarApiKey={process.env.NEXT_PUBLIC_googleCalendarApiKey}
    //             events={{
    //                 googleCalendarId: process.env.NEXT_PUBLIC_googleCalendarId
    //             }}
    //         />
    //     </>
    // );

    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, googleCalendarPlugin]}
                initialView="dayGridMonth"
                events={[
                    {
                        title: "event2",
                        start: "2024-06-03",
                        end: "2024-06-05",
                    },
                    {
                        title: "event3",
                        start: "2024-06-05T12:30:00",
                        end: "2024-06-07T12:30:00",
                        // allDay: false, // will make the time show
                    },
                ]}
            />
        </>
    );
};

export default Calendar;
