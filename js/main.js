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
                <div style={{padding:40,fontSize:40,opacity:0.3}} onClick={this.handleClick}>
                    Hello {this.state.name} ({this.state.clickCount})
                </div>
            </div>
        )
    }

});

ReactDOM.render(<Main />, document.getElementById('app'));
