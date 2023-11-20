const CarrouselItem = ({ item }) => {
    return <div className="carrousel-item">
        <div className="carrousel-item-card">
            <div className="carrousel-item-div-img">
                <img className="carrousel-item-img" src={item.img} alt="" />
            </div>
            <div className="carrousel-item-text-div">
                <h2 className="carrousel-item-h2">{item.title}</h2>
                <div className="carrousel-item-desc">
                    <p className="carrousel-item-desc-p">{item.description}</p>
                </div>
                <h3 className="carrousel-item-h3">Tools & skills</h3>
                <ul className="carrousel-item-p">{
                    item.tools.map((tool, index) => {
                        return <li key={index}>{tool}</li>
                    })
                }</ul>
            </div>
        </div>

    </div>
}

export default CarrouselItem;