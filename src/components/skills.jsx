import React, { Component } from 'react'


export default class Skills extends Component {

render() {
  return (
     <div>
  <section className="resume-section" id="skills">
    <div className="resume-section-content">
      <h2 className="mb-5">Skills</h2>
      <div className="subheading mb-3">Programming Languages</div>
        <p><b>Proficient: Python</b></p>
        <p>Java, C#, Javascript, HTML5, CSS, MySQL</p>
        <div className="subheading mb-3">Framework & Library</div>
        <p>Django, React, .NET, Spring, node.js</p>
        <div className="subheading mb-3">Tools</div>
        <p>Git, AWS(EC2, Dynamodb, S3, Lambda), Docker, VMware</p>
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
    </div>
  </section>
  <hr className="m-0" />
</div>

  )
 }
}