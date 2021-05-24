import React, { Component } from 'react'


export default class Experience extends Component {

render() {
  return (
     <div>
  <section className="resume-section" id="experience">
    <div className="resume-section-content">
      <h2 className="mb-5">Experience</h2>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Software Developer</h3>
          <div className="subheading mb-3">GSCMS Inc, Seoul, South Korea</div>
          <p>Create task automation(dynamic-link library, C\#, .NET) on Windows server with an open-source(selenium). The assembly reduced the time for the laborious task in the accounting dept, which manually fetched bank statements of various online banking services, from a few hours to a second, and released it to the production.</p>
          <p>Build the test automation environment in various Operating Systems (OS) on VMware for operational acceptance and regression testing in an exploratory approach. The corner, critical, and custom cases by analyzing error logs and defects from the beta users are considered. It cut off the beta version error rate by 99%.</p>
          <p>Create new UIs, modify legacy functions in the company’s Windows app made of C#, On Windows Server with Oracle SQL, create the documentation for the main program according to various clients' needs.</p>
          <p>Build a responsive web page with AngularJS to support several dashboards in order to monitor server health and enable controlling the on-Premises service on the local server remotely for on-call team members.</p>
        </div>
        <div className="flex-shrink-0"><span className="text-primary">Feburary 2017 - December 2018</span></div>
      </div>      
      
    </div>
  </section>
  <hr className="m-0" />
 </div>
  )
 }
}