import React, { useState, useEffect } from 'react'
// import { FullImg } from './FullImg';

export const SelectedImages = ({ documents }) => {
    // const [fullImg, setFullImg] = useState(false)
    // const [img, setImg] = useState('')

    return(
        <>
            {documents && documents.length > 0 && documents.map((item, i) => {
                return (
                    <div className='gallery-img'>
                        <img key={i} src={item.url} alt={item.alt} onClick={()=> {
                            //    setFullImg(true); setImg({url: item.url, alt: item.alt})
                            }} 
                        />
                        <div className='hoverText'><a href='#'>This is a title</a></div>
                    </div>
                ) 
            })}
        </>
    )
}
