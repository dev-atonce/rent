"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import googleCalendarPlugin from '@fullcalendar/google-calendar';

const Calendar = () => {
    return (
        <>
            <FullCalendar 
                plugins={[dayGridPlugin, googleCalendarPlugin]} 
                initialView="dayGridMonth" 
                googleCalendarApiKey={process.env.NEXT_PUBLIC_googleCalendarApiKey}
                events={{
                    googleCalendarId: process.env.NEXT_PUBLIC_googleCalendarId
                }}
            />
        </>
    );
};

export default Calendar;
