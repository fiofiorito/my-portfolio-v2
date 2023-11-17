// components & styles
import HeroLayout from "../../components/HeroLayout/HeroLayout";
import StudiesList from "../../components/StudiesList/StudiesList";
import "./StudiesPage.css";
// data
import { studiesData } from "../../data-resources/myStudies";

const StudiesPage = () => {
    const studiesPresentation = studiesData;
    return <section className="slide-from-bottom">
        <div className="studies-page-div1">
            <h2 className="h2-xs-section-title">My studies</h2>
        </div>
        <div className="studies-page-div2">
            <HeroLayout
                title={studiesPresentation.title}
                titleSpan={studiesPresentation.titleSpan}
                img={studiesPresentation.img}
                imgAlt={studiesPresentation.imgAlt}
                desc={studiesPresentation.desc}
                desc2={studiesPresentation.desc2}
                btnTxt={studiesPresentation.btnTxt}
                elementId="study-list"
            />
        </div>
        <div id="study-list">
            <StudiesList />
        </div>

    </section>
}

export default StudiesPage;