import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./index.module.scss";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
});

//Mock Data
const events = [
    {
        title: "Test",
        allDay: true,
        start: new Date(2022, 9, 1),
        end: new Date(2022, 9, 1)
    },
    {
        title: "Vacation",
        start: new Date(2022, 9, 2),
        end: new Date(2022, 9, 4)
    },
    {
        title: "Conference",
        start: new Date(2022, 9, 13),
        end: new Date(2022, 9, 17)
    },
];

export default function CalendarUI() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" })
    const [allEvents, setAllEvents] = useState(events)

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent])
    }

    return (
        <div className={styles.calendar} >
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div>
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }}
                    value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }}
                    selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date"
                    selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ margin: "50px" }} />

        </div >
    );
}


