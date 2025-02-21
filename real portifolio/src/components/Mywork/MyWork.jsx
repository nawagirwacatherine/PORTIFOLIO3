import './mywork.css'
import project from '../../images/project.jpg'
import myWorkData from '../../images/myWorkData'
import { FaArrowRight } from "react-icons/fa";

const MyWork = () => {
  return (
    <div className='mywork'>
       <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={project} alt="" className='logo' />
       </div>
       <div className="mywork-container">
        {myWorkData.map((work,index) =>{
        return <img key={index} src={work.wImg} alt="" className='logo' />
        })}
       </div>
       <div>
        <p>Show More</p>
       </div>
       <FaArrowRight />
    </div>
  )
}

export default MyWork