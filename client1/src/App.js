import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import $ from 'jquery';



function App() {
  
    $(document).ready(function () {
      $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
          $(".navbar").addClass("sticky");
        } else {
          $(".navbar").removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
          $(".scroll-up-btn").addClass("show");
        } else {
          $(".scroll-up-btn").removeClass("show");
        }
      });

      // slide-up script
      $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $("html").css("scrollBehavior", "auto");
      });

      $(".navbar .menu li a").click(function () {
        // applying again smooth scroll on menu items click
        $("html").css("scrollBehavior", "smooth");
      });

      // toggle menu/navbar script
      $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
      });


    })

  const [data, setData] = useState([
    {pro_images : "./images/cloud.png", pro_title:"Cloud Dashboard", site_link : "https://cloud.bitsathy.ac.in/"},
    {pro_images : "./images/corsera.png", pro_title:"Online Course Site", site_link : "http://44.203.84.49/"},
    {pro_images : "./images/portfolio.jpg", pro_title:"Portfolio Website", site_link : "https://rajkavin.vercel.app/"}
  ]);


  return (
    <>
      <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
      </div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo"><a href="#">Portfo<span>lio.</span></a></div>
          <ul className="menu">
            <li><a href="#home" className="menu-btn">Home</a></li>
            <li><a href="#about" className="menu-btn">About</a></li>
            <li><a href="#skills" className="menu-btn">Skills</a></li>
            <li><a href="#services" className="menu-btn">Projects</a></li>
            <li><a href="#teams" className="menu-btn">Teams</a></li>
            <li><a href="#contact" className="menu-btn">Contact</a></li>
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">Kavinraj K</div>
            <div className="text-3">And I'm a <span>Developer</span></div>
            <a href="https://www.linkedin.com/in/kavinraj-k/" target='blank'>Hire me</a>
          </div>
        </div>
        <div className="home-image">
          <img className="home-image1" src="/images/bg-1.png" alt="" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
              <img src="/images/about-1.png" alt="" />
            </div>
            <div className="column right">
              <div className="text p">I'm Kavinraj and I'm a <span id='text'>Developer</span></div>
              <p>Highly skilled and motivated Frontend Developer with a passion for creating user-friendly and visually appealing web applications. I am seeking a challenging position that allows me to utilize my technical expertise and creative problem-solving skills to contribute to the success of a dynamic organization. With a strong foundation in HTML, CSS, and JavaScript, along with extensive experience in frontend frameworks such as React and Angular, I aim to deliver intuitive and seamless user experiences.</p>
              <a type='download' href="./images/resume.pdf" target='blank'>Download CV</a>
            </div>
          </div>
        </div>

      </section>
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title">My skills</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">My creative skills & experiences.</div>
              <p>
                I have a solid skill set and extensive experience in HTML, CSS, JavaScript, PHP, and MySQL. With HTML, I excel in creating well-structured and semantically correct markup that ensures optimal accessibility and search engine visibility. CSS is another area of expertise where I am proficient in crafting visually appealing and responsive designs using modern techniques and frameworks. JavaScript is my go-to language for creating interactive and dynamic user experiences. Additionally, I have a strong command of PHP for server-side scripting and MySQL for efficient database management. This comprehensive skill set allows me to develop robust and feature-rich web applications with seamless integration between the frontend and backend components.</p>
            </div>
            <div className="column right">
              <div className="bars">
                <div className="info">
                  <span>ReactJS</span>
                  <span>80%</span>
                </div>
                <div className="line reactjs"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>NodeJS</span>
                  <span>50%</span>
                </div>
                <div className="line nodejs"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>JavaScript</span>
                  <span>70%</span>
                </div>
                <div className="line js"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>MySQL</span>
                  <span>85%</span>
                </div>
                <div className="line sql"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Laravel</span>
                  <span>80%</span>
                </div>
                <div className="line laravel"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Tailwind CSS</span>
                  <span>90%</span>
                </div>
                <div className="line css"></div>
              </div>
             
              {/* <div className="bars">
                <div className="info">
                
                  <span>Laravel</span>
                  <span>80%</span>
                </div>
                <div className="line laravel"></div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="services" id="services">
        <div className="max-width">
          <h2 className="title">My Projects</h2>
          <div className="serv-content">
            <div className="project-container">
              {
                data.map((datas) => {
                  return (
                    <>
                      <div className="project-card">
                        <div className="first-content">
                          <img src={datas.pro_images} alt="pro_images" />
                        </div>
                        <div className="second-content">
                          <div className="project-heading">
                            {datas.pro_title}
                          </div>
                          <a href={datas.site_link} target='blank'><button className="view-button">View Site</button></a>
                        </div>
                      </div>
                    </>
                  );
                })
              }
            </div>
          </div>
        </div>
      </section >



      <section className="teams" id="teams">
        <div className="max-width">
          <h2 className="title">My teams</h2>
          <div className="card1">
            <div className="card">
              <div className="box">
                <img src="images/profile-1.jpg" alt="" />
                <div className="text">Sai Prashanth K</div>
                <p style={{ fontWeight: "900" }}>Fullstack Developer</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src="images/profile-2.png" alt="" />
                <div className="text">Hariharan P</div>
                <p style={{ fontWeight: "900" }}>Web Developer</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src="images/profile-3.png" alt="" />
                <div className="text">Guruprasath M </div>
                <p style={{ fontWeight: "900" }}>Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              <p>Thank you for visiting my website! I would love to hear from you and answer any questions you may have. Please feel free to reach out to me using any of the following methods:</p>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user"></i>
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Kavinraj K</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Anthiyur</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope"></i>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">ragavkavinraj@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Message me</div>
              <form action="#">
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div className="field email">
                    <input type="email" placeholder="Email" required />
                  </div>
                </div>
                <div className="field">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="field textarea">
                  <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                </div>
                <div className="button-area">
                  <button type="submit">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>Created By <a href="https://www.codingnepalweb.com">Kavin 💕</a> | <span className="far fa-copyright"></span>
          2023 All rights reserved.</span>
      </footer>


    </>
  );
};

export default App


