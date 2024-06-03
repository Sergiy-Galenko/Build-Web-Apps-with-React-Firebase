import ReactDOM from 'react-dom'
import "./Modal.css";
export default function Modal({ children, handelClose }) {
    return  ReactDOM.createPortal((
        <div className="modal-backdrop">
            <div className="modal">
                {children}
                <button onClick={handelClose}>close</button>
            </div>
        </div>
    ), document.body);
}
