import React from 'react'
import './intro.css';
import bg from '../../assets/profile1.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className='hello'>Hello,</span><br />
            <span className='introText'>I'm 
                <span className="introName"> Yukesh G</span><br />Software Development Engineer
                </span>
            <p className="introPara">I am Entry Level Skilled and Passinated Software Engineer with experience of software development</p>
              {/* <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={500}><button className="btn"><img src={btnImg} alt="hire me" className='btnImg'/>Hire Me</button></Link> */}
            <a href="https://www.yukeshyuki18@gmail.com" target='_blank'><button className="btn"><img src={btnImg} alt="hire me" className='btnImg'/>Hire Me</button></a>
        </div>
        <img src={bg} alt="" className="bg" />
    </section>
  )
}

export default Intro