import React from 'react';
import './Portfolio.scss';
import { useParams, Link } from 'react-router-dom';
import { PortfolioContent } from './PortfolioContent';
import portfolioParams from '../../data/portfolioParams';

function Portfolio() {
    const params = useParams();

    const switchContent = () => {
        switch (params.section) {
            case 'nordico':
                return <PortfolioContent section='nordico'/>
            case 'sushi':
                return <PortfolioContent section='sushi'/>
            default:
                return <PortfolioContent section='all'/>
        }
    }

    return (
        <section className="portfolio" id='portfolio'>
            <h2>Portfolio</h2>
            <nav> 
                {portfolioParams.length > 0 && portfolioParams.map((item, index) =>
                    <Link className='linkTo' key={index} to={item.path}>{item.title}</Link>
                )}
            </nav>
            {switchContent()}
        </section>
    )
}

export default Portfolio;
