// styles
import "./WorkExpList.css";
// data
import { myWorkExperience } from "../../data-resources/myWorkExperience";

const WorkExpList = () => {
    return <div className="work-exp-grid">
        {
            myWorkExperience.map(job => {
                return <div key={job.id} className="work-exp-card">
                    <h3>{job.title}</h3>
                    <h4>{job.role}</h4>
                    <img src={job.img} alt={job.imgAlt} />
                    <p>{job.date}</p>
                    <p>{job.description}</p>
                    <button className="btn" >See more</button>
                </div>
            })
        }
    </div>
}

export default WorkExpList;