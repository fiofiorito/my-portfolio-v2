// components & styles
import HeroLayout from "../../components/HeroLayout/HeroLayout";
import WorkExpList from "../../components/WorkExpList/WorkExpList";
import "./WorkExpPage.css";

const WorkExpPage = () => {
    const workData = {
        img: "https://res.cloudinary.com/drhwvqo2m/image/upload/v1698415630/portfolio-2v/ybxbipzmwhihrurzslp7.png",
        imgAlt: "fio bitmoji working",
        title: "Freelancer: freedom",
        titleSpan: "driven",
        desc: "At the start of 2023 I dropped out of college because I wanted to embrace what I value the most: Feeling a sense of freedom in my schedule.",
        desc2: "At 16 years old I remember I wanted to be a freelancer, but I was doubtful about it, I thought I couldn't make it and I left that dream of mine forgotten. 3 Years later and having to choose between staying in college or taking the riskier path of teaching myself how to program, I decided it was time to give it a chance to that old dream of mine. Thankfully, it worked!",
        btnTxt: "See my Work experience!"
    }
    return <section className="slide-from-bottom">
        <div className="work-exp-page">
            <HeroLayout
                img={workData.img}
                imgAlt={workData.imgAlt}
                title={workData.title}
                titleSpan={workData.titleSpan}
                desc={workData.desc}
                desc2={workData.desc2}
                btnTxt={workData.btnTxt}
                elementId="work-experience"
            />
        </div>
        <div id="work-experience">
            <WorkExpList />
        </div>
    </section>
}

export default WorkExpPage;