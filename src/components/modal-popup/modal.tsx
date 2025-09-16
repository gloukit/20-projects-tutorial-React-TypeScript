import { ReactElement } from "react";
import "./styles.css";

type PropsType = {
    id?:string;
    header:ReactElement;
    body:ReactElement;
    footer:ReactElement;
    onClose:()=>void;
}

export default function Modal({id,header,body,footer,onClose}:PropsType){
    return (
        <div id={id || "Modal"} className="modal">
            <div className="modal-content">
                <div className="header">
                    {header? header : "Header"}
                    <span className="close-modal-icon" onClick={onClose}>&times;</span>
                </div>

                <div className="body">
                    {body? body : "This is Modal Body"}
                </div>
            </div>

            <div className="footer">
                {footer? footer : <h2>Footer</h2>}
            </div>
        </div>
    )
}