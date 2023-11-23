// components & styles
import HeroLayout from "../../components/HeroLayout/HeroLayout";
import { BsStars } from "react-icons/bs";
import './HomePage.css'
// data
import { firstHero, secondHero, thirdHero } from "../../data-resources/HomePage"

const HomePage = () => {
    const heroData = firstHero;
    const overviewData = secondHero;
    const projectData = thirdHero;

    return <>
        <section className="container slide-from-bottom">
            <HeroLayout
                title={heroData.title}
                titleSpan={heroData.titleSpan}
                img={heroData.img}
                imgAlt={heroData.imgAlt}
                desc={heroData.desc}
                desc2={heroData.desc2}
                btnTxt={heroData.btnTxt}
                elementId="home-page-overview"
            />
        </section>
        <div id="home-page-overview" className="quote">
            <BsStars className="quote-icon" />
            <p className="quote-q">"If you talk about it, it's a dream, if you envision it, it's possible, but if you schedule it, it's real"</p>
            <p className="quote-p">Tony Robbins</p>
        </div>
        <div className="container home-page-overview">
            <div className="overview-hero">
                <HeroLayout
                    title={overviewData.title}
                    titleSpan={overviewData.titleSpan}
                    img={overviewData.img}
                    imgAlt={overviewData.imgAlt}
                    desc={overviewData.desc}
                    desc2={overviewData.desc2}
                    btnTxt={overviewData.btnTxt}
                />
            </div>
            <div className="overview-hero-div2">
                <HeroLayout
                    title={projectData.title}
                    titleSpan={projectData.titleSpan}
                    img={projectData.img}
                    imgAlt={projectData.imgAlt}
                    desc={projectData.desc}
                    desc2={projectData.desc2}
                    btnTxt={projectData.btnTxt}
                />
            </div>
        </div>
    </>

}

export default HomePage