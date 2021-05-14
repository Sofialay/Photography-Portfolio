import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import mail from "../../assets/mail.png";
import './firstPage.scss'
import { Link } from 'react-router-dom';

const FirstPage = () => {
    return (
        <div className="bg-image">
            <article className="main-text">
                <h1 className="main-title">Pablo Nacimiento</h1>
                <p className="main-sub">Photographer based in Buenos Aires</p>
            </article>
            <section className="button-and-media">
                <button className="main-button"> <Link to="/content" className="link-website"> website </Link> </button>
                <section className="social-media-links">
                   <a href="#"><img className="media twitter" src={instagram} /> </a>
                    <a href="#"><img className="media linkedin" src={linkedin} /> </a>
                    <a href="#"><img className="media mail" src={mail} /></a>
                </section>
            </section>
        </div>

     
    )
}


export default FirstPage;
