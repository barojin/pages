import React, { Component } from 'react'


export default class Skills extends Component {

render() {
  return (
     <div>
  <section className="resume-section" id="skills">
    <div className="resume-section-content">
      <h2 className="mb-5">Skills</h2>
      <div className="subheading mb-3">Programming Languages</div>
        <p>Java, Python, C#, Javascript, HTML5, CSS, SQL(Oracle)</p>
        <div className="subheading mb-3">Framework & Library</div>
        <p>Spring, .NET, React, node.js</p>
        <div className="subheading mb-3">Tools</div>
        <p>Git, AWS(S3, Elastic Beanstalk), Docker, VMware</p>
      <ul className="list-inline dev-icons">
        <li className="list-inline-item"><i className="fab fa-java" /></li>
        <li className="list-inline-item"><i className="fab fa-python" /></li>        
        <li className="list-inline-item"><i className="fab fa-microsoft" /></li>        
        <li className="list-inline-item"><i className="fab fa-js-square" /></li>
        <li className="list-inline-item"><i className="fab fa-html5" /></li>
        <li className="list-inline-item"><i className="fab fa-css3-alt" /></li>        
        <li className="list-inline-item"><i className="fab fa-react" /></li>
        <li className="list-inline-item"><i className="fab fa-node-js" /></li>
      </ul>

      
      <div className="subheading mb-3">Workflow</div>
      <ul className="fa-ul mb-0">
        <li>
          <span className="fa-li"><i className="fas fa-check" /></span>
          Mobile-First, Responsive Design
        </li>
        <li>
          <span className="fa-li"><i className="fas fa-check" /></span>
          Cross Browser Testing &amp; Debugging
        </li>
        <li>
          <span className="fa-li"><i className="fas fa-check" /></span>
          Cross Functional Teams
        </li>
        <li>
          <span className="fa-li"><i className="fas fa-check" /></span>
          Agile Development
        </li>
      </ul>
    </div>
  </section>
  <hr className="m-0" />
</div>

  )
 }
}