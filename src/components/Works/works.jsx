import React from 'react'
import './works.css'
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
import javaLogo from '../../assets/java.png';
import reactLogo from '../../assets/react.png';
import springLogo from '../../assets/springboot.png'
import javaScript from '../../assets/javascript.png';
import mySqlLogo from '../../assets/mysql.png';


const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Skills</h2>
        <span className="worksDesc">I am a skilled and passinate fullstack webdevloper with experience in creating user friendly websites. I have a strong understanding of software developement Life cycle Models. I am proficient in Front End Technologies that is HTML , css , Java Script & It's React Library and Backend Tools that is Java and Its SpringBoot Framework and MySQL Data Base.</span>
        <div className="worksImgs">
            <img src={javaLogo} alt="" className="worksImgJava" />

            <img src={reactLogo} alt="" className="worksImgReact" />
            <img src={springLogo} alt="" className="worksImgSpring" />
            <img src={javaScript} alt="" className="worksImgJS" />
            <img src={mySqlLogo} alt="" className="worksImgSQL" />
            
        </div>
        <button className="workBtn">
          See More
        </button>
    </section>
  )
}

export default Works