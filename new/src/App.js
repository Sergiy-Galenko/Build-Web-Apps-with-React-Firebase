import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";

function App() {
    const [showModal, setShowModal] = useState(true);
    const [showEvents, setShowEvents] = useState(true);
    const [events, setEvents] = useState([
        { title: "mario", id: 1 },
        { title: "super sell", id: 2 },
        { title: "apple", id: 3 },
    ]);

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
            {showEvents && <EventList events={events} handelClick={handelClick} isSalesModal={true}/>}
            {showModal && (
                <Modal handelClose={handelClose}>
                    <h2>10% off code</h2>
                    <p>Use the code Ninja at the checkout.</p>
                    <a href="#">find out more</a>
                </Modal>
            )}
            <div>
                <button onClick={() => setShowModal(true)}>Show Modal</button>
            </div>
        </div>
    );
}

export default App;
