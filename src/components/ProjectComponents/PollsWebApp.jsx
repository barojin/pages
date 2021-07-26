import React, { Component } from 'react'

class PollsWebApp extends React.Component {
    render(){
        return <div className="d-flex flex-column flex-md-row justify-content-between">
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
    }
}

export default PollsWebApp;