import './mywork.css'
import project from '../../images/project.jpg'
import myWorkData from '../../images/myWorkData'

const MyWork = () => {
  return (
    <div className='mywork'>
       <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={project} alt="" />
       </div>
       <div className="mywork-container">
        {myWorkData.map((work,index) =>{
        return <img key={index} src={work.wImg} alt="" />
        })}
       </div>
    </div>
  )
}

export default MyWork