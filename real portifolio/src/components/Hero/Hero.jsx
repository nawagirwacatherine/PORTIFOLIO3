
import AnchorLink from "react-anchor-link-smooth-scroll";
import './Hero.css'
import logo from '../../images/logo.jpg'

const Hero = () => {
  return (
    <div id="home"className='hero'>
        <img src={ logo} alt="" className='logo' />
        <h1><span>Im Nawagirwa Catherine</span>, frontend developer based in Uganda</h1>
        <p>Iam a frontend developer from kampala uganda,With 2years of exprience. </p>

        <div  className='hero-action'>

        <div  className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink>
            Connect with me
            </div>

            <div  className='hero-resume'>
            My resume
            </div>

        </div>
    </div>
  )
}

export default Hero;