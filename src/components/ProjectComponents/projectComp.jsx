import React, { Component } from 'react'

export default class Project extends React.Component {
    constructor(props){
        super(props);        
    }
    render(){
        return (
            <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                    <h3 className="mb-0">
                        <a className="social-icon"  href={this.props.gitUrl}><i className="fab fa-github" />
                        </a> {this.props.title} <span className="text-primary">{this.props.techStack}</span>
                    </h3>
                    <p> {this.props.content} </p>
                </div>
            </div>
            ); 
    }
}