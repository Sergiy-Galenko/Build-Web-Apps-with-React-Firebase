import { useState } from "react";
import "./NewEventFrom.css";

export default function NewEventFrom({ addEvent }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    const resetFrom = () => {
        setTitle("");
        setTitle("");
    };

    const handelSubmit = (e) => {
        e.preventDefault();

        const event = {
            title: title,
            date: date,
            id: Math.floor(Math.random() * 10000),
        };
        addEvent(event);
        resetFrom();
    };

    return (
        <form className="new-event-from" onSubmit={handelSubmit}>
            <label>
                <span>Event Title:</span>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Event Data:</span>
                <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />
            </label>
            <button>Submit</button>
            <p>
                title - {title}, date - {date}
            </p>
            <p onClick={resetFrom}>reset the from</p>
        </form>
    );
}
