import React, { useRef } from 'react'
import './contact.css';
import InstagramIcon from '../../assets/instagram.png'
import RationShopImg from '../../assets/ration shop.png';
import chatAppImg from '../../assets/chat app.jpg'
import LinkedIn from '../../assets/LinkedIn_logo_initials.png';
import hackerRank from '../../assets/HackerRank.png';
import github from '../../assets/icons8-github-50.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_60vixgm', 'template_pzjqz4o', form.current, {
        publicKey: '0upZjm3PlrhF-V4LIHsRb',
      })
      .then(
        (result) => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent !')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
        <div className="clients">
            <h1 className="contactPageTitle">My Projects</h1>
            <p className="clientDesc">
                I have had the oppotunity to work with my team for some software projects these includes.
            </p>
            <div className="clientImgs">
               <div className="project1"> 
                <img src={RationShopImg} alt="" className="clientImg" />
                <h3 className="projectTitle">Online Ration Shop Website</h3>
                <p className="projectDesc">This is an Online Inventory Management Website that are developed for my academics. </p>
                <a href="https://www.irjmets.com/uploadedfiles/paper//issue_3_march_2024/50981/final/fin_irjmets1711286982.pdf" target='_blank' className="projectLink">See more</a>
                </div><br /> <div className="project2">
                <img src={chatAppImg} alt="" className="clientImg" />
                <h3 className="projectTitle">Online Ration Shop Website</h3>
                <p className="projectDesc">This is an Online Inventory Management Website that are developed for my academics. </p>
                <a href="https://www.irjmets.com/uploadedfiles/paper//issue_3_march_2024/50981/final/fin_irjmets1711286982.pdf" target='_blank' className="projectLink">See more</a>
               </div>

            </div>
        </div>
        <div className="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Your Name' name='your_name'/>
                <input type="email" className='email' placeholder='Your Email'name='your_email' />
                <textarea type="message" rows='5' className='msg' placeholder='Your Message' name='your_message'/>
                <button className="submitBtn" type='submit' value='Send'>Submit</button>
                <div className="links">
                    <img src={LinkedIn} alt="linkedin" className="link" onClick={()=>window.open("https://www.linkedin.com/in/yukesh-g-")} />
                    <img src={hackerRank} alt="hackerrank" className="link" onClick={()=>window.open("https://www.hackerrank.com/profile/yukeshyuki18")}/>
                    <img src={github} alt="twitter" className="link" onClick={()=>window.open("https://github.com/Yukesh1030")}/>
                    <img src={InstagramIcon} alt="Insta" className="link" onClick={()=>window.open("https://www.instagram.com/yukeshgofficial/")} />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact