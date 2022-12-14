
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./index.module.scss";
import { db } from "../../../firebase/clientApp";
import { collection, onSnapshot, query, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { UserAuth } from "../../../services/AuthContext";


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
    const [budget, setBudget] = useState(0)
    const [expense, setExpense] = useState(0)
    const [AllExpense, setAllExpense] = useState(0)


    const { user } = UserAuth();

    const ref = "/Users/" + user.displayName + "/Calendars/School"

    const getEvents = async () => {

        const refUser = query(collection(db, ref+"/Events"));
        onSnapshot(refUser, (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                const metaData = doc.data();
                docs.push({ title: metaData.title, start: metaData.start.toDate(), end: metaData.end.toDate() });
            });
            
            setAllEvents(docs);
        });
    }

    const getBudget = async () => {
        const refUser = doc(db, ref + "/Budget", "budget");
        const docSnap = await getDoc(refUser);
        if (docSnap.exists()) {
            setBudget(docSnap.data().budget);
        } else {
            console.log("No such document!");
        }
    }

    const getExpenses = async () => {
        const refUser = doc(db, ref + "/Expense", "expense");
        const docSnap = await getDoc(refUser);
        if (docSnap.exists()) {
            setAllExpense(docSnap.data().expense);
        } else {
            console.log("No such document!");
        }
    }

    useEffect(() => {
        getEvents();
        getBudget();
        getExpenses();

    }, [])
    
    const handleAddEvent = async () => {
        setAllEvents([...allEvents, newEvent])

        const docRef = await addDoc(collection(db, ref + "/Events"), {
            title: newEvent.title,
            start: new Date(newEvent.start),
            end: new Date(newEvent.end),
        });
    }

    const handleAddBudget = async () => {

        const docRef = await setDoc(doc(db, ref +"/Budget", "budget"), {
            budget: budget,
        });
    }

    const handleAddExpense = async () => {

        setAllExpense(Number(expense.valueOf()) + Number(AllExpense.valueOf()))

        const docRef = await setDoc(doc(db, ref +"/Expense", "expense"), {
            expense: AllExpense,
        });
    }

    return (
        <div className={styles.calendarContainer} >
            <div className={styles.option}>
                <div className={styles.datePicker}>
                    <h1>Calendar</h1>
                    <h2>Add New Event</h2>

                    <div >
                        <input type="text" placeholder="Add Title"
                            value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} required
                        />
                        <DatePicker placeholderText="Start Date" 
                            selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} required/>
                        <DatePicker placeholderText="End Date"
                            selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} required/>
                        <button onClick={handleAddEvent}>
                            Add Event
                        </button>
                    </div>
                </div>
                <div className={styles.budgetOption}>
                    <h2>Budget</h2>
                    <h4>{budget}</h4>
                    <input type="text" placeholder="Add Budget"
                        onChange={(e) => setBudget(e.target.value)} required
                    />
                    <button onClick={handleAddBudget}>
                        Set Budget
                    </button>
                </div>
                
                
                <div className={styles.budgetOption}>
                    <h2>Expenses</h2>
                    <h4>{AllExpense}</h4>
                    <div className={styles.budgetOption}>
                    <input type="number" placeholder=""onChange={(e) => setExpense(e.target.value)} required
                    />
                            <button onClick={handleAddExpense}>
                        Add expense
                    </button>
                </div>
                </div>
            </div>
            <div className={styles.calendar}>
                <Calendar
                    localizer={localizer}
                    events={allEvents}
                    startAccessor="start"
                    endAccessor="end"
                />
            </div>
        </div >
    );
}


