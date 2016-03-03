import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
var $ = require ('jquery')

var Main = React.createClass({

    //----------------------------------------------------- init
    getInitialState: function(){
        return {name:"World",clickCount:0};
    },

    //----------------------------------------------------- on load
    componentDidMount: function(){
        console.log("Loading from backend...");
        $.get("/hello", function (result) {
          this.setState({
            name: result
          });
        }.bind(this));
    },

    //----------------------------------------------------- click
    handleClick: function(){
        this.setState({clickCount:this.state.clickCount+1});
    },

    //----------------------------------------------------- render
    render: function(){
        return (
            <div>
                <Header title="HEY YO" />
                <div className="container" style={{padding:40,fontSize:40,opacity:0.7}} onClick={this.handleClick}>
                    <i className="fa fa-smile-o"></i>
                    Hello {this.state.name}
                    <button type="button" className="btn btn-primary">{this.state.clickCount}</button>
                </div>
            </div>
        )
    }

});

ReactDOM.render(<Main />, document.getElementById('app'));
