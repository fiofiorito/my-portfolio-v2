const CarrouselItem = ({ item }) => {
    return <div className="carrousel-item">
        <div className="carrousel-item-card">
            <div>
                <img className="carrousel-item-img" src={item.img} alt="" />
            </div>
            <div>
                <h2 className="carrousel-item-h2">{item.title}</h2>
                <p className="carrousel-item-desc">{item.description}</p>
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