import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

export const FullImg = ({ close =()=> {}, img }) => {

    return (
        img && 
        <div className='portfolio__fullImg'>
            <div onClick={()=> close(false)} className='modalClose'>
                <AiOutlineClose />
            </div>
            <div className='modal__opacity'></div>
            <div className='modal__content'>
                <img src={img.url} alt={img.alt}/>
            </div>
        </div>
    )
}
