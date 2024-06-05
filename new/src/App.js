import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventFrom from "./components/NewEvetForm";

function App() {
    const [showModal, setShowModal] = useState(true);
    const [showEvents, setShowEvents] = useState(true);
    const [events, setEvents] = useState([]);

    const addEvent = (event) => {
        setEvents((prevEvents) => {
            return [...prevEvents, event];
        });
        setShowEvents(false);
    };

    const handelClick = (id) => {
        setEvents(
            events.filter((events) => {
                return id !== events.id;
            })
        );
        console.log(id);
    };

    const handelClose = () => {
        setShowModal(false);
    };

    const subtitle = "Sergii Helanl Lesson";

    return (
        <div classNam="App">
            <Title title="hello React-JS" subtitle={subtitle} />
            {showEvents && (
                <div>
                    <button onClick={() => setShowEvents(false)}>
                        hide events
                    </button>
                </div>
            )}
            {!showEvents && (
                <div>
                    <button onClick={() => setShowEvents(true)}>
                        show events
                    </button>
                </div>
            )}
            {showEvents && (
                <EventList
                    events={events}
                    handelClick={handelClick}
                    isSalesModal={true}
                />
            )}
            {showModal && (
                <Modal handelClose={handelClose}>
                    <NewEventFrom addEvent={addEvent} />
                </Modal>
            )}
            <div>
                <button onClick={() => setShowModal(true)}>
                    Add New Events
                </button>
            </div>
        </div>
    );
}

export default App;
