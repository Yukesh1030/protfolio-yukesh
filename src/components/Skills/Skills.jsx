import React from 'react'
import './Skills.css'
import UiDesign from '../../assets/ui-design.png';
import Webdesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';


const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className="skillDesc"> I am a skilled and passinate fullstack webdevloper with experience in creating user friendly websites. I have a strong understanding of software developement Life cycle Models. I am proficient in Front End Technologies that is HTML , css , Java Script & It's React Library and Backend Tools that is Java and Its SpringBoot Framework and MySQL Data Base.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UiDesign} alt="UI" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>I Can Design the UI in Figma and React JS</p>
                </div>           
            </div>
            <div className="skillBar">
                <img src={Webdesign} alt="WEB" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Developement</h2>
                    <p>I Can Develop an Website with ReatJS and Java Springboot</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="Backend" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Java Backend Developement</h2>
                    <p>I can use Java Spring boot frame work with MySQL databse configuration for backend developement. </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills