import React, { Component } from 'react'

class ListItem extends React.PureComponent {
    render(){
        return <li>{this.props.value}</li>;
    }
}

class ContentList extends React.PureComponent {
    render(){
        return (
            <ul>
                {this.props.contents.map((content) => <ListItem key={content.toString()} value={content} />)}
            </ul>
        );
    }
}

export default class Experience extends React.Component {
    constructor(props){
        super(props);        
    }    

    render(){
        return (
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0"> {this.props.jobTitle} </h3>
                    <div className="subheading mb-3">
                        <a href={this.props.url}> {this.props.company}</a>, {this.props.location}
                    </div>            
                    <ContentList contents={this.props.contents} />                         
                </div>
                <div className="flex-shrink-0"><span className="text-primary">{this.props.date}</span></div>
            </div>      
            ); 
    }
}