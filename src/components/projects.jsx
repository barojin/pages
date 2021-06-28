import React, { Component } from 'react'


export default class Projects extends Component {

render() {
  return (
    <div>
      <section className="resume-section" id="projects">
        <div className="resume-section-content">
          <h2 className="mb-5">Projects</h2>
            
{/* 
        <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0"><a className="social-icon" href="https://github.com/barojin/PTEMPI/blob/main/cpi.c"><i className="fab fa-github" /></a>
                Project name <span className="text-primary">[tech stack]</span></h3>
              <p> Brief</p>
            </div>
          </div>
*/}           
            <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                    <h3 className="mb-0">
                        <a className="social-icon"  href="https://github.com/barojin/DjangoTutorial"><i className="fab fa-github" />
                        </a> Polls Web App <span className="text-primary">[python, Django framework, Sqlite3]</span>
                    </h3>
                    <p> Create the web site that shows polls and vote in them and admin site provide the add, change, and delete polls.
                        It contains how to handle the route, models in the Database, automated testing, views and templates, admin page conventions,
                        packaging to deploy and patching with git.</p>
                </div>
            </div>
            
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0"><a className="social-icon" href="https://github.com/barojin/Microservice_Spring"><i className="fab fa-github" />
              </a> Microservices on Spring<span className="text-primary">[Java, Spring framework, JPA, h2, HATEOAS, Netflix Eureka]</span></h3>
              <p>Implemented Login service which stores user info and validates the request invoked and Post service which is for CRUD of the post and communication of each service via Eureka server dispatcher.</p>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0"><a className="social-icon" href="https://github.com/barojin/DuckNQuiz"><i className="fab fa-github" />
              </a> Strategy Pattern implementation<span className="text-primary">[Java, JUnit]</span></h3>
              <p>Contains the abstract class which is HAS-A relation and the interface which is extended to concrete implementation classes. The objects for the client are assigned at runtime and it is tested based on equivalence classes in JUnit jupiter.</p>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0"><a className="social-icon" href="https://github.com/barojin/WRN"><i className="fab fa-github" />
              </a> Web App with React.js, Node.js<span className="text-primary">[JavaScript, React, Node, NeDB, RESTful] </span></h3>
              <p>Implemented CRUD table, role-based access control, session cookies on the front-end with Reactjs, encrypted password, REST architecture, test functions with Promise to manage asynchronous executions on the back-end with Nodejs.</p>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between">            
            <div className="flex-grow-1">
              <h3 className="mb-0"><a className="social-icon" href="https://github.com/barojin/PMC"><i className="fab fa-github" />
              </a> Bounded-buffer problem <span className="text-primary">[C, semaphore, Ubuntu]</span></h3>
              <p>Used the POSIX Threads(pthreads), semaphore to control access to shared resources. There are three functions such that producer which writes an element in buffer A, consumer which removes an element in buffer B, middleman which moves an element from A to B.</p>
            </div>   
          </div>          
          
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0"><a className="social-icon" href="https://github.com/barojin/MMSMCUDA"><i className="fab fa-github" />
              </a> Compute Unified Device Architecture(CUDA) programming with shared memory<span className="text-primary">[C++, CUDA Toolkit]</span></h3>
              <p>Optimized the use of memory between threads on parallel computing to maximize the bandwidth. It avoids redundant transfers by loading and storing data in a coalesced pattern to shared memory from global memory.</p>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0"><a className="social-icon" href="https://github.com/barojin/PTEMPI/blob/main/cpi.c"><i className="fab fa-github" />
              </a> Prouhet–Tarry–Escott problem on Message Passing Interface(MPI)<span className="text-primary">[C, Message Passing Interface library]</span></h3>
              <p>Implemented MPI parallel program  parallelizing the operation between 16 threads on a computer cluster and compared the performance of  O(2n) computation between on single laptop and cluster computers.</p>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">              
              <h3 className="mb-0"> Covid Case Tracker<span className="text-primary">[Python, AWS(EMR, S3, Step functions, CloudWatch, Lightsail)]</span></h3>
              <p>Implemented a covid case tracker that pulls the number of new cases all over the world everyday from CDC website using a python script and plotted trend graph. Set up a scheduler to run the python script on EMR using Step functions daily, use the plotted graph saved on S3 to display on WordPress website using AWS Lightsail. Implemented alarms on AWS Cloudwatch once the numbers increase significantly for a certain country.</p>
            </div>
          </div>
                      
        </div>
      </section>
    </div>
  )
 }
}
