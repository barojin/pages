import React, { Component } from 'react'


export default class About extends Component {

render() {
  return (
     <div>          
  <section className="resume-section" id="about">
    <div className="resume-section-content">
      <h1 className="mb-0">
        Hojin
        <span className="text-primary"> Nam</span>
      </h1>
      <div className="subheading mb-5">
        <a>San Mateo, California, United States<br></br></a>
        <a href="mailto:name@email.com"> barojins@gmail.com</a>
      </div>
      <p className="lead mb-5">Software developer based on CS fundamentals<br></br>
      writing program codes, using software frameworks and tools.</p>
      <div className="social-icons">
        <a className="social-icon" href="https://www.linkedin.com/in/barojin/"><i className="fab fa-linkedin-in" /></a>
        <a className="social-icon" href="https://github.com/barojin/"><i className="fab fa-github" /></a>        
      </div>
    </div>
  </section>
  <hr className="m-0" />
      </div>
  )
 }
}