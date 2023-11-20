// components & styles
import CarrouselContainer from "../../components/PortfolioCarrousel/CarrouselContainer";
import "./PortfolioPage.css";

const PortfolioPage = () => {
    return <section className="slide-from-bottom">
        <div className="portfolio-page-div1">
            <h2 className="portfolio-page-h2 h2-xs-section-title">My portfolio</h2>

        </div>
        <p>In this section you can see my latest and most advanced projects so far! However if you would like to check out some older projects of mine, feel free to go to my <a href="https://fiorellafioritoporfolio.onrender.com/">old portfolio</a> &#40;Keep in mind its a little slow&#41;.</p>
        <div className="portfolio-page-div2">
            <CarrouselContainer />
        </div>

    </section>
}

export default PortfolioPage;