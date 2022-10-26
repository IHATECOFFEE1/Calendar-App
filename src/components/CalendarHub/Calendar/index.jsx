import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.module.css";

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


function App() {
    //const [newEvent, setNewEvent] = useState({})





    return (
        <div className="App">
            <Calendar localizer={localizer} events={events}
                startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default App;
