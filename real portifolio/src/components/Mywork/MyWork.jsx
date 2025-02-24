import './mywork.css'
import myWorkData from '../../images/myWorkData'
import { FaArrowRight } from "react-icons/fa";

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
       <div className="mywork-title">
        <h1>My latest work</h1>
     
       </div>
       <div className="mywork-container">
        {myWorkData.map((work,index) =>{
        return <img key={index} src={work.wImg} alt="" className='logo' />
        })}
       </div>
       <div className='mywork-showmore'>
        <p>Show More</p>
        <FaArrowRight />
       </div>
    </div>
  )
}

export default MyWork