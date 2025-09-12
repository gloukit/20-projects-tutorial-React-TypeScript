import React from "react";
import "./styles.css";
import QRCode from "react-qr-code";
import {toPng} from "html-to-image";

export default function QRCodeGenerator (){
    const [inputValue,setInputValue] = React.useState<string>("");
    const [qrCodeValue,setQRCodeValue] = React.useState<string>("");

    function handleQRCode (e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setQRCodeValue(inputValue);
        setInputValue("");
    }

    //【调用html-to-image库，生成图片下载链接】
    const qrRef = React.useRef<HTMLDivElement | null>(null);
    function downloadQRCode(){
        const node = qrRef.current;
        if(!node) return;

        toPng(node).then((dataUrl)=>{ 
            const link = document.createElement('a');
            link.download = "qrcode.png"; 
            link.href=dataUrl; 
            link.click(); 
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className="qrCode-container">

            <form onSubmit={(e)=>handleQRCode(e)}>
                <input type="text" 
                   placeholder="Enter your value here..."
                   onChange={(e)=>setInputValue(e.target.value)}
                   value={inputValue}
                   />

                <button disabled={inputValue && inputValue.trim()!==""? false : true}>
                    Generate QRCode
                </button>
            </form>
             
            {qrCodeValue && (
                <div className="qr-code">
                    <div ref={qrRef}> 
                        <QRCode value={qrCodeValue} size={320} className="code"/>
                    </div>
                    <p className="download" onClick={downloadQRCode}>
                        Download the QRCode!
                    </p>
                </div>
             ) }
           
        </div>
    )
}