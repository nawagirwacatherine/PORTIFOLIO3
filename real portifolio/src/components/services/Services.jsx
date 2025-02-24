
import './services.css'
import servicesData from '../../images/servicesData'
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <div id='services' className='services'>
      <div  className='services-title'>
        <h1>My Services</h1>
      
      </div>
      <div className="service-container">
        {servicesData.map((service,index)=>{
          return <div  key={index} className="services-format">
            <h3>{service.sNo}</h3>
            <h2>{service.sName}</h2>
            <p>{service.sDesc}</p>
            <div className="services-readmore">
              <p>Read More</p>
             <FaArrowRight />
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services;