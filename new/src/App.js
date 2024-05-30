import "./App.css";
import { useState } from "react";

function App() {
    const [myName, setName] = useState("Sergii");
    const [events, setEvents] = useState([
        { title: "mario", id: 1 },
        { title: "super sell", id: 2 },
        { title: "apple", id: 3 },
    ]);

    const handelClick = () => {
        setName("Halenko");
        console.log(myName);
    };

    return (
        <div classNam="App">
            <h1>My name is {myName}</h1>
            <button onClick={handelClick}>Change name</button>
            {events.map((event, index) => (
                <div key={event.id}>
                    <h2>{index} - {event.title}</h2>
                </div>
            ))}
        </div>
    );
}

export default App;
