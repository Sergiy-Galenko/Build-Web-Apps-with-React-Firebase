import { useState, useRef } from "react";
import "./NewEventFrom.css";

export default function NewEventFrom({ addEvent }) {
    // const [title, setTitle] = useState("");
    // const [date, setDate] = useState("");
    const title = useRef();
    const date = useRef();

    const resetFrom = () => {
        title.current.value = "";
        date.current.value = "";
    };

    const handelSubmit = (e) => {
        e.preventDefault();

        const event = {
            title: title.current.value,
            date: date.current.value,
            id: Math.floor(Math.random() * 10000),
        };
        addEvent(event);
        resetFrom();
    };

    return (
        <form className="new-event-from" onSubmit={handelSubmit}>
            <label>
                <span>Event Title:</span>
                <input type="text" ref={title} />
            </label>
            <label>
                <span>Event Data:</span>
                <input type="date" ref={date} />
            </label>
            <label>
                <span>Event Data:</span>
                <input type="date" ref={date} />
            </label>
            <button>Submit</button>
            <p onClick={resetFrom}>reset the from</p>
        </form>
    );
}
