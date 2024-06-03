import React from "react";
import styles from "./EventList.module.css";
export default function EventList({ events, handelClick }) {
    return (
        <div>
            {events.map((event, index) => (
                <div className={styles.card} key={event.id}>
                    <h2>
                        {index} - {event.title}
                    </h2>
                    <button onClick={() => handelClick(event.id)}>
                        delet event
                    </button>
                </div>
            ))}
        </div>
    );
}
