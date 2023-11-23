// components & styles
import CarrouselContainer from "../../components/PortfolioCarrousel/CarrouselContainer";
import "./PortfolioPage.css";
// data
import { portfolioData } from "../../data-resources/myPortfolio";
import HeroLayout from "../../components/HeroLayout/HeroLayout";

const PortfolioPage = () => {
    const portfolioPresentation = portfolioData
    return <section className="container slide-from-bottom">
        <div className="portfolio-page-div1">
            <h2 className="portfolio-page-h2 h2-xs-section-title">My portfolio</h2>
        </div>
        <div className="portfolio-page-div2">
            <HeroLayout
                img={portfolioPresentation.img}
                imgAlt={portfolioPresentation.imgAlt}
                title={portfolioPresentation.title}
                titleSpan={portfolioPresentation.titleSpan}
                desc={portfolioPresentation.desc}
                desc2={portfolioPresentation.desc2}
                btnTxt={portfolioPresentation.btnTxt}
                elementId="portfolio"
            />
        </div>
        <div id="portfolio" className="portfolio-page-div3">
            <CarrouselContainer />
        </div>

    </section>
}

export default PortfolioPage;