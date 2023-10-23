import HeroLayout from "../../components/HeroLayout/HeroLayout";
import StudiesList from "../../components/StudiesList/StudiesList";
import "./StudiesPage.css";

const StudiesPage = () => {
    return <section className="slide-from-bottom">
        <h2>My studies</h2>
        <div>
            <HeroLayout />
        </div>
        <StudiesList />
    </section>
}

export default StudiesPage;