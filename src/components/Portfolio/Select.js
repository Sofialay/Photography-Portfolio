import React from 'react'

export const SelectedImages = ({ documents }) => {

    return(
        documents && documents.length > 0 && documents.map((item, i) => {
            return (
                <div className='gallery-img'>
                    <img key={i} src={item.url} alt={item.alt} />
                    <div className='hoverText'><a href='#'>This is a title</a></div>
                </div>
            ) 
        })
    )
}
