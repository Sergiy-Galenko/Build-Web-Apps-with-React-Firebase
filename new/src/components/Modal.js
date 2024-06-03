import ReactDOM from "react-dom";
import "./Modal.css";
export default function Modal({ children, handelClose, isSalesModal }) {
    return ReactDOM.createPortal(
        <div className="modal-backdrop">
            <div
                className="modal"
                style={{
                    border: "4px solid",
                    borderColor: isSalesModal ? "#ff4500" : "#555",
                    textAlign: "center",
                }}
            >
                {children}
                <button onClick={handelClose} className={isSalesModal ? "sales-btn" : ""}>close</button>
            </div>
        </div>,
        document.body
    );
}
