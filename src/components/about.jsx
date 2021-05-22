import React, { Component } from 'react'


export default class About extends Component {

render() {
  return (
     <div>          
  <section className="resume-section" id="about">
    <div className="resume-section-content">
      <h1 className="mb-0">
        Hojin
        <span className="text-primary">Nam</span>
      </h1>
      <div className="subheading mb-5">
        San Mateo, CA 94403 · (650) 888-0407 ·
        <a href="mailto:name@email.com">barojins@gmail.com</a>
      </div>
      <p className="lead mb-5">Software developer based on CS fundamentals writing program codes, using software frameworks and tools.</p>
      <div className="social-icons">
        <a className="social-icon" href="#!"><i className="fab fa-linkedin-in" /></a>
        <a className="social-icon" href="#!"><i className="fab fa-github" /></a>
        <a className="social-icon" href="#!"><i className="fab fa-twitter" /></a>
        <a className="social-icon" href="#!"><i className="fab fa-facebook-f" /></a>
      </div>
    </div>
  </section>
  <hr className="m-0" />
      </div>
  )
 }
}