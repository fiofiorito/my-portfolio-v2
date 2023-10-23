// components & style
import "./StudiesList.css";
import { BiSolidBookBookmark } from "react-icons/bi";
// info
import { myStudies } from "../../data-resources/myStudies";

const StudiesList = () => {
    const studyList = myStudies;
    return <div className="studies-list-grid">
        {
            studyList.map(studyItem => {
                return <div className="studies-list-item">
                    <BiSolidBookBookmark className="studies-icon" />
                    <h3>{studyItem.title}</h3>
                    <p>{studyItem.date}</p>
                    <p>{studyItem.description}</p>
                </div>
            })
        }
    </div>
}

export default StudiesList;