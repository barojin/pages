import React, { Component } from 'react'
import ContentList from '../utils/contentList'

export default class Experience extends React.Component {
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
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">                    
                    <div className="subheading">
                        {this.props.jobTitle}
                    </div>
                    <div className="mb-3">
                        <a href={this.props.url}>{this.props.company}</a> | {this.props.location}
                    </div>                    
                    <ContentList contents={this.props.contents} show={this.state.showContent} />  
                    <button type="button" class="btn btn-dark" onClick={this.handleToggleClick}>
                        {this.state.showContent ? '^' : '='}
                    </button>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">{this.props.date}</span></div>
            </div>      
            ); 
    }
}