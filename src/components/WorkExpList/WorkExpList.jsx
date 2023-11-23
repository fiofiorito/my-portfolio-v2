// styles
import "./WorkExpList.css";
// data
import { myWorkExperience } from "../../data-resources/myWorkExperience";
import { Link } from "react-router-dom";

const WorkExpList = () => {
    return <div className="work-exp-grid">
        {
            myWorkExperience.map(job => {
                return <div key={job.id} className="work-exp-card">
                    <h3 className="work-exp-card-h3">{job.title}</h3>
                    <h4 className="work-exp-card-h4">{job.role}</h4>
                    <img className="work-exp-card-img" src={job.img} alt={job.imgAlt} />
                    <p className="work-exp-card-p">{job.date}</p>
                    <p className="work-exp-card-p">{job.description}</p>
                    <Link target="blank" to={job.seeMore}><button className="btn">See more</button></Link>

                </div>
            })
        }
    </div>
}

export default WorkExpList;