// components & styles
import CarrouselContainer from "../../components/PortfolioCarrousel/CarrouselContainer";
import "./PortfolioPage.css";

const PortfolioPage = () => {
    return <section className="slide-from-bottom">
        <h2 className="portfolio-page-h2">My portfolio</h2>
        <p>Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
        <div className="portfolio-page-div">
            <CarrouselContainer />
        </div>

    </section>
}

export default PortfolioPage;