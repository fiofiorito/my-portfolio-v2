import "./HeroLayout.css"

const HeroLayout = ({ img, imgAlt, title, titleSpan, desc, desc2, btnTxt, elementId }) => {
    const handleScroll = () => {
        const id = elementId;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    return <div className="hero-layout-grid">
        <div className="hero-layout-img-div">
            <img className="hero-layout-img" src={img} alt={imgAlt ? imgAlt : "hero img"} />
        </div>
        <div className="hero-layout">
            <h1 className="hero-layout-h1">{title} <span className="hero-layout-h1-b">{titleSpan}</span> </h1>
            <p className="hero-p">{desc}</p>
            <p className="hero-p">{desc2}</p>
            <button onClick={handleScroll} className="hero-layout-btn btn">{btnTxt}</button>
        </div>
    </div>
}

export default HeroLayout;