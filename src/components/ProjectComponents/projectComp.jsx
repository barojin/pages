import React, { Component } from 'react'
import ContentList from '../utils/contentList'

export default class Project extends React.Component {
    constructor(props){
        super(props);        
        this.state = {showContent: false}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }    

    handleToggleClick() {
        this.setState(prevState => ({
            showContent: !prevState.showContent
        }));
    }
    render(){
        return (
            <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                    <h4 className="mb-0" type="button" onClick={this.handleToggleClick}>
                        <a className="social-icon"  href={this.props.gitUrl}><i className="fab fa-github" />
                        </a> {this.props.title} <span className="text-primary">{this.props.techStack}</span>
                    </h4>
                    <ContentList contents={this.props.content} show={this.state.showContent} />  
                    <button type="button" class="btn btn-light" onClick={this.handleToggleClick}>
                        {this.state.showContent ? '-' : '+'}
                    </button>
                </div>
            </div>
            ); 
    }
}