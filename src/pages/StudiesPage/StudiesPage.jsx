import HeroLayout from "../../components/HeroLayout/HeroLayout";
import StudiesList from "../../components/StudiesList/StudiesList";
import "./StudiesPage.css";

const StudiesPage = () => {
    const studiesData = {
        title: "The mastery of being ",
        titleSpan: "self taught",
        img: "https://res.cloudinary.com/drhwvqo2m/image/upload/v1698342373/portfolio-2v/votgi48tjcx9ekt2yzgg.png",
        imgAlt: "studying fio bitmoji",
        desc: "Truth be told, I have always been someone that loves learning and for as long as I can remember I always disliked the way school systems teach in a monotonous way. I believe we all have our own way of learning and that should be embraced!",
        desc2: "I am disciplined and organized enough that teaching myself something from scratch is a rewarding challenge I am always up to! Thankfully I am an extremely focused person and I can drive my attention towards whatever the task in hand in front of me is :)",
        btnTxt: "See studies"
    }
    return <section className="slide-from-bottom">
        <h2>My studies</h2>
        <div>
            <HeroLayout
                title={studiesData.title}
                titleSpan={studiesData.titleSpan}
                img={studiesData.img}
                imgAlt={studiesData.imgAlt}
                desc={studiesData.desc}
                desc2={studiesData.desc2}
                btnTxt={studiesData.btnTxt}
            />
        </div>
        <StudiesList />
    </section>
}

export default StudiesPage;