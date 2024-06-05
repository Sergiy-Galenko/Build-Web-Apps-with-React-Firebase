import { useState, useRef } from "react";
import "./NewEventFrom.css";

export default function NewEventFrom({ addEvent }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [localtion, setLocation] = useState("manchester");

    const resetFrom = () => {
        setDate("");
        setTitle("");
        setLocation("manchester");
    };

    const handelSubmit = (e) => {
        e.preventDefault();

        const event = {
            title: title,
            date: date,
            localtion: localtion,
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
            <label>
                <span>Event localtion:</span>
                <section onChange={(e) => setLocation(e.target.value)}>
                    <option value="manchester">Manchester</option>
                    <option value="london">London</option>
                    <option value="symu">Symu</option>
                </section>
            </label>
            <button>Submit</button>
            <p onClick={resetFrom}>reset the from</p>
        </form>
    );
}
