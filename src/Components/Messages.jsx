'use client';
import { useNavProv } from '@/app/NavContext';
import React from 'react';
import { IoMdCheckmarkCircle, IoMdCloseCircle } from 'react-icons/io';
import { IoClose } from "react-icons/io5";

const Success = () => {
    const {messageData, setMessageData} = useNavProv()
    // if (!messageData.show) return null
    return (
        <div className={`popup success-popup ${messageData.show ? 'visible' : ''}`}>
            <div className={`popup-icon ${messageData.type==="error"?"alert":"success"}-icon`}>
                {
                    messageData.type === "error"?<IoMdCloseCircle/>:<IoMdCheckmarkCircle/>
                }
            </div>
            <div className={`${messageData.type==="error"?"alert":"success"}-message`}>{messageData.message}</div>
            <div className="popup-icon close-icon" onClick={()=>setMessageData((v)=>({...v, show: false}))}>
                <IoClose />
            </div>
        </div>
    )
}

export { Success };
// export default Messages;
