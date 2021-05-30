import React, { useEffect, useState } from 'react';
import { FullImg } from './FullImg';
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

    return (
        <>
            {fullImg && 
                <FullImg close={(set)=> setFullImg(set)} img={img}/>
            }
            <section className='portfolio__grid'>
                {section === 'all' ? 
                    documents && documents.length >= 0 && documents.map((item, index) => {
                        return (
                            <div key={index} className='gallery-img' onClick={()=> {
                                setFullImg(true); setImg({url: item.url, alt: item.alt})
                            }}>
                                <img key={index} src={item.url} alt={item.alt} />
                                <div className='hoverText'>This is a title</div> 
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
