// components
import HeroLayout from "../../components/HeroLayout/HeroLayout"

const HomePage = () => {
    const heroData = {
        title: "Frontend focused ",
        titleSpan: "Web Developer",
        img: "https://res.cloudinary.com/drhwvqo2m/image/upload/v1698352041/portfolio-2v/rfn4m2ifbbgzdsufwjhd.jpg",
        imgAlt: "ifio bitmoji",
        desc: "Hi! I am Fiorella Fiorito, a frontend web development student. I am actually studying full stack web development but I can handle and work most effectively with frontend.",
        desc2: "Are you ready? Browse freely!",
        btnTxt: "Let's start!"


    }

    return <section className="slide-from-bottom">
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
        <div id="home-page-overview">
            <h2>Overview</h2>
            <p>This is my updated portfolio, yes I do have another portfolio that I made a while back. The difference? This one has more up date information and I just wanted to create a new portfolio for the sake of practicing, so here we are!!</p>
            <p>My goal with this project was to create sort of a "path" for the user &#40;aka you&#41; to browse through. Of course you can go freemode and explore it in whichever way you like, but if you don't know where to start then feel free to follow the buttons!</p>
        </div>
    </section>

}

export default HomePage