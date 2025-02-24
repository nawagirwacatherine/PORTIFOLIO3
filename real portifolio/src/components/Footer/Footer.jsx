import './footer.css'
import restaurant4 from  '../../images/restaurant4.jpg'
import { CiUser } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={restaurant4}alt="" className='logo'/>
                <p>Iam a frontend developer from uganda with 2yrs of exprience</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                <CiUser />
                <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2025 Nawagirwa Catherine. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer