import './contact.css'
import fruit from '../../images/fruit.jpg'
import { GoMail } from "react-icons/go";
import { MdAddIcCall } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
                    <img src={fruit} alt=""  className='logo' />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets talk </h1>
                <p>Iam available for anything that you want on. You contact me anytime</p>

                <div className="contact-details">
                    <div className="contact-detail">
                    <GoMail /> <p>cathynawagirwa@gmail.com</p>
                    </div>

                    <div className="contact-detail">
                    <MdAddIcCall /> <p>+256751172007</p>
                        </div>

                        <div className="contact-detail">
                        <CiLocationOn /> <p>Mengo,Kampala,Uganda</p>
                        </div>
                </div>
            </div>

            <form  className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>

            </form>
        </div>
    </div>
  )
}

export default Contact