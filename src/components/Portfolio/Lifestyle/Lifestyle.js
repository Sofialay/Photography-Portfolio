import React from 'react'
import cup from '../../../assets/PortfolioLifestyle/cup.jpg'
import danger from '../../../assets/PortfolioLifestyle/danger.jpg'
import dogs from '../../../assets/PortfolioLifestyle/dogs.jpg'
import skyy from '../../../assets/PortfolioLifestyle/skyy.jpg'

import './Lifestyle.scss'

function Lifestyle() {
        return (
            <div className="lifestyle-ph">
               <h2 className="lifestyle-ph-title">Lifestyle</h2>
               <div className="lifestyle-ph-img-container">
                   <img className="lifestyle-ph-img" src={cup} />
                   <img className="lifestyle-ph-img" src={danger} />
                   <img  className="lifestyle-ph-img" src={dogs} />
                   <img className="lifestyle-ph-img" src={skyy} />
               </div>
            </div>
        )
}


export default Lifestyle;
