import React from 'react';
import './Portfolio.scss';
import { useParams, useHistory, Link } from 'react-router-dom';
import { PortfolioContent } from './PortfolioContent';
import portfolioParams from '../../data/portfolioParams';

function Portfolio() {
    const params = useParams();
    // const history = useHistory()

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
            <h1>Portfolio</h1>
            <nav> 
                {portfolioParams.length > 0 && portfolioParams.map((item, index) =>
                    <Link key={index} to={item.path}>{item.title}</Link>
                )}
            </nav>
            {switchContent()}
        </section>
    )
}

export default Portfolio;
