import React from "react";
export default function EventList({events, handelClick}) {
    return (
        <div>
            {events.map((event, index) => (
                <React.Fragment key={event.id}>
                    <h2>
                        {index} - {event.title}
                    </h2>
                    <button onClick={() => handelClick(event.id)}>
                        delet event
                    </button>
                </React.Fragment>
            ))}
        </div>
    );
}
