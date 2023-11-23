// components & styles
import HeroLayout from "../../components/HeroLayout/HeroLayout";
import WorkExpList from "../../components/WorkExpList/WorkExpList";
import "./WorkExpPage.css";
// data
import { workData } from "../../data-resources/myWorkExperience";

const WorkExpPage = () => {
    const workPresentation = workData
    return <section className="container slide-from-bottom">
        <div className="work-exp-div">
            <h2 className="h2-xs-section-title">My Work experience</h2>
        </div>
        <div className="work-exp-page">
            <HeroLayout
                img={workPresentation.img}
                imgAlt={workPresentation.imgAlt}
                title={workPresentation.title}
                titleSpan={workPresentation.titleSpan}
                desc={workPresentation.desc}
                desc2={workPresentation.desc2}
                btnTxt={workPresentation.btnTxt}
                elementId="work-experience"
            />
        </div>
        <div id="work-experience">
            <WorkExpList />
        </div>
    </section>
}

export default WorkExpPage;