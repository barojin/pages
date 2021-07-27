import React, { Component } from 'react'
import Clock from './Clock'

export default class About extends Component {
    constructor(props) {
        super(props);        
    }

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
      <p className="lead mb-5">Software engineer based on CS fundamentals<br></br>
      deliver a solid software product with frameworks and tools.</p>
      <div className="social-icons">
        <a className="social-icon" href="https://www.linkedin.com/in/barojin/"><i className="fab fa-linkedin-in" /></a>
        <a className="social-icon" href="https://github.com/barojin/"><i className="fab fa-github" /></a>        
      </div>      
        <Clock />
    </div>
  </section>
  <hr className="m-0" />
      </div>
  )
 }
}