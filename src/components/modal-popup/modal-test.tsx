import Modal from "./modal";
import React from "react";
import "./styles.css";

export default function ModalTest(){
    const [showModalPopup,setShowModalPopup] = React.useState<boolean>(false);
    
    //控制状态变量
    function handleShowPopup(){
        setShowModalPopup(prev=>!prev);
    }
    function onClose(){
        setShowModalPopup(false);
    }
    //设计组件内容
    function Header(){
        return (
            <h3>Modal Popup</h3>
        )
    }
    function Body(){
        return (
            <p>This is content of Modal Popup</p>
        )
    }
    function Footer(){
        return (
            <h3>Here is footer</h3>
        )
    }

    return (
    <div className="modal-test">
        <button onClick={handleShowPopup}>Open Modal Popup!</button>
        {showModalPopup && (
            <Modal id={"custom-id"}
                   header={<Header/>}
                   body={<Body/>}
                   footer={<Footer/>}
                   onClose={onClose}
            />
        )}
        <div className="others">hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</div>
    </div>
    
    )
}