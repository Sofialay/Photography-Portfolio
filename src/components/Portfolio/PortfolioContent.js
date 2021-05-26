import React, { useEffect, useState } from 'react';
import { SelectedImages } from './Select';
import { getData } from '../../data/getImages';

export const PortfolioContent = ({ section }) => {
    const [documents, setDocuments] = useState('')
    const [fullImg, setFullImg] = useState(false)
    const [img, setImg] = useState('')

    useEffect(() => {
        getData(setDocuments)
    }, [])

    const switchSection = () => {
        let newVal = documents.filter((item) => item.name === section)
        return(
            <SelectedImages
                documents={newVal}
            />
        )
    }

    // const showFullImg = (url, alt) => {
        // return(
        //     fullImg &&
        //     <div className='portfolio__fullImg'>
        //         <img src={url} alt={alt}/>
        //     </div>
        // )
    // }

    return (
        <>
        {fullImg && 
            <div className='portfolio__fullImg' onClick={()=> setFullImg(false)}>
                <img src={img.url} alt={img.alt}/>
            </div>
        }
        <section className='portfolio__grid'>
            {section === 'all' ? 
               documents && documents.length >= 0 && documents.map((item, index) => {
                    return (
                        <div className='gallery-img' onClick={()=> {setFullImg(true); setImg({url: item.url, alt: item.alt})}}>
                            {/* showFullImg(item.url, item.alt) */}
                            <img key={index} src={item.url} alt={item.alt} />
                            <div className='hoverText'><a href='#'>This is a title</a></div>
                        </div>
                    )
                })
            :
                documents && documents.length >= 0 &&
                switchSection()
            }
        </section>
        </>
    )
}
